

class FoodCategoryView {

  constructor(foodCategoryObj){
    this.foodCategoryObj = foodCategoryObj;
  }

  constructFoodCategoryFragment(){

    const foodCategoryElement = document.createElement("div");
    foodCategoryElement.setAttribute("class", "list-card");

    const imageElement = document.createElement("img");
    imageElement.src = this.foodCategoryObj.imagePath;

    const anchorElement = document.createElement("a");
    anchorElement.setAttribute("class", "list-name");
    anchorElement.setAttribute("href", `#${this.foodCategoryObj.id}`);
    anchorElement.innerText = this.foodCategoryObj.id;

    foodCategoryElement.appendChild(imageElement);
    foodCategoryElement.appendChild(anchorElement);
  
    return foodCategoryElement;
  }


  appendToParent(foodCategoryHtmlFragment){

    const categoryListElement = document.getElementById("category-list");

    categoryListElement.appendChild(foodCategoryHtmlFragment)

  }

}

export {FoodCategoryView}