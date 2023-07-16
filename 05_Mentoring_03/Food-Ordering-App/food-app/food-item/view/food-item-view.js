

class FoodItemView {

  constructor(foodItemObj){
    this.foodItemObj = foodItemObj;
  }

  buildFoodItemFragment(){

    const foodItemElement = document.createElement("div");
    foodItemElement.setAttribute("id", "item-card");

    const nestedDivElement = document.createElement("div");
    nestedDivElement.setAttribute("id", "card-top");

      const ratingElement =  document.createElement("i");
      ratingElement.setAttribute("class", "fa fa-star");
      ratingElement.setAttribute("id", "rating");
      ratingElement.innerText = this.foodItemObj.userRating;

      const addToCartElement =  document.createElement("i");
      addToCartElement.setAttribute("class", "fa fa-heart-o add-to-cart");
      addToCartElement.setAttribute("id", this.foodItemObj.id);


    // document.append()
    nestedDivElement.appendChild(ratingElement);
    nestedDivElement.appendChild(addToCartElement);

    const imageElement = document.createElement("img");
    imageElement.src = this.foodItemObj.imagePath;

    const itemNameElement = document.createElement("p");
    itemNameElement.setAttribute("id", "item-name");
    itemNameElement.innerText = this.foodItemObj.name;

    const itemPriceElement = document.createElement("p");
    itemPriceElement.setAttribute("id", "item-price");
    itemPriceElement.innerText = `Price : $ ${this.foodItemObj.price}`;


    foodItemElement.appendChild(nestedDivElement);
    foodItemElement.appendChild(imageElement);
    foodItemElement.appendChild(itemNameElement);
    foodItemElement.appendChild(itemPriceElement);

    return foodItemElement;
  }

  appendToCategory(foodCategoryObj, foodItemHtmlFragment){

    console.log("Append to category" + foodCategoryObj.id);

    const foodCategoryElement 
      = document.getElementById(foodCategoryObj.id);
      
    foodCategoryElement.appendChild(foodItemHtmlFragment);
  }
  
}

export {FoodItemView}