import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetting = {
    databaseURL: "https://add-to-cart-5e1f4-default-rtdb.asia-southeast1.firebasedatabase.app/",
}

const app = initializeApp(appSetting);
// console.log(app);

const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");


var inputFieldEl = document.getElementById("input-field");
var addBtnEl = document.getElementById("add-btn");
var shoppinglistEl = document.getElementById("shop-list");

addBtnEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value;
    // console.log(inputValue);

    push(shoppingListInDB, inputValue);

    clearInputFieldEl();
});

onValue(shoppingListInDB, function (snapshot) {

    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val());
        console.log(itemsArray);
        clearShopListEl();
        for (let i = 0; i < itemsArray.length; i++) {

        let currentItem = itemsArray[i];

        let currentItemID = currentItem[0];
        let currentItemValue = currentItem[1];

        appendItemToShoppingListEl(currentItem);
        } 
    } else {
            shoppinglistEl.innerHTML =` No Items here ... Yet `
    }
});

function clearShopListEl() {
    shoppinglistEl.innerHTML = '';
    
};

function clearInputFieldEl() {
    inputFieldEl.value = ``;
};

function appendItemToShoppingListEl(item) {
    let itemID = item[0];
    let itemValue = item[1];
    let newEl = document.createElement("li");
    newEl.textContent = itemValue;

    newEl.addEventListener("dblclick", () => {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
        // console.log(exactLocationOfItemInDB);  
        remove(exactLocationOfItemInDB);
    })

    shoppinglistEl.append(newEl);
};