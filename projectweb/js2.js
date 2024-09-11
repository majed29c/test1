document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submitbutton");
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const form3 = document.getElementById("form3");

  submit.addEventListener("click", (event) => {
    event.preventDefault();

    if (submit.value === "order") {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      document.getElementById("total").style.display = "none";
      submit.value = "Back Home";
      submit.style.gridArea = "8 / 6 / 9 / 9";

      const thankyoudiv = document.createElement("div");
      thankyoudiv.style.gridArea = "5 / 5 / 8 / 9";
      thankyoudiv.style.display = "flex";
      thankyoudiv.style.justifyContent = "center";
      thankyoudiv.style.alignItems = "center";
      thankyoudiv.style.backgroundColor = "#f8f9fa";
      thankyoudiv.style.padding = "20px";
      thankyoudiv.style.borderRadius = "8px";
      thankyoudiv.style.textAlign = "center";
      thankyoudiv.style.marginTop = "20px";

      const p = document.createElement("p");
      p.style.fontSize = "2vw";
      p.innerHTML =
        "Thank you for choosing Pizzaliano!<br>Your order has been successfully placed.<br>We appreciate your business and hope you enjoy your meal!<br>We'll prepare it with care and deliver it shortly. Have a great day!";
      thankyoudiv.appendChild(p);

      document.querySelector(".bigcontainer").appendChild(thankyoudiv);

      document.getElementsByClassName("placeorder")[0].style.gridArea =
        "8 / 6 / 9 / 8";
      document.getElementsByClassName("subbigcontainer")[0].style.gridArea =
        "2 / 3 / 10 / 11";
    } else if (submit.value === "Back Home") {
      window.location.href = "index.html";
    }
  });
});
