const assert = require("chai").assert;
/** Import simple App class */
const CoffeMachine = require("./../zad1");

/** Init App class object */
let testApp = new CoffeMachine(100, 1000, false);

describe("Coffe  Machine Class unit test: ", function () {
  describe("turnMachineOn method:", function () {
    it("turnMachineOn() mora vratiti true ako je stroj bio ugašen", function () {
      assert.equal(testApp.turnMachineOn(), true);
    });
    it("turnMachineOn() mora vratiti poruku  ako je stroj već upaljen", function () {
      assert.isString(testApp.turnMachineOn());
    });
  });
  describe("turnMachineOff method:", function () {
    it("turnMachineOff() mora vratiti false ako je stroj bio upaljen", function () {
      assert.equal(testApp.turnMachineOff(), false);
    });
    it("turnMachineOff() mora vratiti poruku  ako je stroj već ugašen", function () {
      assert.isString(testApp.turnMachineOff());
    });
  });
  describe("refil(int,int) method:", function () {
    it("refil(int,int) mora vratiti poruku ako je kava dodana, ali nije napunjena do kraja.", function () {
      assert.equal(testApp.refill(90, 1000), "Coffe added. You can fill more!");
    });
    it("refil(int,int) mora vratiti poruku ako je voda dodana, ali nije napunjena do kraja.", function () {
      assert.equal(testApp.refill(100, 900), "Water added. You can fill more!");
    });
    it("refil(int,int) mora vratiti status 200 ako je nadopuna uspješna", function () {
      assert.equal(testApp.refill(100, 1000), 200);
    });
    it("refil(int,int) vraća grešku ukoliko jedan od parametara nije int", function () {
      assert.throws(() => {
        testApp.refill("100", 10);
      }, Error);
    });
  });
  describe("makeCoffe() method:", function () {
    it("makeCoffe() napravila kavu", function () {
      let oldCoffeValue = testApp.coffeAmount;
      testApp.makeCoffe();
      assert.isAbove(oldCoffeValue, testApp.coffeAmount);
    });
    it("makeCoffe() vraća poruku ako ne može napraviti kavu.", function () {
      testApp.waterAmmount = 1;
      testApp.coffeAmount = 1;
      assert.equal(testApp.makeCoffe(), "Machine can't make a coffe.");
    });
  });
});
