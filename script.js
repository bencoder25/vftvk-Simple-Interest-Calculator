function compute() {
   //Get the values and calculate
   var principal = parseFloat(document.getElementById("principal").value);
   var rate = parseFloat(document.getElementById("rate").value);
   var years = parseInt(document.getElementById("years").value);
   var interest = principal * years * rate / 100;
   var yearInTheFuture = new Date().getFullYear() + years;
   //Create the Interest text
   document.getElementById("result").innerHTML = "If you deposit " + principal + ",<br/>" +
       "at an interest rate of " + rate + ",<br/>" +
       "You will receive an amount of " + interest + ",<br/> " +
       "in the year " + yearInTheFuture;
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Check for positive values only
    function validateAmt() {
        var principal = document.getElementById("principal").value;
        var biggerThanZero = parseInt(principal) > 0;
        if (!biggerThanZero) {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
        }
}
