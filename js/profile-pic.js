
// https://stackoverflow.com/questions/12368910/html-display-image-after-selecting-filename

var inputElement = document.getElementById("new-pp");
inputElement.value="";
inputElement.addEventListener("change", function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#profile-pic')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
      };
      reader.readAsDataURL(this.files[0]);
      inputElement.value="";
    }
});
