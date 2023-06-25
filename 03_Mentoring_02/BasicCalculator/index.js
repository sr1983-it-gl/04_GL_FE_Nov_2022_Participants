
let allButtons = document.getElementsByClassName("button");

// console.log(allButtons);

let buttonsArray = Array.from(allButtons);

// console.log(buttonsArray);
console.log(buttonsArray.length);

console.log("For Each")
buttonsArray.forEach( (divButton) => {

  // console.log(divButton);

  divButton.addEventListener("click", clickHandler);

})


function clickHandler(event){

  let ioPanel = document.getElementById("ioPanel");

  // Existing IOPanel Text
  let ioPanelText = ioPanel.innerText;

  let divButtonTarget =  event.target
  let divButtonText = divButtonTarget.innerText;

  console.log("Click Event is called..." + divButtonText);

  if (divButtonText == "CLEAR"){

    ioPanel.innerText = ""
  }else if (divButtonText == "BACKSPACE"){

    let startIndex = 0;
    let endIndex = ioPanelText.length -1;

    let tempValue = ioPanelText.substring(startIndex, endIndex);
    console.log(tempValue);

    ioPanel.innerText = tempValue;

  }else if (divButtonText == "="){

    try{
      let result = eval(ioPanelText)
      console.log(result);
      ioPanel.innerText = result;
    }catch (error){
      console.log(error);
      let errorMessage = "Invalid Expression [" + ioPanelText + "]";
      ioPanel.innerText = errorMessage
    }

  }else{

    //  Numbers [0-9], Operators [+, -, *, /], Paranthesis [(, )], "."
    // Updating the display panel

    let finalText = ioPanelText + divButtonText
    ioPanel.innerText = finalText;

  }

}