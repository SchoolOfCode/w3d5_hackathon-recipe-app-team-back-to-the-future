const h2 = document.querySelector("h2");

function handleRecipeClick() {}

function handleInputChange() {}




async function fetchRecipe() {
    const respone = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=740fa198&app_key=de153b0e2a49cf4512763c34501b10f1&imageSize=LARGE&random=true");
    const data = await respone.json();
    console.log(data);
    const recipe = data.hits[0]["recipe"];
    renderData(recipe);
    

    }

function renderData(recipe) {
    h2.innerText = recipe.label;
}    



fetchRecipe();

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

