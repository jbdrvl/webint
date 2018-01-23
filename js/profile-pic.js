
// https://stackoverflow.com/questions/12368910/html-display-image-after-selecting-filename
var pp = localStorage.getItem("profile-pic");

if (pp && pp==1) {
  document.getElementById('user-pic-outter').style.display = "none";
} else {
  document.getElementById('profile-pic').style.display = "none";
}

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
      document.getElementById('profile-pic').style.display = "block";
      document.getElementById('user-pic-outter').style.display = "none";
      inputElement.value="";
      localStorage.setItem("profile-pic", 1);
    }
});
