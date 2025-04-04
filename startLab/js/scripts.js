const openButton = document.querySelector("openButton");
const dialogBox = document.querrySelector("dialogBox");
const closeButton = document.querySelector("closeButton");

openButton.addEventListener("click", () => {
    dialogBox.showModal();
})