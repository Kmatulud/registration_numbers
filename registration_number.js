const wrapper = document.querySelector(".wrapper")
const input = document.querySelector("#register");
const buttonElem = document.querySelector("#submit");
const showAllBtn = document.querySelector("#showAll");
const resetBtn = document.querySelector("#reset");
const checkedRadio = document.querySelector("#radios:checked");


const registration = Register();

function createElem(){

    registration.setRegNum(input.value);
	registration.setTown(checkedRadio.value);

	registration.getTown();
    registration.getRegNum();

	var emptyArr = localStorage.getItem("emptyArr") || [];
	registration.setArr(emptyArr);
	registration.getArr();


    if (registration.getRegNum() != "") {
		var list = document.createElement("ul");
		document.getElementById("regNums").appendChild(list);
		var listItem = document.createElement("li");
		listItem.innerHTML = registration.getRegNum();
		list.appendChild(listItem);
		input.value = "";
	} else {
		errorMsg = document.createElement("p");
		errorMsg.innerHTML = "Input cannot be empty!";
		errorMsg.style.color = "orange";
		document.getElementById("inputField").appendChild(errorMsg);
	}
}
resetBtn.addEventListener("click", function(){
	localStorage.clear();
})
buttonElem.addEventListener("click", createElem);






