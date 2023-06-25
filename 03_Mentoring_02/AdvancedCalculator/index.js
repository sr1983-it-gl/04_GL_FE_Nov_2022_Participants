
let ioPanel = document.getElementById("ioPanel");

function genericButtonHandler(text){

  console.log("Generic Button Handler Called..." + text);

  // let divButtonTarget = event.target;
  // let divButtonText = divButtonTarget.innerText;

  updateAndAppendDisplay(text);
}

function updateAndAppendDisplay(newText){

  let existingText = ioPanel.innerText;

  let finalText = existingText + newText;
  ioPanel.innerText = finalText;
}

function plusOrMinusButtonHandler(){
  
  // "10"
  let ioPanelText = ioPanel.innerText;
  console.log(ioPanelText);

  // 10
  let ioPanelNumberValue = parseInt(ioPanelText);
  console.log(ioPanelNumberValue);

  // 10 -> -10
  // -10 -> +10

  ioPanelNumberValue = ioPanelNumberValue * -1
  ioPanel.innerText = ioPanelNumberValue;

}

function validateNumber(text){

  try{
    // let someNumber = parseInt(text);
    if (isNaN(text)){
      return false;
    }else{
      return true;
    }  
  }catch (error){
    console.log(error);
    return false;
  }
}


function clearButtonHandler(){

  ioPanel.innerText = "";
}

function backspaceButtonHandler(){

  let ioPanelText = ioPanel.innerText;

  let startIndex = 0;
  let endIndex = ioPanelText.length -1;

  let tempValue = ioPanelText.substring(startIndex, endIndex);
  console.log(tempValue);

  ioPanel.innerText = tempValue;
}

function enterButtonHandler(){

  console.log("Enter Button Handler");
  let ioPanelText = ioPanel.innerText;

  try{
    let result = eval(ioPanelText);
    ioPanel.innerText = result;
  }catch (error){
    console.log(error);
    ioPanel.innerText = "ERROR EXPRESSION";
  }

}


function sqrtButtonHandler(){

  let ioPanelText = ioPanel.innerText;
  // let aNumber = parseInt(ioPanelText);

  let outcome = Math.sqrt(ioPanelText);
  ioPanel.innerText = outcome;
}

function squareButtonHandler(){

  let ioPanelText = ioPanel.innerText;

  if (validateNumber(ioPanelText)){
    let outcome = ioPanelText * ioPanelText;
    ioPanel.innerText = outcome;  
  }else{
    ioPanel.innerText = "ERROR -> ";  
  }

}

function exponentButtonHandler(){

  let ioPanelText = ioPanel.innerText;

  if (validateNumber(ioPanelText)){
    let outcome = Math.exp(ioPanelText);
    ioPanel.innerText = outcome;  
  }else{
    ioPanel.innerText = "ERROR -> ";  
  }

}

function logButtonHandler(){

  let ioPanelText = ioPanel.innerText;

  if (validateNumber(ioPanelText)){
    let outcome = Math.log(ioPanelText);
    ioPanel.innerText = outcome;  
  }else{
    ioPanel.innerText = "ERROR -> ";  
  }

}

function cosButtonHandler(){

  let degreeValue = ioPanel.innerText;
  let radianValue = convertDegreesToRadians(degreeValue);

  let outcome = Math.cos(radianValue);
  ioPanel.innerText = outcome;
}

function sinButtonHandler(){

  let degreeValue = ioPanel.innerText;
  let radianValue = convertDegreesToRadians(degreeValue);

  let outcome = Math.sin(radianValue);
  ioPanel.innerText = outcome;
}

function tanButtonHandler(){

  let degreeValue = ioPanel.innerText;
  let radianValue = convertDegreesToRadians(degreeValue);

  let outcome = Math.tan(radianValue);
  ioPanel.innerText = outcome;

}


function convertDegreesToRadians(degree){

  return degree * (Math.PI / 180)

}