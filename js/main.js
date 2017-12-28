var maxMessageSize = 1000;
function $_(id) {
	return document.getElementById(id)
}
function selectImage(that) {
	  var filepath=$(that).val(); 
        if (filepath == "") {  
            return;  
        }  
	var reader = new FileReader();
	layer.open({type: 2});
	reader.onload = function(event) {
		$_("secretTxt").value = "";
		$_("secretPwd").value = "";
		$_("outImg").src = "";
		$("#outImg").hide();
		var img = new Image();
		img.onload = function() {
			var ctx = $_("canvasImg").getContext("2d");
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.canvas.width = img.width;
			ctx.canvas.height = img.height;
			var action = $("input[name='action']:checked").val();
			// 加密时
			if (action == 0) {
				var newImg = new Image();
				newImg.onload = function() {
					ctx.canvas.width = newImg.width;
					ctx.canvas.height = newImg.height;
					ctx.drawImage(newImg, 0, 0);
					layer.closeAll();
					$('#imgView').attr('src', newImg.src);
					tip("图片加载成功，点击相应按钮操作");
				}
				modifyImg(that.files[0], img, newImg);
			} else {
				layer.closeAll();
				ctx.drawImage(img, 0, 0);
				$('#imgView').attr('src', img.src);
				tip("图片加载成功，点击相应按钮操作");
			}
		};
		img.src = event.target.result;
	};
	reader.readAsDataURL($_("file").files[0])
}


function encode() {
	var message = $_("secretTxt").value;
	var password = $_("secretPwd").value;
	var output = $_("outImg");
	var canvasImg = $_("canvasImg");
	var ctx = canvasImg.getContext("2d");
	if (password.length > 0) {
		message = sjcl.encrypt(password, message)
	} else {
		message = JSON.stringify({
			text: message
		})
	}
	var pixelCount = ctx.canvas.width * ctx.canvas.height;
	if ((message.length + 1) * 16 > pixelCount * 4 * 0.75) {
		tip("加密信息太长相对于图片来说太长，请减少文字信息，或者加大图片！");
		return
	}
	if (message.length > maxMessageSize) {
		tip("加密信息太长，最大为：" + maxMessageSize);
		return
	}
	layer.open({type: 2});
	var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	encodeMessage(imgData.data, sjcl.hash.sha256.hash(password), message);
	ctx.putImageData(imgData, 0, 0);
	setTimeout(function() {
		layer.closeAll();
		$("#outImg").show();
		$("#outImg").attr('src', canvasImg.toDataURL('image/jpg'));
		tip("加密图片已经生成，保存后发送给朋友吧！");
		addAnimate("outImg", animated[Math.floor(Math.random() * animated.length)]);
	},200);

}

function decode() {
	var password = $_("secretPwd").value;
	var passwordFail = "密码错误，或者这张图片没有加密";
	var ctx = $_("canvasImg").getContext("2d");
	var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	var message = decodeMessage(imgData.data, sjcl.hash.sha256.hash(password));
	var obj = null;
	try {
		obj = JSON.parse(message);
	} catch(e) {
		//if (password.length > 0) {
			showDecodeError(passwordFail)
		//}
	}
	if (obj) {
		if (obj.ct) {
			try {
				obj.text = sjcl.decrypt(password, message);
			} catch(e) {
				showDecodeError(passwordFail)
			}
		}
		var escChars = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#x2F;",
			"\n": "<br/>"
		};
		var escHtml = function(string) {
			return String(string).replace(/[&<>"'\/\n]/g,
			function(c) {
				return escChars[c]
			})
		};
		showDecodeSuccess("图片隐藏信息:" + escHtml(obj.text))
	}
}
var getBit = function(number, location) {
	return ((number >> location) & 1)
};
var setBit = function(number, location, bit) {
	return (number & ~ (1 << location)) | (bit << location)
};
var getBitsFromNumber = function(number) {
	var bits = [];
	for (var i = 0; i < 16; i++) {
		bits.push(getBit(number, i))
	}
	return bits
};
var getNumberFromBits = function(bytes, history, hash) {
	var number = 0,
	pos = 0;
	while (pos < 16) {
		var loc = getNextLocation(history, hash, bytes.length);
		var bit = getBit(bytes[loc], 0);
		number = setBit(number, pos, bit);
		pos++
	}
	return number
};
var getMessageBits = function(message) {
	var messageBits = [];
	for (var i = 0; i < message.length; i++) {
		var code = message.charCodeAt(i);
		messageBits = messageBits.concat(getBitsFromNumber(code))
	}
	return messageBits
};
var getNextLocation = function(history, hash, total) {
	var pos = history.length;
	var loc = Math.abs(hash[pos % hash.length] * (pos + 1)) % total;
	while (true) {
		if (loc >= total) {
			loc = 0
		} else {
			if (history.indexOf(loc) >= 0) {
				loc++
			} else {
				if ((loc + 1) % 4 === 0) {
					loc++
				} else {
					history.push(loc);
					return loc
				}
			}
		}
	}
};
function encodeMessage(colors, hash, message) {
	var messageBits = getBitsFromNumber(message.length);
	messageBits = messageBits.concat(getMessageBits(message));
	var history = [];
	var pos = 0;
	while (pos < messageBits.length) {
		var loc = getNextLocation(history, hash, colors.length);
		colors[loc] = setBit(colors[loc], 0, messageBits[pos]);
		while ((loc + 1) % 4 !== 0) {
			loc++
		}
		colors[loc] = 255;
		pos++
	}
}
var decodeMessage = function(colors, hash) {
	var history = [];
	var messageSize = getNumberFromBits(colors, history, hash);
	if ((messageSize + 1) * 16 > colors.length * 0.75) {
		return ""
	}
	if (messageSize === 0 || messageSize > maxMessageSize) {
		return ""
	}
	var message = [];
	for (var i = 0; i < messageSize; i++) {
		var code = getNumberFromBits(colors, history, hash);
		message.push(String.fromCharCode(code))
	}
	return message.join("")
};
function showDecodeError(msg) {
	tip2(msg,3);
}
function showDecodeSuccess(msg) {
	tip2(msg,3);
};