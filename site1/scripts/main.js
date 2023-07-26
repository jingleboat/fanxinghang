function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/lol.jpg") {
      myImage.setAttribute("src", "images/lol2.jpg");
    } else {
      myImage.setAttribute("src", "images/lol.jpg");
    }
  };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "hello，" + storedName;
}
myButton.onclick = function () {
    setUserName();
  };
  
   
  
  