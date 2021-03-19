export default function fetchImg(queryImg, page) {
    const key = '20758880-26a96877c6629f333f17d88c3';
    const perPage = 12
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal
    &q=${queryImg}
    &page=${page}
    &per_page=${perPage}
    &key=${key}`;

    return fetch(url).then(res => res.json());
}