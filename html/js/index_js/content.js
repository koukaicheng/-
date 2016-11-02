(function(){
  var baoming = $('#baoming');
  $.ajax({
    type:"get",
    url:"../../php/code/index_php/hdxq.php",
    async:true,
    success:function(obj){
      var my = JSON.parse(obj);
      function creat(arr){
        for(var i = 0 ; i<arr.length;i++){
          var li = $('<li/>');
          li.addClass("ll");
          $(baoming).append(li);
          $(li[0]).date = arr[i];
          var div= $('<div/>');
          div.addClass('date');
          li.append(div);
          div.text(arr[i].activity_time);
          var p = $('<p/>');
          p.addClass('pp');
          li.append(p);
          p.text(arr[i].activity_title);
          var a = $('<a/>');
          a.addClass('aa');
          li.append(a);
          a.text(arr[i].activity_state);
          var dd = $('<div/>');
          dd.addClass('dd');
          li.append(dd);
          var span = $('<span/>');
          span.addClass("span1");
          dd.append(span);
          span.text(arr[i].activity_sort);
          var img = $('<img/>');
          img[0].src = "../img/index_img/dw.png";
          dd.append(img);
          var p = $('<p/>');
          p.addClass('pl')
          p.text(arr[i].activity_address);
          dd.append(p);
        }
      }
   creat(my);

    }
  })


  var sg = $('.sg');
  // console.log(sg.length);
  var conent = $('.conent');
    $.ajax({
      type:"get",
      url:"../../php/code/index_php/aa.php?name=战略伙伴",
      async:true,
      success:function(obj){
        var my = JSON.parse(obj);
        // console.log(my);
        function creaa(arr){
          for(var j = 0 ;j<arr.length;j++){
             var a = $('<a/>');
             a.addClass('sg_a');
             var img = $('<img/>');
             img[0].src = "../../php/img/index_hezuo/"+arr[j].index_img;
             a.append(img);
             $(conent[0]).append(a);
          }
        }
      creaa(my);
      }
    })

  for(var i=0 ;i<sg.length;i++){
    // var hjhj = false;
    // var arr = ["战略伙伴","创投机构","合作媒体"];
    $(sg[i]).on('mouseover',function(){
      // var sg =$('.sg');
      // console.log(sg.length);
      var title = this.innerHTML;
      // $(sg[i]).title = arr[i];
      var sg_a = $('.sg_a');
      for(var f = 0;f<sg_a.length;f++){
        sg_a[f].remove();
      }
      // console.log(title);
      $.ajax({
        type:"get",
        url:"../../php/code/index_php/aa.php?name="+title,
        async:true,
        success:function(obj){
          var my = JSON.parse(obj);
          // console.log(my);
          function creaa(arr){
            for(var j = 0 ;j<arr.length;j++){
               var a = $('<a/>');
               a.addClass('sg_a');
               var img = $('<img/>');
               img[0].src = "../../php/img/index_hezuo/"+arr[j].index_img;
               console.log("kkkk");
               a.append(img);
               $(conent[0]).append(a);
            }
          }
        creaa(my);
        }
      })

      for(var g =0 ;g<sg.length;g++){
         $(sg[g]).css({
           borderBottom:"none",
           color:"black",
         });
      }
      $(this).css({
         borderBottom:"2px solid rgb(228,82,46)",
         color:"rgb(228,82,46)"
      })



    })

  }

})()
