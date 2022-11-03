search.addEventListener("submit", (e) => {
e.preventDefault();
const data = new FormData(search);
const [name] = [...data.values()];
if (!name.trim()) {
resultadoSearch.textContent = "";
return;
}
addCardsSearchDrinks(name);
});

const addCardsSearchDrinks = (name) => {
const filtrado = drinksAll.filter((item) => item.strDrink.includes(name));
resultadoSearch.textContent = "";
filtrado.forEach((item) => {
const container = document.createElement("div");
const image = document.createElement("img");
const link = document.createElement("a");
container.classList.add("card");
container.setAttribute("style", "width: 18rem");
image.classList.add("card-img-top");
image.src = item.strDrinkThumb;
link.classList.add(
"card-text",
"fs-4",
"pt-4",
"d-flex",
"justify-content-center",
"align-items-center"
);
link.setAttribute("id", "nombres-drinks");
link.textContent = item.strDrink;
link.href = "https://www.google.com.ar/?hl=es";
container.appendChild(image);
container.appendChild(link);
fragment.appendChild(container);
resultadoSearch.appendChild(fragment);
});
};
