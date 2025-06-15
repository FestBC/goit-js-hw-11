import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery } from "./render-functions";


export default function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "50853448-3ef625935151d0418802f2043",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
    .then(response => {
        if (!response.data.total) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
        }

        createGallery(response.data.hits);
    })
    .catch(error => { console.log(error); });
}