function Register() {
	var regNum;
	var town;
	var regNumsArr = [];
	var errorMsg = "";

	function setRegNum(reg) {
		regNum = reg;
	}
	function getRegNum() {
		return regNum.toUpperCase();
	}
	function setArr(regNum) {
		regNumsArr = regNum;
	}

	function getArr() {
		return regNumsArr;
	}

	function setTown(townParam) {
		town = townParam;
	}

	function getTown() {
		return town;
	}
	function addRegNum(regNum) {
		if (!regNumsArr.includes(regNum.toUpperCase())) {
			if (regNum.length > 8) {
				errorMsg = "Registration number is too long!";
			} else {
				if (regNum.length < 8) {
					errorMsg = "Registration number is too short!should contain atleast 7 characters";
				} else {
					if (
						regNum.startsWith("ca") ||
						regNum.startsWith("cj") ||
						regNum.startsWith("cy")
					) {
						errorMsg = "";
						regNumsArr.push(regNum.toUpperCase());
					} else {
						errorMsg =
							"Invalid registration number, must start with CA CJ or CY!";
					}
				}
			}
		} else {
			errorMsg = "Registration number already exists";
		}
		if (regNum === "") {
			errorMsg = "Please enter a registration number!";
		}
	
	}

	function getErrorMsg() {
		return errorMsg;
	}

	function formatRegs(regs) {
		return (
			regs.substring(0, 2).toUpperCase() + "-" + regs.substring(2, 8) ||
			regs.substring(0, 2).toUpperCase() + " " + regs.substring(2, 8)
		);
	}

	return {
		setRegNum,
		getRegNum,
		setTown,
		getTown,
		setArr,
		getArr,
		formatRegs,
		getErrorMsg,
		addRegNum
	};
}
