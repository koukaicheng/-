(function(){
	function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
      return "";
    };
    var industry = getvl("industry");
    var num = getvl('num');
    var total_cont = $('.total_cont');
    total_cont.text("相关公司:"+num+"个");
    var type = getvl("type");
    if(type=="细分行业"){
    	  
    	  var divs = $('.xfhy div');
//  	  console.log(divs)
    	  divs.removeClass();
    	 for(var i =0;i<divs.length;i++){
    	 	if(industry==divs[i].innerHTML){
    	 		$(divs[i]).addClass("active");
    	 	}
    	 }
    }
    if(type=="融资阶段"){
    	  var divs = $('.rzjd div');
    	   divs.removeClass();
    	   for(var i =0;i<divs.length;i++){
    	 	if(industry==divs[i].innerHTML){
    	 		$(divs[i]).addClass("active");
    	 	}
    	 }
    }
    if(type=="城市地区"){
    	  var divs = $('.csdq div');
    	   divs.removeClass();
    	   for(var i =0;i<divs.length;i++){
    	 	if(industry==divs[i].innerHTML){
    	 		$(divs[i]).addClass("active");
    	 	}
    	 }
    }
})()
