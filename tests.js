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

	it("Should accept a registration number format of this type: CJ9898", function () {
		assert.equal("CJ-9898", register.formatRegs("CJ9898"));
	});

	it("Should accept a registration number format of this type: CY7878", function () {
		assert.equal("CY-7878", register.formatRegs("CY7878"));
	});
	describe("Error messages", function () {
		it("Should return an error message if no registration number has been added", function () {
			register.addRegNum("");

			assert.equal(
				"Please enter a registration number!",
				register.getErrorMsg()
			);
		});
		it("Should return an error message if the registration number is too long", function () {
			register.addRegNum("ca 1234412344")

			assert.equal(
				"Registration number is too long!",
				register.getErrorMsg()
			);
		});
		it("Should return an error message if the registration number is too long", function () {
			register.addRegNum("ca 12");

			assert.equal(
				"Registration number is too short!should contain atleast 7 characters",
				register.getErrorMsg()
			);
		});
		it("Should return an error message if duplicate registrations have been added", function () {
			register.addRegNum("ca 13324");
			register.addRegNum("ca 13324");

			assert.equal(
				"Registration number already exists",
				register.getErrorMsg()
			);
		});
		it("Should return an error message registration numbers do not start with CA, Cy or CJ ", function () {
			register.addRegNum("cm 13232")

			assert.equal(
				"Invalid registration number, must start with CA CJ or CY!",
				register.getErrorMsg()
			);
		});
	});
});
