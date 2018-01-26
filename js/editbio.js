var editButton = document.getElementById('edit-bio');
var saveButton = document.getElementById('save-bio');
var bioField = document.getElementById('bio-display');
var bioEditField = document.getElementById('bio-edit-field');

editButton.addEventListener("click", function() {
  bioEditField.value=bioField.innerHTML;
  bioEditField.style.height = (bioField.scrollHeight+30)+"px";
  bioEditField.style.display = "block";
  saveButton.style.display = "block";
  editButton.style.display = "none";
  bioField.style.display = "none";
});

saveButton.addEventListener("click", function() {
  document.getElementById("id-card").style.height="auto";
  document.getElementById("stats").style.height="auto";
  document.getElementById("last-scores").style.height="100px";
  bioField.innerHTML=bioEditField.value.replace(/[^\w\s\,\.\!\?\:\;\']/gi, ' ');
  localStorage.setItem('bio', bioEditField.value.replace(/[^\w\s\,\.\!\?\:\;\']/gi, ' '));
  bioEditField.style.display = "none";
  saveButton.style.display = "none";
  editButton.style.display = "block";
  bioField.style.display = "block";
  setColHeights();
});
