const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const submitCount = document.getElementById("countText");

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

let count = Number(localStorage.getItem("submitCount")) || 0;
count++;
localStorage.setItem("submitCount", count);

if (count < 2) {
  submitCount.textContent = `${count} review`;
} else {
  submitCount.textContent = `${count} reviews`;
}
