import{a as m,S as f,i as n}from"./assets/vendor-BIn0hBn5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(i){return m.get("https://pixabay.com/api/",{params:{key:"50853448-3ef625935151d0418802f2043",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function y(i){const s=i.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:o,comments:p,downloads:d})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a}">
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
                            <span>${o}</span>
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
                <img src="${r}" alt="${e}">
            </a>
        </li>
    `).join("");c.insertAdjacentHTML("beforeend",s),new f(".gallery a").refresh()}function g(){c.innerHTML=""}function L(){u.classList.remove("visually-hidden")}function v(){u.classList.add("visually-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const s=l.elements["search-text"].value.trim();if(!s){n.error({message:"Please, enter a valid search query.",position:"topRight"});return}g(),L(),h(s).then(r=>{if(!r.length){n.error({message:"There are no images with this query. Enter an another query.",position:"topRight"});return}y(r)}).catch(r=>{n.error({message:"Oops... Something went wrong. Please, try again later.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
