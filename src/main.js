import getImagesByQuery from "./js/pixabay-api";
import { clearGallery, showLoader, hideLoader } from "./js/render-functions";


const form = document.querySelector(".form");

form.addEventListener("submit", async event => {
    event.preventDefault();

    clearGallery();
    showLoader();
    await getImagesByQuery(form.elements["search-text"].value);
    hideLoader();
});