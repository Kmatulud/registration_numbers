const wrapper = document.querySelector(".wrapper")
const input = document.querySelector("#register");
const buttonElem = document.querySelector("#submit");
const showAllBtn = document.querySelector("#showAll");
const resetBtn = document.querySelector("#reset");

const registration = Registration();

buttonElem.addEventListener("click", function(){

    registration.setRegNum(input.value);
    registration.getRegNum();

    if (registration.getRegNum() != "") {
		let list = document.createElement("ul");
		document.getElementById("regNums").appendChild(list);
		let listItem = document.createElement("li");
		listItem.innerHTML = registration.getRegNum();
		list.appendChild(listItem);
		input.value = "";
	} else {
		errorMsg = document.createElement("p");
		errorMsg.innerHTML = "Input cannot be empty!";
		errorMsg.style.color = "orange";
		document.getElementById("inputField").appendChild(errorMsg);
	}
})
showAllBtn.addEventListener("click", function(){
	let checkedRadio = document.querySelector("#radios:checked");
	registration.setTown(checkedRadio.value);
	registration.getTown();

	
    var emptyArr = JSON.parse(localStorage.getItem("emptyArr")) || [];

	registration.setTownEntered(emptyArr);
	registration.getTownEntered();
})