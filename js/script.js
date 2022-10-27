const arrGroceryList = [];


const eleGroceryList = document.querySelector('.grocery-list');
const inputGroceryItem = document.querySelector('#input-grocery');
const eleGroceryForm = document.querySelector('form');

eleGroceryForm.addEventListener('submit', function(event) {
	event.preventDefault();

	if (inputGroceryItem.value) {
		
		arrGroceryList.push(inputGroceryItem.value);

		
		eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;

		
		inputGroceryItem.value = '';
	}
});

while (item != '') {
	eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
}





