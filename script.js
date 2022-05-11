"use strict";

//"https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const inputSearch = document.querySelector(".input-search");
const btnSearch = document.querySelector(".btn-search");
const results = document.querySelector(".results");
const btnRandom = document.querySelector("#random");

btnRandom.addEventListener("click", function () {
  fetchRandom();
});
async function fetchRandom() {
  const req = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
  const res = await req.json();
  console.log(res.meals);
  displayMeals(res.meals[0]);
}

btnSearch.addEventListener("click", function () {
  fetchAPI();
  inputSearch.value = "";
});

async function fetchAPI() {
  const req = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch.value}`
  );
  const res = await req.json();
  console.log(res.meals[0]);
  displayMeals(res.meals[0]);
}

function displayMeals(meals) {
  results.innerHTML = "";
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = `${meals.strMealThumb}`;
  const mealName = document.createElement("h3");
  mealName.innerText = `${meals.strMeal}`;
  const category = document.createElement("p");
  category.innerText = `Category: ${meals.strCategory}`;
  li.appendChild(img);
  li.appendChild(mealName);
  li.appendChild(category);

  results.appendChild(li);
}
// ///////////////
