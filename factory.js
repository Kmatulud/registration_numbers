function Register() {
	var regNum;
	var town;
	var regNumsArr = [];

	function setRegNum(reg) {
		regNum = reg;
	}

	function getRegNum() {
		return regNum.toUpperCase().trim();
	}

	function setTown(theTown) {
		town = theTown;
	}

	function getTown() {
		return town;
	}

	function setArr(regNum) {
		regNumsArr = regNum;
	}

	function getArr() {
		return regNumsArr;
	}

	function formatRegs(regs) {
		return (
			regs.substring(0, 2).toUpperCase() + "-" + regs.substring(2, 8) ||
			regs.substring(0, 2).toUpperCase() + " " + regs.substring(2, 8)
		)}
	return {
		setRegNum,
		getRegNum,
		setTown,
		getTown,
		setArr,
		getArr,
		formatRegs,
	};
}
