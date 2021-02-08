
function displayMatchedItem(foodItems) {
    console.log(foodItems);
    foodItems.meals.forEach(meal => {
        const imageUrl = meal.strMealThumb;
        const foodItem = document.createElement('div');
        const foodItemPrimaryInfo = `
    <img src='${imageUrl}' alt=''>
    <h3>${meal.strMeal}</h3>
    `
        foodItem.className = 'food-item';
        foodItem.innerHTML = foodItemPrimaryInfo;
        document.getElementById('search-result-section').appendChild(foodItem);
    });
}


const searchedFoodItem = document.getElementById('search-result-section');
searchedFoodItem.addEventListener('click', event => {
    const singleFoodItemDiv = event.target.parentNode.childNodes;
    const singleFoodItemName = singleFoodItemDiv[3].innerText;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${singleFoodItemName}`)
        .then(response => response.json())
        .then(data => showDetails(data))

})





function showDetails(data) {
    console.log(data);
    console.log(data.meals[0].strMeal);
    const ingredientUl = document.createElement('ul');
    // searchedFoodItem.style.display = 'none';
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';
    const htmlElements = `
<img src='${data.meals[0].strMealThumb}' alt=''>
<h3>${data.meals[0].strMeal}</h3>
`;
    detailsDiv.innerHTML = htmlElements;

    const foodInfo = data.meals[0];
    for (let i = 1; i < 21; i++) {
        const ingredients = `strIngredient${i}`;
        const ingredientName = foodInfo[ingredients];
        const ingredientsMeasurements = `strMeasure${i}`;
        const ingredientMeasurementIndividual = foodInfo[ingredientsMeasurements];

        if (ingredientName === '' || ingredientMeasurementIndividual ==='') {
            break;
        }
        const li = document.createElement('li');
        li.innerText = `Ingredient ${i}: ${ingredientMeasurementIndividual} ${ingredientName}`;
        ingredientUl.appendChild(li);
        console.log(`Ingredient ${i}: ${ingredientName}`);
    }
    detailsDiv.appendChild(ingredientUl);
    document.getElementById('search-result-section').style.display = 'none';
    document.getElementById('details-section').appendChild(detailsDiv);

}


// searching-function
function searchThefoodList() {
    const searchInput = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`)
        .then(response => response.json())
        .then(data => displayMatchedItem(data))
}