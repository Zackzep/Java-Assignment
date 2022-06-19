//const userInput = document.getElementById("userInput");
const btnTest = document.getElementById("btnTest");
const drinks = document.getElementsByClassName("drinks");
//const pizzaSize = document.getElementsByClassName("pizzaSize");
//const vegToppings = document.getElementsByClassName("vegToppings");
//const meatToppings = document.getElementsByClassName("meatToppings");
//const crust = document.getElementById("crust");
//const displayselections = document.getElementById("displayselections");
//const buyernotes = document.getElementById("buyernotes");
const display = document.getElementById("display");


let receipt = "";
btnTest.addEventListener('click', function(){
    //alert(userInput.value);
    
    for(let i = 0; i < drinks.length; i++){
        if(drinks[i].checked){
            receipt = drinks[i].value + "\n";
            return;
        }
        
    }
    
    //for(let i = 0; i < pizzaSize.length; i++){
        //if(pizzaSize[i].checked){
            //alert(pizzaSize[i].value);
            //return;
        //}
    //}
    
    //for(let i = 0; i < vegToppings.length; i++){
        //if(vegToppings[i].checked){
            //alert(vegToppings[i].value);
        //}
    //}
    
    //for(let i = 0; i < meatToppings.length; i++){
        //if(meatToppings[i].checked){
            //alert(meatToppings[i].value);
        //}
    //}

    //alert(crust.value);

    //alert(buyernotes.value);

    

    //displayselections.innerText = userInput.value;
    //displayselections.innerHTML = drinks[6].value;
    //displayselections.value = userInput.value;
    
    //displayselections.value = drinks.value;
    
    //displayselections.value = pizzaSize.value;
    
    //displayselections.value = vegToppings.value;
    
    //displayselections.value = meatToppings.value;
    
    //displayselections.value = crust.value;
    
    //displayselections.value = buyernotes.value;
    
});
display.innerText = reciept;