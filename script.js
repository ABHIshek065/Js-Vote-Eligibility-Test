




function check() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (age > 18) {
    document.getElementById("result").innerText = "Eligible";
  }
 else {
    document.getElementById("result").innerText = " Not Eligible";
  }
}
