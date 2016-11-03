(function(){
	function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
      return "";
    };
    var industry = getvl("industry");
    var num = getvl('num');
    var total_cont = $('.total_cont');
    var detial_list = $(".detial_list");
    //分页
    var Page = $('.tcdPageCode');
    
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
   var num_ll = Math.floor(num/10);
   console.log(num_ll);
   if(num_ll>=1){
   	
   	$.ajax({
			type: "get",
			url: "../../php/code/enterProject/industry.php?type="+type+"&industry="+industry+"&num=0",
			async: true,
			success: function(obj) {
				var my = JSON.parse(obj);
				for(var i = 0; i < my.length; i++) {
					var tr = $("<tr/>");
					detial_list.append(tr);
					var td1 = $("<td/>");
					tr.append(td1);
					var div1 = $("<div/>");
					td1.append(div1);
					var img = $("<img/>");
					img[0].src = "../../php/img/enterProject/" + my[i].project_img;
					div1.append(img);
					var div2 = $("<div/>");
					td1.append(div2);
					var h4 = $("<h4/>");
					h4.text(my[i].project_title);
					div2.append(h4);
					var p = $("<p/>");
					p.text(my[i].project_detail);
					div2.append(p);
					var td2 = $("<td/>");
					td2.text(my[i].project_xfhy)
					tr.append(td2);
					var td3 = $("<td/>");
					td3.text(my[i].project_rzjd)
					tr.append(td3);
					var td4 = $("<td/>");
					td4.text(my[i].project_city)
					tr.append(td4);
					var td5 = $("<td/>");
					td5.text(my[i].project_state)
					tr.append(td5);
				}
			}
		});
// 	console.log(num_ll+1)
   	 Page.createPage({
   	 	pageCount:num_ll+1,
   	 	current:1,
   	 	backFn:function(p){
   	 		$('.detial_list tr').remove()
             var a = (p-1)*10;
             $.ajax({
             	type:"get",
             	url:"../../php/code/enterProject/industry.php?type="+type+"&industry="+industry+"&num="+a,
             	async:true,
             	success: function(obj) {
						var my = JSON.parse(obj);
						console.log(my)
						for(var i = 0; i < my.length; i++) {
							var tr = $("<tr/>");
							detial_list.append(tr);
							var td1 = $("<td/>");
							tr.append(td1);
							var div1 = $("<div/>");
							td1.append(div1);
							var img = $("<img/>");
							img[0].src = "../../php/img/enterProject/" + my[i].project_img;
							div1.append(img);
							var div2 = $("<div/>");
							td1.append(div2);
							var h4 = $("<h4/>");
							h4.text(my[i].project_title);
							div2.append(h4);
							var p = $("<p/>");
							p.text(my[i].project_detail);
							div2.append(p);
							var td2 = $("<td/>");
							td2.text(my[i].project_xfhy)
							tr.append(td2);
							var td3 = $("<td/>");
							td3.text(my[i].project_rzjd)
							tr.append(td3);
							var td4 = $("<td/>");
							td4.text(my[i].project_city)
							tr.append(td4);
							var td5 = $("<td/>");
							td5.text(my[i].project_state)
							tr.append(td5);
						}
					}
             });
   	 	}
   	 })
   }else{
   	 	$.ajax({
			type: "get",
			url: "../../php/code/enterProject/industry.php?type="+type+"&industry="+industry+"&num=0",
			async: true,
			success: function(obj) {
				var my = JSON.parse(obj);
				for(var i = 0; i < my.length; i++) {
					var tr = $("<tr/>");
					detial_list.append(tr);
					var td1 = $("<td/>");
					tr.append(td1);
					var div1 = $("<div/>");
					td1.append(div1);
					var img = $("<img/>");
					img[0].src = "../../php/img/enterProject/" + my[i].project_img;
					div1.append(img);
					var div2 = $("<div/>");
					td1.append(div2);
					var h4 = $("<h4/>");
					h4.text(my[i].project_title);
					div2.append(h4);
					var p = $("<p/>");
					p.text(my[i].project_detail);
					div2.append(p);
					var td2 = $("<td/>");
					td2.text(my[i].project_xfhy)
					tr.append(td2);
					var td3 = $("<td/>");
					td3.text(my[i].project_rzjd)
					tr.append(td3);
					var td4 = $("<td/>");
					td4.text(my[i].project_city)
					tr.append(td4);
					var td5 = $("<td/>");
					td5.text(my[i].project_state)
					tr.append(td5);
				}
			}
		});
   }
})()
