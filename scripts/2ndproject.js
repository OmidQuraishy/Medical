// slide show
let listImage = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let img = document.querySelector("img");
let ind = 0;
setInterval(() => {
  img.src = listImage[ind];
  ind++;
  if (ind == 6) {
    ind = 0;
  }
}, 5000);

// time
let cl = document.getElementById("cl");
setInterval(() => {
  let d = new Date();
  cl.innerHTML = `${d.getHours() - 12}:${d.getMinutes() + ""}:${
    d.getSeconds() + ":" + "PM"
  }`;
}, 1000);
// bmi
let weight = document.getElementById("txt1");
let height = document.getElementById("txt2");
let call = document.getElementById("button");
let result = document.querySelector("#alert");
let button2 = document.getElementById("button2");
let button_clear = document.getElementById("clear");
call.onclick = () => {
  result.value = Math.ceil(weight.value / (height.value * height.value));
  if (result.value <= 25) {
    result.innerHTML = '<h4 class="alert alert-success">your body mass index is normal try to keep it normal</h4>';
  } else {
    result.innerHTML =
      '<h4 class="alert alert-danger">your body fat is too much , you  must excercise regularlly</h4>';
  }
};

button_clear.onclick = () => {
  result.style.display = "none";
};
