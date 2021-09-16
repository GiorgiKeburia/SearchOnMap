const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const map = document.getElementById('mapid')! as HTMLDivElement;

let myMap = L.map(map).setView([4.0, -72.0], 13);

async function fetchData(name: string) {
	let result = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
		.then((res) => res.json())
		.then((data) => {
			const fetchData = [...data];
			return fetchData[0].latlng;
		})
		.catch((error) => console.log('ERROR'));
	return result;
}
console.log(fetchData('georgia'));
// console.log(fetchData('georgia'));
function searrchAddressHandler(event: Event) {
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
