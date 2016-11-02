$(function(){
	$('.total_title div img').click(function(event){
	if(event.target==$('.total_title div img')[0]){
		$('.total_industry')[0].style.display="block";
		$('.total_city')[0].style.display="none";
		$('.total_progress')[0].style.display="none";
		$('.total_title div img')[0].src="../../php/img/juliebian2.img/细分行业.png";
		$('.total_title div img')[1].src="../../php/img/juliebian2.img/融资阶段2.png";
		$('.total_title div img')[2].src="../../php/img/juliebian2.img/城市地区2.png";
//      $.ajax({
//      	type:"get",
//      	url:"../../php/code/enterProject/enterProject.php",
//      	async:true,
//      	success: function(obj){
//      		var my = JSON.parse(obj);
//      		console.log(my)
//      	}
//      });
	}else if(event.target==$('.total_title div img')[1]){
		$('.total_industry')[0].style.display="none";
		$('.total_city')[0].style.display="none";
		$('.total_progress')[0].style.display="block";
		$('.total_title div img')[0].src="../../php/img/juliebian2.img/细分行业2.png";
		$('.total_title div img')[1].src="../../php/img/juliebian2.img/融资阶段.png";
		$('.total_title div img')[2].src="../../php/img/juliebian2.img/城市地区2.png";

	}else if(event.target==$('.total_title div img')[2]){
		$('.total_industry')[0].style.display="none";
		$('.total_city')[0].style.display="block";
		$('.total_progress')[0].style.display="none";
		$('.total_title div img')[0].src="../../php/img/juliebian2.img/细分行业2.png";
		$('.total_title div img')[1].src="../../php/img/juliebian2.img/融资阶段2.png";
		$('.total_title div img')[2].src="../../php/img/juliebian2.img/城市地区.png";

	}
});
});
(function(){
	 $.ajax({
        	type:"get",
        	url:"../../php/code/enterProject/enterProject.php",
        	async:true,
        	success: function(obj){
        		var my = JSON.parse(obj);
        		console.log(my)
        	 
        		function creat(arr){
        			for(var i =0;i<arr.length;i++){
        				var div = document.createElement('div');
        				div.className ="dd"
        				$('.total_industry')[0].appendChild(div);
        				var img = document.createElement('img');
        				div.appendChild(img);
        				img.src = "../../php/img/enterProject/" + arr[i].title_img;
        				var div2 = document.createElement('div');
        				div2.className = "dd2";
        				div.appendChild(div2);
        				div2.innerHTML = arr[i].title_p;
        				var br = document.createElement('br');
        				div2.appendChild(br);
        				var span = document.createElement('span');
        				span.innerHTML = "4" + "家";
        				div2.appendChild(span);
        			}
        		}
        		creat(my)
        	}
     });  
     $.ajax({
		type:"get",
		url:"../../php/code/enterProject/rockect.php",
		async:true,
	    success:function(obj){
	    	 var my = JSON.parse(obj);
	    	 console.log(my);
	    	 function creat(arr){
	    	 	var add = ["未融资","种子天使","Pre－A","A轮","B轮及以上"];
//	    	    console.log(add)
	    	  for(var i = 0 ;i<arr.length;i++){
	    	  	 var a = $('<a/>');
	    	  	 $('.total_progress').append(a);
	    	  	 var div = $('<div/>');
	    	  	 a.append(div);
	    	  	 var img = $('<img/>');
	    	  	 img[0].src = "../../php/img/juliebian2.img/" + arr[i].rocket_img;
	    	  	 div.append(img);
	    	  	 var h1 = $('<h1/>');
	    	  	 for(var j = 0;j<add.length;j++){
	    	  	 	$(h1)[0].innerHTML = add[i] +"<br>" + "的公司";
	    	  	 }
	    	  	 div.append(h1);
	    	  	 var span = $('<span/>');
	    	  	 div.append(span);
//	    	  	 span.text("sdafdsf")
	    	  }
	    	 }
	    	 creat(my)
	    }
	});
    
    var Arr = [{
    	  bag:"shanghai.png",
    	  region:"上海",
    	  img:"address.png",
    	  title:"入驻上海桔子空间的公司"
    },{
    	  bag:"wuhan.png",
    	  region:"武汉",
    	  img:"address.png",
    	  title:"入驻武汉桔子空间的公司"
    },{
    	  bag:"shaoxing.png",
    	  region:"绍兴",
    	  img:"address.png",
    	  title:"入驻绍兴桔子空间的公司"
    }];
    console.log(Arr)
    function creat(arr){
    	  for(var i = 0;i<arr.length;i++){
    	  	 var div = $('<div/>');
    	  	 $('.total_city').append(div);
	        var img = $('<img/>');
	        img.addClass("ii")
	        div.append(img);
	        img[0].src = "../../php/img/juliebian2.img/" + arr[i].bag;
	        var dd = $('<div/>');
	        div.append(dd);
	        dd.addClass("dd");
	        var img1 = $('<img/>');
	        dd.append(img1);
	        img1[0].src = "../../php/img/juliebian2.img/" + arr[i].img;
	        var span = $("<span/>");
	        dd.append(span);
	        span.text(arr[i].region);
	        var strong = $('<strong/>');
	        dd.append(strong);
	        strong.text(arr[i].title);
	        var ss = $("<span/>");
	        strong.append(ss);
	        ss.addClass("ss");
	        ss.text("4家")
    	  }
    }
    creat(Arr);
})()

	

