function calculate (){
    // calculate income tax
    var income = document.getElementById("income").value;
    var incomeTax = income*0.35;
    // calculate wealth tax
    var wealth = document.getElementById("wealth").value;
    var wealthTax = wealth*0.25;
    // calculate total tax
    var tax = incomeTax + wealthTax;
    document.getElementById("tax").value = tax;
}

