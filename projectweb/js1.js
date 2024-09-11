let isPaused1 = false;
let isUp1 = false;
let isPaused2 = false;
let isUp2 = false;
let isPaused3 = false;
let isUp3 = false;
let isPaused4 = false;
let isUp4 = false;
let isPaused5 = false;
let isUp5 = false;
let isPaused6 = false;
let isUp6 = false;
let isPaused7 = false;
let isUp7 = false;
let isPaused8 = false;
let isUp8 = false;
let isPaused9 = false;
let isUp9 = false;

function moveup(e, index) {
  const image = e.currentTarget;
  if (image) {
    if (window[`isPaused${index}`] && window[`isUp${index}`]) {
      image.style.animation = "picanimationdown 1s ease-in-out 1";
      image.style.animationPlayState = "running";
      window[`isPaused${index}`] = false;
      window[`isUp${index}`] = false;
    } else if (!window[`isUp${index}`]) {
      image.style.animation = "picanimation 1s ease-in-out 1";
      image.style.animationPlayState = "running";
      setTimeout(() => {
        window[`isUp${index}`] = true;
        window[`isPaused${index}`] = true;
        image.style.animationPlayState = "paused";
      }, 970);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const margheritaImage = document.querySelector("#Margherita");
  margheritaImage.addEventListener("click", (e) => moveup(e, 1));
  const pepperoniImage = document.querySelector("#Pepperoni");
  pepperoniImage.addEventListener("click", (e) => moveup(e, 2));

  const bbqImage = document.querySelector("#BBQ");
  bbqImage.addEventListener("click", (e) => moveup(e, 3));

  const hawaiianImage = document.querySelector("#Hawaiian");
  hawaiianImage.addEventListener("click", (e) => moveup(e, 4));

  const vegetarianImage = document.querySelector("#Veg");
  vegetarianImage.addEventListener("click", (e) => moveup(e, 5));

  const meatLoversImage = document.querySelector("#MeatLovers");
  meatLoversImage.addEventListener("click", (e) => moveup(e, 6));

  const fourCheeseImage = document.querySelector("#FourCheese");
  fourCheeseImage.addEventListener("click", (e) => moveup(e, 7));

  const buffaloImage = document.querySelector("#Buffalo");
  buffaloImage.addEventListener("click", (e) => moveup(e, 8));

  const pestoImage = document.querySelector("#Pesto");
  pestoImage.addEventListener("click", (e) => moveup(e, 9));
});

document.addEventListener("DOMContentLoaded", () => {
  const sub1 = document.getElementById("submit1");
  sub1.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-1").submit();
    document.getElementById("form2-1").submit();
  });
  const sub2 = document.getElementById("submit2");
  sub2.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-2").submit();
    document.getElementById("form2-2").submit();
  });
  const sub3 = document.getElementById("submit3");
  sub3.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-3").submit();
    document.getElementById("form2-3").submit();
  });
  const sub4 = document.getElementById("submit4");
  sub4.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-4").submit();
    document.getElementById("form2-4").submit();
  });
  const sub5 = document.getElementById("submit5");
  sub2.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-5").submit();
    document.getElementById("form2-5").submit();
  });
  const sub6 = document.getElementById("submit6");
  sub6.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-6").submit();
    document.getElementById("form2-6").submit();
  });
  const sub7 = document.getElementById("submit7");
  sub2.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-7").submit();
    document.getElementById("form2-7").submit();
  });
  const sub8 = document.getElementById("submit8");
  sub8.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-8").submit();
    document.getElementById("form2-8").submit();
  });
  const sub9 = document.getElementById("submit9");
  sub9.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("form1-9").submit();
    document.getElementById("form2-9").submit();
  });
});
function addtocart(e, index) {
  const select = document.getElementById("select" + index);
  const number = document.getElementById("number" + index);
}
document.addEventListener("DOMContentLoaded", () => {
  const sub1 = document.getElementById("submit1");
  sub1.addEventListener("click");
});
