	try {
	    localStorage.setItem('jbp_tool_isPrivateMode', '1');
	    localStorage.removeItem('jbp_tool_isPrivateMode');
	    window.isPrivateMode = false;
	} catch(e) {
	    window.isPrivateMode = true;
	}
	
	function back() {
		this.location.href="gj.html";
	}

	function tip(msg) {
		//��ʾ
		layer.open({
			content: msg
			,skin: 'msg'
			,time: 2//2����Զ��ر�
		});
	}
	
	function tip2(msg, second) {
		//��ʾ
		layer.open({
			content: msg
			,skin: 'msg'
			,time: second//2����Զ��ر�
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
	
	//animated:�̶��ʣ�infinite:ѭ����x:����Ч��
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