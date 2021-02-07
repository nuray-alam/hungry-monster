
function displayMatchedItem(foodItems) {
    console.log(foodItems);
    console.log(foodItems.meals[0].strMeal);
    const imageUrl = foodItems.meals[0].strMealThumb;
    const foodItem = document.createElement('div');
    const foodItemPrimaryInfo = `
    <img src='${imageUrl}' alt=''>
    <h3>${foodItems.meals[0].strMeal}</h3>
    `
    foodItem.className = 'food-item';
    foodItem.innerHTML = foodItemPrimaryInfo;
    document.getElementById('search-result-section').appendChild(foodItem);

}




function searchThefoodList() {
    const searchInput = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`)
        .then(response => response.json())
        .then(data => displayMatchedItem(data))
}