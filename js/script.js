const loadMeals = () => {
    const searchName = document.getElementById("search-field");
    const name = searchName.value;
    const searchText = name !== '' ? name : 'fish';
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}


const displayMeal = meals => {
    const mealWrapper = document.getElementById("meals");
    if(meals.length < 0){
        console.log(meal);   
        const col = document.createElement('div');
        col.classList.add('col');
        col.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-utensils"></i> OPS!</h5>
                    <p class="card-text">Sorry no Meal found.</p>
                </div>
            </div>
        `;
    }else{
        mealWrapper.innerHTML = "";
        meals.forEach(meal => {
            console.log(meal);   
            const col = document.createElement('div');
            col.classList.add('col');
            col.innerHTML = `
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-utensils"></i> ${meal.strMeal}</h5>
                        <div class='row'>
                            <div class="col-6">
                                <i class="fas fa-globe-asia"></i> ${meal.strArea}
                            </div> 
                            <div class="col-6"> 
                            <i class="fas fa-bookmark"></i> ${meal.strCategory} <br>
                            </div> 
                        </div>
                        <div class='row'>
                            <p class="mt-3 mb-2"><i class="fas fa-leaf"></i> <b>Ingredients</b></p>
                            <div class="col-6">
                                <i class="fas fa-check"></i> ${meal.strIngredient1}<br>
                                <i class="fas fa-check"></i> ${meal.strIngredient2}<br>
                                <i class="fas fa-check"></i> ${meal.strIngredient3}<br>
                                <i class="fas fa-check"></i> ${meal.strIngredient4}<br>
                            </div> 
                            <div class="col-6"> 
                                <i class="fas fa-check"></i> ${meal.strIngredient5}<br>
                                <i class="fas fa-check"></i> ${meal.strIngredient6}<br>
                                <i class="fas fa-check"></i> ${meal.strIngredient7}<br>
                                <i class="fas fa-check"></i> ${meal.strIngredient8}<br>
                            </div> 
                        </div>
                        <p class="mt-4 card-text"><i class="fas fa-clipboard-list fa-2x"></i> ${meal.strInstructions.slice(0,100)} <span class="pull-right"> <a  class="text-right" href="#"> Read More</a></span></p>
                    </div>
                </div>
            `;
            // col.appendChild(card)

            mealWrapper.appendChild(col)
    });  
    }

    

}

const loadgMeals = () => {
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=fish`

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}
loadgMeals();