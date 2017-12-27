var editButton = document.getElementById('edit-bio');
var saveButton = document.getElementById('save-bio');
var bioField = document.getElementById('bio-display');
var bioEditField = document.getElementById('bio-edit-field');

editButton.addEventListener("click", function() {
  bioEditField.value=bioField.innerHTML;
  bioEditField.style.height = (bioField.scrollHeight)+"px";
  bioEditField.style.display = "block";
  saveButton.style.display = "block";
  editButton.style.display = "none";
  bioField.style.display = "none";
});

saveButton.addEventListener("click", function() {
  bioField.innerHTML=bioEditField.value;
  bioEditField.style.display = "none";
  saveButton.style.display = "none";
  editButton.style.display = "block";
  bioField.style.display = "block";
});
