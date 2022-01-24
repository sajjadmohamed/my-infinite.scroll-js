const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];



// Unspash API
let count = 5;
const apiKey = 'jfgS8tteGD425f4ozfygQVaVnD6gt6GucN2yyz3xfek';
let apiUrl =
	"https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}";

	//Check if all images were loaded
	function imageLoaded() {
		imagesLoaded++;
		if (imagesLoaded === totalImages) {
			ready = true;
			loader.hidden = true;
			count = 30
			apiUrl =
	"https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}";
		}
	}


	// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
	for (const key in attributes){
		element.setAttribute(key, attributes[key]);
	}
}

// Create Elements For Links & Photos, Add to DOM
Function displayphotos(){
	imagesLoaded = 0;
	totalImages = photosArray.length;
	// Run function for each object in photosArray
	photosArray.forEach((pgoto) => {
		// Create <a> to link to Unsplash
		const item = document.createElement('a');
		setAttributes(item, {
			href: photo.links.html,
			target: '_blank',

		});
		// Create <img> for photo
		const img = document.createElement('img');
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});
		//Event Listener, ckeck when each is finisheh loading
		img.addEventListener('load', imageLiaded);
		// Put <img> inside <a>, then put both inside imageContainer Element
		item.appendChild('img');
		imageContainer.appendChild('item');
	});
}
// Get photos form unsplash API
async Function getphotos(){
	try {
		const response = await fetch (apiUrl);
		photosArray = await response.json(); 
		displayphotos();
	} catch (error) {
		// Catch Error Here
	}
}

//Check to see if scrolling ner bottom of page, Load More Photos
window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrolly >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhotos();
		
	}
});






// On Load
getphotos();
