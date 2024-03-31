/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Aditya Mahesh Tambe
 *      Student ID: 171969223
 *      Date:       15/03/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
var body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.margin = "10px 30px 30px 30px";
body.style.padding = "10px 30px 30px 30px";
body.style.maxWidth = "80vw";
body.style.backgroundColor = "#ffffff";

// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

window.activeCategoryID = "c1";
// Get the menu element and apply CSS styles to make it a flex container
var menu = document.getElementById("menu");

window.categories.forEach((element) => {
  var buttonEle = document.createElement("button");
  buttonEle.onclick = function () {
    window.activeCategoryID = element.id;
    window.render(window.activeCategoryID);
  };
  buttonEle.textContent = `${element.name}`;
  buttonEle.style.margin = "3px";
  menu.append(buttonEle);
});

window.render = function () {
  var productsToRender = window.products.filter((element) => {
    return element.categories.includes(window.activeCategoryID);
  });
  var selectedCat = document.getElementById("selected-category");

  var selectedCategory = window.categories.find((c) => c.id === window.activeCategoryID);
  selectedCat.textContent = `${selectedCategory.name}`;
  var catProds = document.getElementById("category-products");
  catProds.innerHTML = "";

  productsToRender.forEach((element) => {
    var catProds = document.getElementById("category-products");

    if (element.discontinued === false) {
      const card = document.createElement("div");
      card.classList.add("product-card");

      const img = document.createElement("img");
      img.src = element.imageUrl;
      img.style = "width: 100%; margin-bottom: 10px;";
      card.appendChild(img);

      const title = document.createElement("p");
      title.style = "font-weight: bold; font-size: 1.1em; margin-bottom: 5px;";
      title.textContent = element.title;
      card.appendChild(title);

      const description = document.createElement("p");
      description.textContent = element.description;
      card.appendChild(description);

      const price = document.createElement("p");
      price.textContent = `$${element.price.toFixed(2)}`;
      price.style = "font-weight: bold; font-size: 1.1em; margin-bottom: 10px;";
      card.appendChild(price);
      catProds.appendChild(card);
    }
  });
};
window.render(window.activeCategoryID);
