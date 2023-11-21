import axios from 'axios';

const KEY = '38599908-f1cc047b9c00a90c5e31b1294';
const baseURL = 'https://pixabay.com/api/';

let currentPage = 1;
let firstSearch = true;
let total = null;
let search = '';

export function setFirstSearch(state) {
  firstSearch = state;
}

export function resetPage() {
  currentPage = 1;
}

export function nextPage() {
  currentPage = currentPage + 1;
  return fetchImg();
}

export async function fetchImg() {
  let params = {
    key: `${KEY}`,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 40,
  };
  try {
    let response = await axios.get(baseURL, { params: params });
    total = response.data.total;
    if (firstSearch) {
      setFirstSearch(false);
    }
    let imgData = response.data.hits.map(hit => {
      return {
        webformatURL: hit.webformatURL.replace('_640', '_340'),
        largeImageURL: hit.largeImageURL,
        tags: hit.tags,
        views: hit.views,
        comments: hit.comments,
        downloads: hit.downloads,
        likes: hit.likes,
      };
    });

    return imgData;
  } catch (error) {
    Notify.failure('Error: ' + error.message);
  }
}

export function setSearchQuery(newSearch) {
  search = newSearch;
}
