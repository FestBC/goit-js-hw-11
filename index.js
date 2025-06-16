import{S as f,a as m,i as y}from"./assets/vendor-BfwHKs76.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(r){const s=r.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <ul class="stats">
                    <li class="stats-item">
                        <p class="likes">
                            Likes
                            <span>${t}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="views">
                            Views
                            <span>${a}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="comments">
                            Comments
                            <span>${p}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="downloads">
                            Downloads
                            <span>${d}</span>
                        </p>
                    </li>
                </ul>
                <img src="${i}" alt="${e}">
            </a>
        </li>
    `).join("");n.insertAdjacentHTML("beforeend",s),new f(".gallery a").refresh()}function h(){n.innerHTML=""}function L(){c.classList.toggle("loader")}function u(){c.classList.toggle("loader")}function w(r){return m.get("https://pixabay.com/api/",{params:{key:"50853448-3ef625935151d0418802f2043",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{s.data.total||y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(s.data.hits)}).catch(s=>{console.log(s)})}const l=document.querySelector(".form");u();l.addEventListener("submit",async r=>{r.preventDefault(),h(),L(),await w(l.elements["search-text"].value),u()});
//# sourceMappingURL=index.js.map
