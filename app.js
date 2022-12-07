const openBtn = document.querySelector("#btnOpen")
const closeBtn = document.querySelector("#btnClosed")
const navUl = document.querySelector(".nav ul")

openBtn.addEventListener("click", () => navUl.classList.add("reveal"))
closeBtn.addEventListener("click", () => navUl.classList.remove("reveal"))
