
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
    // searchedFoodItem.style.display = 'none';
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';
    const htmlElements = `
<img src='${data.meals[0].strMealThumb}' alt=''>
<h3>${data.meals[0].strMeal}</h3>
`;
    detailsDiv.innerHTML = htmlElements;

    const ingredientsUl = document.createElement('ul');
    let li = document.createElement('li')
    for (let i = 1; i < 15; i++) {
        if (`data.meals[0].strIngredient${i}` === '') {
            break;
        }
        const item = `data.meals[0].strIngredient${i}`
        li.innerText = data.meals[0].item;
        // li.innerText = `${data.meals[0].strIngredient${i}}`
        ingredientsUl.appendChild = li;
        console.log(li);
    }
    detailsDiv.appendChild = ingredientsUl;
    document.getElementById('details-section').appendChild = detailsDiv;

}


// searching-function
function searchThefoodList() {
    const searchInput = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`)
        .then(response => response.json())
        .then(data => displayMatchedItem(data))
}