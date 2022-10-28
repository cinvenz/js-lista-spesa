
const arrGroceryList = [];
let i
while (i != '' && arrGroceryList.length > 5){
	eleGroceryList.innerHTML += `<li>${inputGroceryItem[i]}</li>`;
	i++
}


const eleGroceryList = document.querySelector('.grocery-list');
const inputGroceryItem = document.querySelector('#input-grocery');
const eleGroceryForm = document.querySelector('form');

eleGroceryForm.addEventListener('submit', function(event) {
	event.preventDefault();


	if (inputGroceryItem.value != '') {
		
		arrGroceryList.push(inputGroceryItem.value);

		
		eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;

		
		inputGroceryItem.value = '';

	}
});






