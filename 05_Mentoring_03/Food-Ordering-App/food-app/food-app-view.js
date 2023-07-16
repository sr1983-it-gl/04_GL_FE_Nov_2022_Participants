
import {FoodItemUtils} from "./food-item/model/food-item-utils.js";
import {FoodItemView} from "./food-item/view/food-item-view.js";
import {FoodCategoryView} from "./food-category/food-category-view.js"

class FoodAppView{


  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  constructMainPanelView(){

    console.log("Cosntruction of Main Panel View");
    console.log(this.foodCategories);

    this.foodCategories.forEach( (foodCategoryObj) => {

      const foodItemsArrObj = FoodItemUtils.getFoodItems(foodCategoryObj);
      console.log("Food item array");
      console.log(foodItemsArrObj);

      foodItemsArrObj.forEach( (foodItemObj) => {

        const foodItemView = new FoodItemView(foodItemObj);
        const foodItemHTMLFragement = foodItemView.buildFoodItemFragment();
        foodItemView.appendToCategory(foodCategoryObj, foodItemHTMLFragement);

      })
    })
  }


  constructQuickNavigationView(){

    console.log("Cosntruction of Main Panel View");
    console.log(this.foodCategories);

    this.foodCategories.forEach( (foodCategoryObj) => {

      const foodCategoryViewObj = new FoodCategoryView(foodCategoryObj);

      const foodCategoryHtmlFragment = foodCategoryViewObj.constructFoodCategoryFragment();

      foodCategoryViewObj.appendToParent(foodCategoryHtmlFragment);
    })
  }

}


export {FoodAppView}

