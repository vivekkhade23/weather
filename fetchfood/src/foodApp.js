const getCategoriesData = async () => {
  // code here
  try{
  url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
let res=  await fetch(url)
  res=await res.json();
  console.log("Categories Data:",res)
  return res;
}
catch(err){
  return "something went wrong";
}
};

const getIngredientData = async () => {
  // code here
  try{
    url="https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  let res=  await fetch(url)
    res=await res.json();
    console.log("Ingredient Data:",res)
    return res;

  }
  catch(err){
  return "something went wrong";
  }
};

window.onload = function () {
  //  get the buttons here and add click event
  document.querySelector("#get-category-data").addEventListener("click",getCategoriesData);
  document.querySelector("#get-ingredient-data").addEventListener("click",getIngredientData);

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
