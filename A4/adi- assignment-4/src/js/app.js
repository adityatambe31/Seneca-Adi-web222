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
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

window.activeCategoryID = "c1";

var menu = document.getElementById("menu");

window.categories.forEach((element) => {
  var liEle = document.createElement("li");
  var buttonEle = document.createElement("button");

  buttonEle.onclick = function () {
    window.activeCategoryID = element.id;
    window.render(window.activeCategoryID);
  };
  buttonEle.textContent = `${element.name}`;
  // fire event handler when click on button
  liEle.append(buttonEle);
  menu.append(liEle);
});

var tHeadEle = document.querySelector("table thead");
var trElement = document.createElement("tr");
var thName = document.createElement("th");
thName.innerHTML = "Name";
trElement.append(thName);
var thDesc = document.createElement("th");
thDesc.innerHTML = "Description";
trElement.append(thDesc);
var thPrice = document.createElement("th");
thPrice.innerHTML = "Price";
trElement.append(thPrice);
tHeadEle.append(trElement);

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
    if (element.discontinued === false) {
      var trEle = document.createElement("tr");
      var nm = document.createElement("td");
      nm.innerHTML = element.title;
      trEle.append(nm);

      var desc = document.createElement("td");
      desc.innerHTML = element.description;
      trEle.append(desc);

      var pr = document.createElement("td");
      pr.textContent = `$${element.price.toFixed(2)}`;
      trEle.append(pr);

      catProds.appendChild(trEle);
    }
  });
};
window.render(window.activeCategoryID);
