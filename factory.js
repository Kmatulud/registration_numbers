function Register() {
	var regNum;
	var regNumsArr = [];
	function setRegNum(reg) {
		regNum = reg;
	}
	function getRegNum() {
		return regNum.toUpperCase().trim();
	}
	function setArr(regNum) {
		regNumsArr = regNum;
	}
	function getArr() {
		return regNumsArr;
	}
	
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
	
	return {
		setRegNum,
		getRegNum,
		setArr,
		getArr,
		filterSelection,
		addShowClass,
		removeShowClass,
	};
}
