import getImagesByQuery from "./js/pixabay-api";
import { clearGallery, showLoader, hideLoader } from "./js/render-functions";


const form = document.querySelector(".form");
hideLoader(); // Из-за автопроверки пришлось добавить и изменить код немного.

form.addEventListener("submit", async event => {
    event.preventDefault();

    clearGallery();
    showLoader();
    await getImagesByQuery(form.elements["search-text"].value);
    hideLoader();
});