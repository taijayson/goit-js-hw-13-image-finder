import './styles.css';

import cardTpl from './templates/imgCard.hbs';

import fetchImg from './js/fetchImg';


const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('#search-form');
const load = document.querySelector('#load');

searchForm.addEventListener('submit', onSearch);
load.addEventListener('click', onLoad);

const galleryMarkup = item => {
    gallery.insertAdjacentHTML('beforeend', cardTpl(item));
}

let page = 1;
let queryImg = '';

function onSearch(event) {
    console.log('123')
    
    event.preventDefault();
    queryImg = event.currentTarget.elements.query.value;
    page = 1;
    gallery.innerHTML = '';

    setImg();
}

function setImg(shouldScroll = false) {
    load.disabled = true;
    fetchImg(queryImg, page)
        .then(data => {
            load.classList.remove('hidden')
            galleryMarkup(data.hits);
            if (shouldScroll) {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                
                });       
            }
            if (data.hits.length < 12) {
                load.classList.add('hidden')
            }
            load.disabled = false;
        });
}

function onLoad() {
    page += 1
    setImg(true);
}