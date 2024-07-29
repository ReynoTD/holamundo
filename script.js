const button1 = document.getElementById("btn-1");
const options = document.getElementById("form-options");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const img = document.getElementById("div-img");
const parr1 = document.getElementById("es-parr");
const parr2 = document.getElementById("en-parr");

button1.onclick = function oda() {
  if (span1.style.display === "inline-block" || span1.style.display === "") {
    span1.style.display = "none";
    span2.style.display = "inline-block";
    button1.style.display = "none";
    options.style.display = "block";
  }
};

function en() {
  options.style.display = "none";
  img.style.display = "block";
  parr2.style.display = "block";
  parr1.style.display = "none";
  span2.style.display = "none";
  span3.style.display = "inline-block";
}

function es() {
  options.style.display = "none";
  img.style.display = "block";
  parr2.style.display = "none";
  parr1.style.display = "block";
  span2.style.display = "none";
  span3.style.display = "inline-block";
}
