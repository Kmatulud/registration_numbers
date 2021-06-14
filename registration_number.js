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
//array to push reg nums to localstorage
const regNums = JSON.parse(localStorage.getItem("myArray")) || [];

register.setArr(regNums);
register.getArr();

//get value of localStorage so that it keeps reg Numbers displayed on screen after a refresh
if (localStorage.getItem("myArray")) {
	for (let i = 0; i < register.getArr().length; i++) {
		var listItem = document.createElement("LI");
		listItem.innerHTML = register.getArr()[i];
		listItem.classList.add("show");
		listItem.classList.add("filterDiv");
		list.appendChild(listItem);

		if (register.getArr()[i].indexOf("CA") > -1) {
			listItem.classList.add("capeTown");
		} else if (register.getArr()[i].indexOf("CJ") > -1) {
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
	register.formatRegs(register.getRegNum());

	if (
		register.getRegNum() != "" &&
		register.getRegNum().toUpperCase().startsWith("CA") &&
		register.formatRegs(register.getRegNum())

	) {
		var listItem = document.createElement("LI");
		listItem.classList.add("filterDiv");
		listItem.classList.add("show");
		listItem.classList.add("capeTown");
		listItem.innerHTML = register.getRegNum().toUpperCase();
		list.appendChild(listItem);
	} else if (
		register.getRegNum() != "" &&
		register.getRegNum().toUpperCase().startsWith("CJ") &&
		register.formatRegs(register.getRegNum())
	) {
		var listItem = document.createElement("LI");
		listItem.classList.add("filterDiv");
		listItem.classList.add("show");
		listItem.classList.add("paarl");
		listItem.innerHTML = register.getRegNum().toUpperCase();
		list.appendChild(listItem);
	} else if (
		register.getRegNum() != "" &&
		register.getRegNum().toUpperCase().startsWith("CY") &&
		register.formatRegs(register.getRegNum())
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
	} else{
		err.innerHTML = "Invalid Entry: Wrong Format";
		inputField.appendChild(err);
		setTimeout(() => {
			err.innerHTML = "";
		}, 5000);
	}
	input.value = "";
	if (!register.getArr().includes(listItem.innerHTML)) {
		register.getArr().push(listItem.innerText);
		localStorage.setItem("myArray", JSON.stringify(register.getArr()));
		JSON.parse(localStorage.getItem("myArray"));
	} else {
		err.innerHTML = "That registration Number has already been added!";
		inputField.appendChild(err);
		list.removeChild(listItem);
		setTimeout(() => {
			err.innerHTML = "";
		}, 5000);
	}
	if (register.getArr().length > 10) {
		err.innerHTML =
			"You've exceeded the number of registration numbers to be added!";
		inputField.appendChild(err);
		list.removeChild(listItem);
		setTimeout(() => {
			err.innerHTML = "";
		}, 5000);
	}
});


filterSelection("all");
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		removeShowClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addShowClass(x[i], "show");
	}
}

	function addShowClass(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(" ");
		arr2 = name.split(" ");
		for (i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {
				element.className += " " + arr2[i];
			}
		}
	}

	function removeShowClass(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(" ");
		arr2 = name.split(" ");
		for (i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
				arr1.splice(arr1.indexOf(arr2[i]), 1);
			}
		}
		element.className = arr1.join(" ");
	}
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

resetBtn.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});
capetown.addEventListener("click", function(){
	filterSelection("capeTown");
});
belville.addEventListener("click", function(){
	filterSelection("belville")
});
paarl.addEventListener("click", function(){
	filterSelection("paarl")
});
all.addEventListener("click", function () {
	filterSelection("all");
});