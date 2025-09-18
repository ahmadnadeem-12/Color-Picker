const bgPicker = document.getElementById("bgPicker");
const fontPicker = document.getElementById("fontPicker");
const navPicker = document.getElementById("navPicker");
const btnPicker = document.getElementById("btnPicker");

const navbar = document.getElementById("navbar");
const btn = document.getElementById("btn");

bgPicker.addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

fontPicker.addEventListener("input", (e) => {
  document.body.style.color = e.target.value;
});

navPicker.addEventListener("input", (e) => {
  navbar.style.backgroundColor = e.target.value;
});

btnPicker.addEventListener("input", (e) => {
  btn.style.backgroundColor = e.target.value;
});
