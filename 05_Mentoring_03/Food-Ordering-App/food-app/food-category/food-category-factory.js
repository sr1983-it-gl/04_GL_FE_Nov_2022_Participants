
import { FoodCategory } from "./food-category-model.js"
import {FoodItemUtils} from "../food-item/model/food-item-utils.js";


const FOOD_CATEGORY_BIRYANI = new FoodCategory(
  "biryani",
  "Biryani", 
  FoodItemUtils.getFoodItem(1).imagePath
)

const FOOD_CATEGORY_CHICKEN = new FoodCategory(
  "chicken",
  "Chicken Delicious", 
  FoodItemUtils.getFoodItem(10).imagePath
)

const FOOD_CATEGORY_PANEER = new FoodCategory(
  "paneer",
  "Paneer Mania", 
  FoodItemUtils.getFoodItem(16).imagePath
)

const FOOD_CATEGORY_VEG = new FoodCategory(
  "vegetable",
  "Pure Veg Dishes", 
  FoodItemUtils.getFoodItem(24).imagePath
)

const FOOD_CATEGORY_CHINESE = new FoodCategory(
  "chinese",
  "Chinese Corner", 
  FoodItemUtils.getFoodItem(30).imagePath
)

const FOOD_CATEGORY_SOUTH_INDIAN = new FoodCategory(
  "south-indian",
  "South Indian", 
  FoodItemUtils.getFoodItem(37).imagePath
)

class FoodCategoryFactory {

  static get FOOD_CATEGORY_BIRYANI(){

    return FOOD_CATEGORY_BIRYANI;
  }

  static get FOOD_CATEGORY_CHICKEN(){

    return FOOD_CATEGORY_CHICKEN;
  }

  static get FOOD_CATEGORY_PANEER(){

    return FOOD_CATEGORY_PANEER;
  }

  static get FOOD_CATEGORY_VEG(){

    return FOOD_CATEGORY_VEG;
  }

  static get FOOD_CATEGORY_CHINESE(){

    return FOOD_CATEGORY_CHINESE;
  }

  static get FOOD_CATEGORY_SOUTH_INDIAN(){

    return FOOD_CATEGORY_SOUTH_INDIAN;
  }


  static getAllFoodCategories(){

    const foodCategories = new Array();

    foodCategories.push(FOOD_CATEGORY_BIRYANI);
    foodCategories.push(FOOD_CATEGORY_CHICKEN);
    foodCategories.push(FOOD_CATEGORY_PANEER);
    foodCategories.push(FOOD_CATEGORY_VEG);
    foodCategories.push(FOOD_CATEGORY_CHINESE);
    foodCategories.push(FOOD_CATEGORY_SOUTH_INDIAN);


    return foodCategories;
  }

}

export {
  FoodCategoryFactory
}