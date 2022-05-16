function ToInr() {
    var dollars = document.getElementById("amount").value;
    var inr = dollars / 77;
    document.write(dollars + " dollars = " + inr + " INR");
}

function ToYen() {
    var dollars = document.getElementById("amount").value;
    var yen = dollars / 130;
    document.write(dollars + " dollars = " + yen + " Yen");
}

function ToEuro() {
    var dollars = document.getElementById("amount").value;
    var euro = dollars * 20 / 19;
    document.write(dollars + " dollars = " + euro + " Euros");
}

function ToPound() {
    var dollars = document.getElementById("amount").value;
    var pound = dollars / 0.82;
    document.write(dollars + " dollars = " + pound + " Pounds")
}
