"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('form');
const addressInput = document.getElementById('address');
const map = document.getElementById('mapid');
let myMap = L.map(map).setView([4.0, -72.0], 13);
function fetchData(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
            const fetchData = [...data];
            return fetchData[0].latlng;
        })
            .catch((error) => console.log('ERROR'));
        return result;
    });
}
console.log(fetchData('georgia'));
// console.log(fetchData('georgia'));
function searrchAddressHandler(event) {
    event.preventDefault();
    console.log(addressInput.value);
    // const zoomSize: number = 13;
    // const enteredAddress = addressInput.value;
    // myMap.setView([100, 200], zoomSize);
    // renderMap(100, 100, 13);
    // myMap = L.map(map).setView([45, 45], 3);
    // let marker = L.marker([51.5, 1]).addTo(myMap);
    // Send Input Address to Google API!
}
form.addEventListener('submit', searrchAddressHandler);
