/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Boluwatife Alewi",
    photo: "images/placeholder.jpg",
    favoriteFoods: ["Bread", "Moi-moi", "Pounded yam", "GoldenMorn"],
    hobbies: ["Researching", "Playing Video games", "Listening to Music"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Ikorodu, Lagos",
    length: "17 years"
},
{
    place: "Oke-aro, Akure",
    length: "3 years"
},{
    place: "FUTA, Akure",
    length: "3 Years"
}
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let list = document.createElement("li");
    list.textContent = food;
    document.querySelector("#favorite-foods").appendChild(list);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let hbList = document.createElement("li");
    hbList.textContent = hobby;
    document.querySelector("#hobbies").appendChild(hbList);
});

/* Places Lived DataList */
let area = document.querySelector("#places-lived");

for (let i = 0; i < myProfile.placesLived.length; i++) {
    let place = myProfile.placesLived[i];

    let dtPlace = document.createElement("dt");
    dtPlace.textContent = myProfile.placesLived[i].place;

    let ddLength = document.createElement("dd");
    ddLength.textContent = myProfile.placesLived[i].length;

    area.appendChild(dtPlace);
    area.appendChild(ddLength);
}
