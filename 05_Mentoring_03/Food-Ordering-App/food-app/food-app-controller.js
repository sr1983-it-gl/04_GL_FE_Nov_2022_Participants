
import {FoodAppView} from "./food-app-view.js";
import {FoodCategoryFactory} from "../food-app/food-category/food-category-factory.js";

class FoodAppController{

  init(){

    const foodCategoriesArr = FoodCategoryFactory.getAllFoodCategories();

    const foodAppView = new FoodAppView(foodCategoriesArr);
    foodAppView.constructMainPanelView();
    foodAppView.constructQuickNavigationView();

    // Get all categories
    // For each category
      // Get all food item
        // For each food item
          // build the view []

    // View
    // Model

  }
}

export {FoodAppController}