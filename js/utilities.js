function getInputValue (inputvalue){

    const inputTextField = document.getElementById(inputvalue);
    const inputTextFieldString = inputTextField.value;
    const inputTextFieldValue =parseFloat(inputTextFieldString);
    inputTextField.value ='';
    return inputTextFieldValue;



}

function getElementInnerText (innerTextValue){

    const elementInnerText = document.getElementById(innerTextValue);
    const elementInnerTextString = elementInnerText.innerText;
    const elementInnerTextValue = parseFloat(elementInnerTextString);
    return elementInnerTextValue;
}