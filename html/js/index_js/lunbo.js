(function(){
	var swiper_wrapper = $('.swiper-wrapper')[0];
	$.ajax({
		type:"get",
		url:"../../php/code/index_php/lunbo.php",
		async:true,
		success:function(obj){
			var my = JSON.parse(obj);
			// console.log(my);
			function creat(arr){
			  for(var i = 0 ;i<arr.length;i++){
			  	 var div = $("<div>");
			  	 div.addClass('swiper-slide');
			  	 div[0].data = arr[i];
			  	 var a = $('<a/>'); // 下面添加a标签的链接
			  	 a.css("cursor","pointer");
			  	 var img = $('<img/>');
			  	 img.css({
			  	 	display:"block",
			  	 	width:'100%'
			  	 })
			  	 img[0].src = "../../php/img/index_lunbo/" + arr[i].lunbo_img;
			  	 a.append(img);
			  	 div.append(a);
			  	 $(swiper_wrapper).append(div);
			  }
			}
			creat(my);
			 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay:3000
    });
		}
	})
})()
