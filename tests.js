describe("The Registration Project", function () {
	const register = Register();

	it("should return an inputted registration number from a user irrespective of cases used", function () {
		register.setRegNum("CA 1203");
		assert.equal("CA 1203", register.getRegNum());

		register.setRegNum("cj 0973");
		assert.equal("CJ 0973", register.getRegNum());

		register.setRegNum("cy 7845");
		assert.equal("CY 7845", register.getRegNum());
	});
	it("should return the value of the radio buttons selected just as it is written", function () {
		register.setTown("cape town");
		assert.equal("cape town", register.getTown());

		register.setTown("paarl");
		assert.equal("paarl", register.getTown());

		register.setTown("bellville");
		assert.equal("bellville", register.getTown());
	});

	it("should accept a registration number format of this type: CA31221", function () {
		assert.equal("CA-31221", register.formatRegs("CA31221"));
	});

	it("should accept a registration number format of this type: CJ9898", function () {
		assert.equal("CJ-9898", register.formatRegs("CJ9898"));
	});

	it("should accept a registration number format of this type: CY7878", function () {
		assert.equal("CY-7878", register.formatRegs("CY7878"));
	});
});
