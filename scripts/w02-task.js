/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Boluwatife Alewi";
const currentYear = "2024";
const profilePicture = "images/placeholder.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `"profile image of " ${fullName}`);

/* Step 5 - Array */
let foodList = ["Bread", "Moi-Moi", "Pounded yam", "Golden-Morn"];
foodElement.innerHTML = `${foodList}`;
let fishFood = ["Sardines"];
foodList.push(fishFood);
foodElement.innerHTML += `<br>${foodList}`;
foodList.shift();
foodElement.innerHTML += `<br>${foodList}`;
foodList.pop();
foodElement.innerHTML += `<br>${foodList}`;