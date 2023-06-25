let programmingLanguages = new Array();

programmingLanguages.push("Java");
programmingLanguages.push("NodeJS");
programmingLanguages.push("Python");

/*
for (let index = 0; index < programmingLanguages.length; index ++){

  console.log(programmingLanguages[index]);
}

*/

programmingLanguages.forEach( (element, index) => {

  console.log(element + "->" + index);
})


/*
function add(a, b){
  return a+b
}
*/