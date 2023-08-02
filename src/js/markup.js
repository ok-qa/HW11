export function createMarkup(imgData) {
  return imgData
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="image-card">
  <a href="${largeImageURL}">
    <img class="image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
    <div class="imgInfo">
      <p class="imgInfo-item">
        <b>Likes: ${likes}</b>
      </p>
      <p class="imgInfo-item">
        <b>Views: ${views}</b>
      </p>
      <p class="imgInfo-item">
        <b>Comments: ${comments}</b>
      </p>
      <p class="imgInfo-item">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
  </a>
</div>`
    )
    .join('');
}
