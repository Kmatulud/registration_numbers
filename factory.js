function Registration(){
    var regNum;
    var townName;
    function setRegNum(reg){
        regNum = reg;
    }
    function getRegNum(){
        return regNum.toUpperCase().trim();
	}
    function setTown(town) {
		townName = town;
	}

	function getTown() {
		return townName;
	}

	function checkTown() {
		if (getTown() === "capetown") {
			townName.startsWith("CA");
		}
		if (getTown() === "bellville") {
			townName.startsWith("CY");
		}
		if (getTown() === "paarl") {
			townName.startsWith("CJ");
		}
	}
    return {
        setRegNum,
        getRegNum,
        setTown,
        getTown,
        checkTown
    }
}
//  function fromWhere(carReg) {
// 	switch (carReg) {
// 		case "CY 189-012":
// 			return "Bellville";
// 			break;
// 		case "CJ 189-123":
// 			return "Paarl";
// 			break;
// 		case "CA 189-235":
// 			return "Cape Town";
// 			break;
// 		default:
// 			return "Some other place!";
// 	}
// }