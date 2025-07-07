const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

const navigation = document.getElementById("navigation");
const hamMenu = document.getElementById("menu");

currentYear.innerHTML = new Date().getFullYear();

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

hamMenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
  hamMenu.classList.toggle("open");
});
