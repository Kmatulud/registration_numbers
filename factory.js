function Register(){
    var townName;
	var regNum;
    function setRegNum(reg){
        regNum = reg;
    }
    function getRegNum(){
        return regNum.toUpperCase();
	}
    function setTown(town) {
		townName = town;
	}

	function getTown() {
		return townName;
	}
	function setArr(theplates){
		regNumsArr = theplates;
	}
	function getArr(){
		return regNumsArr;
	}
 
	function checkTown(list, location) {
		var filteredData = [];
		for (var i=0; i<list.length;i++){
			if(list[i].startsWith(location)){
				filteredData.push(location)
			}
		}
		return filteredData;
	}

    return {
			setRegNum,
			getRegNum,
			setTown,
			getTown,
			setArr,
			getArr,
			checkTown,
		};
}