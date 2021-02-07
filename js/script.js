
function displayMatchedItem(foodItems) {

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









// searching-function
function searchThefoodList() {
    const searchInput = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`)
        .then(response => response.json())
        .then(data => displayMatchedItem(data))
}