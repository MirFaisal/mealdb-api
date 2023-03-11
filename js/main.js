function loadMealdbApi(keyWord) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyWord}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => loadData(data.meals));
}
function loadData(data) {
  const cardWrapper = document.getElementById("card-wrapper");
  cardWrapper.innerHTML = "";

  data.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${
                  element.strMealThumb
                }" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title fw-bold">${element.strMeal}</h5>
                  <p class="card-text">
                    ${element.strInstructions.slice(0, 100)}
                    <a href="#" style="color: "blue">More</a>
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>`;
    cardWrapper.appendChild(card);
  });
}
function search() {
  const searchField = document.getElementById("search-field");
  // const foodName = document.getElementById("food-name");
  const searchWord = searchField.value;
  // foodName.innerText = searchWord;
  loadMealdbApi(searchWord);
  searchField.value = "";
}
// loadMealdbApi("fish");
