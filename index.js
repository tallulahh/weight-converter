function convertWeight(){
  var results = document.querySelector(".results");
  var weight = document.querySelector("input").value;
  var option = document.querySelector("select").value;
  if (!weight){
    alert("Please enter a weight.");
  } else {
    if (option ==="pounds"){
    var result = weight * 2.2;
    var unit = " kg";
  } else if (option === "kg"){
    var result = weight / 2.2;  
    var unit = " lbs";
  }
  results.style.display = "block";
  results.innerHTML = result.toFixed(2) + unit;
  }
};
