// function setCaseNumber(update){
//     const inputValue = document.getElementById('input-value');
//     const inputValueSring = inputValue.value;
//     const input = parseInt(inputValueSring);
   
//   if{
//     const incraseValue = input + 1;
//     inputValue.value = incraseValue;
//   }
// }
// document.getElementById('incrase-case').addEventListener('click',function(){
//     setCaseNumber(true);
    
// })
// document.getElementById('decrase-case').addEventListener('click',function(){
//     setCaseNumber();
//     const decraseValue = input - 1 ;
//     inputValue.value = decraseValue;

//     const totalCasePrice = decraseValue * 59 ;
//     const casePrice = document.getElementById('case-price');
//     casePrice.innerText = totalCasePrice ;
// })

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
} 

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})