$(function() {
  /*  
    $('.form-control').focus(function(){
        $(this).attr('rel', $(this).attr("placeholder"));
        $(this).removeAttr("placeholder");
    });
    $('.form-control').blur(function(){
    $(this).attr('placeholder', $(this).attr('rel'));
    $(this).removeAttr('rel');
    });
    */
  $(".profile").height($(window).height());
  $(".small-contain").each(function() {
    $(this).css(
      "padding-top",
      ($(".profile").height() - $(".small-contain").height()) / 4
    );
  });
  //////////////////////////////////////////////////////////////////////////////////////////////
  $("#grap_file").click(function() {
    $("#file_grap").click();
  });

  function knowUrl(input) {
    if (input.files && input.files[0]) {
      var read = new FileReader();

      read.onload = function(e) {
        var image = new Image();

        //Set the Base64 string return from FileReader as source.
        image.src = e.target.result;
        image.onload = function() {
          var height = this.height;
          var width = this.width;
          if (height > 400 || width > 400) {
            alert("Height and Width must not exceed 400px.");
            $("#profile-img-tag").attr("src", "images/client-icon-png-18.jpg");
            return false;
          }
          $("#profile-img-tag").attr("src", image.src);
          alert("Uploaded image has valid Height and Width.");
          return true;
        };
        //
      };
      read.readAsDataURL(input.files[0]);
    }
  }
  $("#file_grap").change(function() {
    knowUrl(this);
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////
  $(".btn").click(function() {
    $(".h2h").text("hello this text from jquery file", function() {
      $(this).fadeIn(55000);
    });
  });
});
/*
var form = document.getElementsByClassName('form-control')[0];

for(var i = 0; i < form.length; i++)
{
    form[i].addEventListener('focus', function(){
        form.setAttribute('rel', form.getAttribute('placeholder'));
        form.removeAttribute('placeholder')
    });
    form[i].addEventListener('blur', function(){
        form.setAttribute('placeholder', form.getAttribute('rel'));
        form.removeAttribute('rel')
    });
}
*/
function HidePlaceHolder(input, event) {
  if (event.type == "focus") {
    input.setAttribute("rel", input.getAttribute("placeholder"));
    input.removeAttribute("placeholder");
  }
  if (event.type == "blur") {
    input.setAttribute("placeholder", input.getAttribute("rel"));
    input.removeAttribute("rel");
  }
}
