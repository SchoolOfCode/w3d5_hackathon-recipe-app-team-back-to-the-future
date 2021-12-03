const recipeName = document.querySelector("h3");
const servingSize = document.querySelector(".serving-size");
const recipeImage = document.querySelector("#recipe-Image");
const mealType = document.querySelector(".meal-type");
const time = document.querySelector(".time");
const ingredients = document.querySelector(".ingredients");
const randomButton = document.querySelector("#recipeGeneratorButton");

//function handleRecipeClick() {}

//function handleInputChange() {}

randomButton.addEventListener("click", fetchRecipe);




async function fetchRecipe() {
    const respone = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=740fa198&app_key=de153b0e2a49cf4512763c34501b10f1&time=20-60&imageSize=REGULAR&random=true");
    const data = await respone.json();
    const recipe = data.hits[0]["recipe"];
    renderData(recipe);
    }

function renderData(recipe) {
    recipeName.innerText = recipe.label;
    servingSize.innerText = recipe.yield
    recipeImage.src = recipe.image;
    mealType.innerText = recipe.mealType;
    time.innerText = recipe.totalTime;
    recipe.ingredientLines.forEach(ingredientsList);
}    

function ingredientsList(listItem){
    const newLi = document.createElement("li");
    newLi.innerText = listItem;
    ingredients.appendChild(newLi);
}





fetchRecipe();



/*NEW PLAN
want to create an appendchild function for ingredients.[done]
want to import the appendchild function into the renderData function.
  *made const ingredients[done]
  *created a function for ingredientsList-in function created a new list element.[done]
  *accessing data-this data is in an array. foreach index create a newLI and every one of these newLi's needs to be appended to the ol list.[done]


*/


/*
Get out data:
How to "outsource" and change:
    const h2 = document.querySelector("h2");
    h2.innerText = data.hits[0]["recipe"]["label"];

create individual assignment functions

Data Assignments:
    * need to access/output only one receipe in array of 20
    → data.hits[0]
    * 
*/

