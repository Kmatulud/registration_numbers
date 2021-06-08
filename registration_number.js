const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("#register");
const buttonElem = document.querySelector("#submit");
const showAllBtn = document.querySelector("#showAll");
const resetBtn = document.querySelector("#reset");
const checkedRadio = document.querySelector("#radios:checked");

const registration = Register();

function createElem() {
	registration.setRegNum(input.value);
	registration.setTown(checkedRadio.value);

	registration.getTown();
	registration.getRegNum();

	if (registration.getRegNum() != "") {
		if (!registration.getRegNum().match(/^[A-Z]{2}\s[0-9]{4}$/)){
			errorMsg = document.createElement("p");
			errorMsg.innerHTML = "Invalid registration!";
			errorMsg.style.color = "orange";
			document.getElementById("inputField").appendChild(errorMsg);
			setTimeout(function(){
				errorMsg.innerHTML = "";
			},2000)
			input.value = "";
		} else {
			var list = document.createElement("ul");
			document.getElementById("regNums").appendChild(list);
			var listItem = document.createElement("li");
			listItem.innerHTML = registration.getRegNum();
			list.appendChild(listItem);
			input.value = "";
		}
	} else {
		errorMsg = document.createElement("p");
		errorMsg.innerHTML = "Input cannot empty!";
		errorMsg.style.color = "orange";
		document.getElementById("inputField").appendChild(errorMsg);
		setTimeout(function () {
			errorMsg.innerHTML = "";
		}, 2000);
		input.value = "";
	}
}
showAllBtn.addEventListener("click", function () {
	registration.setRegNum(input.value);
	registration.setTown(checkedRadio.value);

	registration.getTown();
	registration.getRegNum();
	var emptyArr = localStorage.getItem("emptyArr") || [];
	registration.setArr(emptyArr);
	registration.getArr();

	registration.checkTown(emptyArr, registration.getRegNum());
	localStorage.setItem(
		"emptyArr",
		registration.checkTown(emptyArr, registration.getRegNum())
	);
	localStorage.getItem("emptyArr");
});

resetBtn.addEventListener("click", function () {
	location.reload();
	localStorage.clear();
});
buttonElem.addEventListener("click", createElem);

