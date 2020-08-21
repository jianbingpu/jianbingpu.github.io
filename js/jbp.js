	var animated = new Array("bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flip flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","swing","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","hinge");
	
	try {
	    localStorage.setItem('jbp_tool_isPrivateMode', '1');
	    localStorage.removeItem('jbp_tool_isPrivateMode');
	    window.isPrivateMode = false;
	} catch(e) {
	    window.isPrivateMode = true;
	}
	
	function back() {
		this.location.href="gj.html?v=200821";
	}

	function tip(msg) {
		//提示
		layer.open({
			content: msg
			,skin: 'msg'
			,time: 2//2秒后自动关闭
		});
	}
	
	function tip2(msg, second) {
		//提示
		layer.open({
			content: msg
			,skin: 'msg'
			,time: second//2秒后自动关闭
		});
	}
	
	function pop(title, msg) {
		 //自定义标题风格
		 layer.open({
		 type: 1,
		    title: [
		     title,
		      'margin-top:0px;border-radius:0px;background-color: #FFC74A; color:#fff;'
		    ]
		    ,content: msg
		    ,time: 30
		    ,btn: '我知道了'
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
	
	//animated:固定词，infinite:循环，x:是特效名
	/*
	﻿Class Name			
	bounce	flash	pulse	rubberBand
	shake	headShake	swing	tada
	wobble	jello	bounceIn	bounceInDown
	bounceInLeft	bounceInRight	bounceInUp	bounceOut
	bounceOutDown	bounceOutLeft	bounceOutRight	bounceOutUp
	fadeIn	fadeInDown	fadeInDownBig	fadeInLeft
	fadeInLeftBig	fadeInRight	fadeInRightBig	fadeInUp
	fadeInUpBig	fadeOut	fadeOutDown	fadeOutDownBig
	fadeOutLeft	fadeOutLeftBig	fadeOutRight	fadeOutRightBig
	fadeOutUp	fadeOutUpBig	flip flipInX	flipInY
	flipOutX	flipOutY	lightSpeedIn	lightSpeedOut
	rotateIn	rotateInDownLeft	rotateInDownRight	rotateInUpLeft
	rotateInUpRight	rotateOut	rotateOutDownLeft	rotateOutDownRight
	rotateOutUpLeft	rotateOutUpRight	swing	jackInTheBox
	rollIn	rollOut	zoomIn	zoomInDown
	zoomInLeft	zoomInRight	zoomInUp	zoomOut
	zoomOutDown	zoomOutLeft	zoomOutRight	zoomOutUp
	slideInDown	slideInLeft	slideInRight	slideInUp
	slideOutDown	slideOutLeft	slideOutRight	slideOutUp
	hinge
	*/
	function addAnimate(objNm, x, isLoop) {
		var animateStr = x + ' animated ';
		if (isLoop) {animateStr+="infinite"}
	      $('#'+objNm).addClass(animateStr).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	      $(this).toggleClass(animateStr);
	    });
	}
	
	
	function jump(url) {
	    var a = document.createElement('a');
	    a.setAttribute('rel', 'noreferrer');
	    a.setAttribute('id', 'hideClick');
	    a.setAttribute('href', url);
	    document.body.appendChild(a);
	    document.getElementById('hideClick').click();
	    document.body.removeChild(a);
	}
	
	/**
	 * 平台判断
	 */
	function isAndroid(){
	    var ua = navigator.userAgent.toLowerCase();
	    
	    if(ua.match(/Android/i)=="android"){
			return true;
	    }
	    
	    return false;
	};
	
	/**
	 * 微信浏览器判断
	 */
	function isWeixin(){ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
			return true; 
		}else{ 
			return false; 
		} 
	}
	
	
	function toUnicode(str) {
		var temp,
		i = 0,
		r = '',
		len = str.length;
		 
		for (; i < len; i++) {
		temp = str.charCodeAt(i).toString(16);
		 
		while ( temp.length < 4 )
		temp = '0' + temp;
		 
		r += '\\u' + temp;
		};
		 
		return r;
	}
	
	function toChs(str) {
		str = unescape(str.replace(/\\u/g,"%u"));
		return str;
	}

    // 画面跳转
    function redirectTo(page) {
        if(!window.isPrivateMode && !!window.localStorage){
            localStorage.setItem("jbp_tool_srcollTop", document.body.scrollTop);
        }
        jump(page+"?v=200821");
        //this.location.href = page;
    }

    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?464d7e308b0fdd9fb407887891784488";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
