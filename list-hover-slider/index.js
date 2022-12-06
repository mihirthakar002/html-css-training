
// This Functions Triggers Radio Buttons For Image Slider
// used JQuery For Triggering Object

function hover() {
  $(document).ready(function () {
    $("#img-1").mouseover(function () {
      $("#item-1").trigger("click");
    });
  });

}


function hover2() {
  $(document).ready(function () {
    $("#img-2").mouseover(function () {
      $("#item-2").trigger("click");
    });
  });


}


function hover3() {
  $(document).ready(function () {
    $("#img-3").mouseover(function () {
      $("#item-3").trigger("click");
    });
  });

}




//  This code hovers on radio buttons 

function checkButton(element) {
  element.checked = true;
}











