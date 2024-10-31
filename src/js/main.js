const menuButton = document.querySelector(".menu_button");
const overlayModel = document.querySelector(".overlay_model");
const navLinks = document.querySelector('.nav_link-model')
menuButton.addEventListener("click", () => {
    overlayModel.classList.toggle("hidden");
});
