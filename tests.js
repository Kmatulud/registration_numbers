describe("The Registration Project", function(){
    const register = Register();

    it("should return an inputted registration number from a user irrespective of cases used", function(){
        register.setRegNum("CA 1203");
        assert.deepEqual("CA 1203", register.getRegNum());

        register.setRegNum("cj 0973");
        assert.deepEqual("CJ 0973", register.getRegNum());

        register.setRegNum("cy 7845");
        assert.deepEqual("CY 7845", register.getRegNum());
    })
    it("should return the value of the radio buttons selected just as it is written", function(){
        register.setTown("cape town");
        assert.equal("cape town", register.getTown());

        register.setTown("paarl");
        assert.equal("paarl", register.getTown());

        register.setTown("bellville");
        assert.equal("bellville", register.getTown());
    })
    it("should return CA for Cape Town", function(){
        register.setTown("capetown");
        assert.equal("", register.checkTown());
    })
    it("should return an array of registration numbers", function(){
        register.setNewArr("CA 1203,CJ 1203,CY 1203");
        assert.equal("CA 1203,CJ 1203,CY 1203", register.getNewArr());
    })
})