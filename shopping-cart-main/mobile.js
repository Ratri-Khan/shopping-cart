document.getElementById('incrase-btn').addEventListener('click',function(){
    const inputFeild = document.getElementById('input-feild');
    const incraseValueString = inputFeild.value;
    const incraseValue = parseFloat(incraseValueString);
    const incrase = incraseValue + 1 ;
    inputFeild.value = incrase;

    const mobilePriceFeild = document.getElementById('mobile-price');
    const mobilePriceString = mobilePriceFeild.innerText;
    const mobilePrice = parseFloat(mobilePriceString);

    const price = incrase * 1219;
    mobilePriceFeild.innerText = price;
})
document.getElementById('dcrase-btn').addEventListener('click',function(){
    const inputFeild = document.getElementById('input-feild');
    const dincraseValueString = inputFeild.value;
    const dincraseValue = parseFloat(dincraseValueString);
    const dincrase = dincraseValue - 1 ;
    inputFeild.value = dincrase;

    const mobilePriceFeild = document.getElementById('mobile-price');

    
    if(dincrase < 0 ){
        alert('Error');
    }
    else{
        const price = dincrase * 1219;
        mobilePriceFeild.innerText = price;
    }
})

document.getElementById('check-out').addEventListener('click',function(){
    const SubTotalFeild =document.getElementById('Sub-total');

    const mobilePriceFeild = document.getElementById('mobile-price');
    const mobilePriceString = mobilePriceFeild.innerText;
    const mobilePrice = parseFloat(mobilePriceString);;

    SubTotalFeild.innerText = mobilePrice;

    const taxFeild = document.getElementById('tax');
    const taxTotalString = taxFeild.innerText;
    const PreviousTax = parseFloat(taxTotalString);

    const inputFeild = document.getElementById('input-feild');
    const mobileDisit = inputFeild.value;

    const tax = mobileDisit * 5 ;
    taxFeild.innerText = tax;
   
    const totalFeild = document.getElementById('total');
    // const totalString = parseFloat(totalFeild);
   const total = mobilePrice + tax ; 
   totalFeild.innerText = total;

    
})