var input = document.getElementById("reg"); //Get input field from HTML
var list = document.querySelector(".container");
var inputField = document.querySelector(".input"); //Html container to append p error tag
var resetBtn = document.querySelector("#reset");
var capetown = document.querySelector("#capeTown");
var belville = document.querySelector("#belville");
var paarl = document.querySelector("#paarl");
var all = document.querySelector("#all");
var err = document.createElement("P");
err.style.color = "red";

//create instance of factory function
const register = Register();

const regNums = JSON.parse(localStorage.getItem("myArray")) || [];

//get value of localStorage so that it keeps reg Numbers displayed on screen after a refresh
if (localStorage.getItem("myArray")) {
	for (let i = 0; i < regNums.length; i++) {
		var listItem = document.createElement("LI");
		listItem.innerHTML = regNums[i];
		listItem.classList.add("show");
		listItem.classList.add("filterDiv");
		list.appendChild(listItem);

		if (regNums[i].indexOf("CA") > -1) {
			listItem.classList.add("capeTown");
		} else if (regNums[i].indexOf("CY") > -1) {
			listItem.classList.add("paarl");
		} else {
			listItem.classList.add("belville");
		}
	}
}
//Add list items to the body
document.getElementById("add").addEventListener("click", function () {
	register.setRegNum(input.value);
	register.getRegNum();

	if (
		register.getRegNum() != "" &&
		register.getRegNum().toUpperCase().startsWith("CA") &&
		register.getRegNum().match(/^[A-Z]{2}\s[0-9]{5}$/)
	) {
		var listItem = document.createElement("LI");
		listItem.classList.add("filterDiv");
		listItem.classList.add("show");
		listItem.classList.add("capeTown");
		listItem.innerHTML = register.getRegNum().toUpperCase();
		list.appendChild(listItem);
	} else if (
		register.getRegNum() != "" &&
		register.getRegNum().toUpperCase().startsWith("CY") &&
		register.getRegNum().match(/^[A-Z]{2}\s[0-9]{5}$/)
	) {
		var listItem = document.createElement("LI");
		listItem.classList.add("filterDiv");
		listItem.classList.add("show");
		listItem.classList.add("paarl");
		listItem.innerHTML = register.getRegNum().toUpperCase();
		list.appendChild(listItem);
	} else if (
		register.getRegNum() != "" &&
		register.getRegNum().toUpperCase().startsWith("CJ") &&
		register.getRegNum().match(/^[A-Z]{2}\s[0-9]{5}$/)
	) {
		var listItem = document.createElement("LI");
		listItem.classList.add("filterDiv");
		listItem.classList.add("show");
		listItem.classList.add("belville");
		listItem.innerHTML = register.getRegNum().toUpperCase();
		list.appendChild(listItem);
	} else if (register.getRegNum() === "") {
		err.innerHTML = "Input cannot be blank";
		inputField.appendChild(err);
		setTimeout(() => {
			err.innerHTML = "";
		}, 2000);
	} else {
		err.innerHTML = "Invalid Entry: Wrong Format";
		inputField.appendChild(err);
		setTimeout(() => {
			err.innerHTML = "";
		}, 5000);
	}
	input.value = "";
	if (!regNums.includes(listItem.innerHTML)) {
		regNums.push(listItem.innerText);
		localStorage.setItem("myArray", JSON.stringify(regNums));
		JSON.parse(localStorage.getItem("myArray"));
	} else {
		err.innerHTML = "That registration Number has already been added!";
		inputField.appendChild(err);
		list.removeChild(listItem);
		setTimeout(() => {
			err.innerHTML = "";
		}, 5000);
	}
	if (regNums.length > 10) {
		err.innerHTML =
			"You've exceeded the number of registration numbers to be added!";
		inputField.appendChild(err);
		list.removeChild(listItem);
		setTimeout(() => {
			err.innerHTML = "";
		}, 5000);
	}
});
resetBtn.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

capetown.addEventListener("click", function(){
	register.filterSelection("capeTown");
});
belville.addEventListener("click", function(){
	register.filterSelection("belville")
});
paarl.addEventListener("click", function(){
	register.filterSelection("paarl")
});
all.addEventListener("click", function () {
	register.filterSelection("all");
});