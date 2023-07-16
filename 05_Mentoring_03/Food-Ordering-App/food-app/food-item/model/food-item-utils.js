
import {foodItemsSampleData} from "./food-items-data.js"
import {FoodItem} from "./food-item.js";

class FoodItemUtils{

  static getFoodItems(foodCategoryObj){

    const foodItemsArr = new Array();

    foodItemsSampleData.forEach( (foodItemSampleData) => {

      console.log(`${foodItemSampleData.category} , ${foodCategoryObj.name}`)
      if (foodItemSampleData.category === foodCategoryObj.id){

        const foodItemObj = this.convert(foodItemSampleData);   
        foodItemsArr.push(foodItemObj);     
      }

    })

    return foodItemsArr;
  }

  static getFoodItem(foodItemId){

    console.log(`Food Item ID ${foodItemId}`);

    const foodItemSampleDataReturn 
      = foodItemsSampleData.find( (foodItemSampleData) => {

      if (foodItemSampleData.id === foodItemId){
        return foodItemSampleData;
      }

      // foodItemSampleData.id === foodItemId
    })

    const foodItemObj = FoodItemUtils.convert(foodItemSampleDataReturn);
    return foodItemObj;
  }

  static convert(foodItemSampleData){

    const foodItemObj = new FoodItem(
      foodItemSampleData.id,
      foodItemSampleData.name,
      foodItemSampleData.category,
      foodItemSampleData.rating,
      foodItemSampleData.price,
      foodItemSampleData.img
    )

    return foodItemObj;
  }

}


export {FoodItemUtils}