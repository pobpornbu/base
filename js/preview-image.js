$( document ).ready(function() {
    $("#avatar").attr("src","images/avatar-default.png");
    $("#imagefile").change(function ()
      {
             $("#avatar").show();
             if (typeof(FileReader)!="undefined"){
               
                 var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$/;
                 $($(this)[0].files).each(function () {
                     var getfile = $(this);
                     if (regex.test(getfile[0].name.toLowerCase())) {
                         var reader = new FileReader();
                         reader.onload = function (e) {
                             $("#avatar").attr("src",e.target.result);
                         }
                         reader.readAsDataURL(getfile[0]);
                     } else {
                         alert(getfile[0].name + " is not image file.");
                         return false;
                     }
                 });
             }
             else {
                 alert("Browser does not supportFileReader.");
             }
    });
    });