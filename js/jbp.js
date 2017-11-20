	function back() {
		this.location.href="gj.html";
	}

	function tip(msg) {
		//提示
		layer.open({
			content: msg
			,skin: 'msg'
			,time: 2 //2秒后自动关闭
		});
	}
	
 	function replaceAll(srcStr, aStr, bStr) {
		srcStr = srcStr.replace(new RegExp(aStr,'gi'), bStr);
		return srcStr;
	}
	
	function deleteAll(srcStr, aStr) {
		return replaceAll(srcStr, aStr, "");
	}

	function replaceAllChar(srcStr, aStr, bStr) {
		while (srcStr.indexOf(aStr) >= 0) {
			srcStr = srcStr.replace(aStr, bStr);
		}
		
		return srcStr;
	}
	
       function generateSmall(){
	    var str = [];
	    for(var i=97; i<123; i++){
	        str.push(String.fromCharCode(i));
	    }
	    return str;
	}