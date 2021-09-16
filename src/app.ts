const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const map = document.getElementById('mapid')! as HTMLDivElement;

let myMap = L.map(map).setView([10, 10], 2.5);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Zf18YQYam4x6LDOYNOvP', {
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(myMap);

function searrchAddressHandler(event: Event) {
	event.preventDefault();
	const inputName = addressInput.value;
	const zoomSize: number = 7;
	let result: any;

	fetch(`https://restcountries.eu/rest/v2/name/${inputName}?fullText=true`)
		.then((res) => res.json())
		.then((data) => {
			const fetchData = [...data];
			result = fetchData[0].latlng;
			let marker = L.marker(result).addTo(myMap);
			setTimeout(() => {
				myMap.setView(result, zoomSize);
			}, 1000);
		})
		.catch((error) => console.log('ERROR'));
	addressInput.value = '';
}

form.addEventListener('submit', searrchAddressHandler);
