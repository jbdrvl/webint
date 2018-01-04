function setColHeights() {
  var statsCol = document.getElementById("stats");
  var idCardCol = document.getElementById("id-card");
  var lastScoresCol = document.getElementById("last-scores");
  var height0 = statsCol.offsetHeight;
  var highest = statsCol;
  if (idCardCol.offsetHeight>height0) {
    height0 = idCardCol.offsetHeight;
    highest = idCardCol;
  }
  if (lastScoresCol.offsetHeight>height0) {
    height0 = lastScoresCol.offsetHeight;
    highest = lastScoresCol;
  }
  statsCol.style.height = height0+"px";
  idCardCol.style.height = height0+"px";
  lastScoresCol.style.height = height0+"px";
  document.getElementById("scores-scroll").style.height = (height0-110)+"px";
}
setColHeights();
