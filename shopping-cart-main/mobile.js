function updateMobileNumber(update){
    const inputFeild = document.getElementById('input-feild');
    const inputFeildString = inputFeild.value;
    const inputFeildValue = parseInt(inputFeildString);

    let newMobileNumber;
    if(update == true){
        newMobileNumber = inputFeildValue + 1;
    }
    else{
        newMobileNumber = inputFeildValue - 1;
    }
    return newMobileNumber;
}

function mobilePriceUpdate(mobileDisit){
    const mobilePrice = document.getElementById('mobile-price');
    const price = mobileDisit * 1219;
    price.innerText = mobilePrice;
}


document.getElementById('incrase-btn').addEventListener('click',function(){
   const mobileDisit =  updateMobileNumber(true);
   mobilePriceUpdate(mobileDisit);
})
document.getElementById('dcrase-btn').addEventListener('click',function(){
    updateMobileNumber(false);
})