const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');
const para = document.getElementById('para');
const textContent = para.textContent;
let index = 0;

open.addEventListener("click", () => {
  container.classList.add("active");
  writeText();
});

close.addEventListener("click", () => {
  container.classList.remove("active");
});

function writeText() {
  para.textContent = textContent.slice(0, index);
  index++;
  if (index <=textContent.length) {
    setTimeout(writeText, 100);
  }
 
}
