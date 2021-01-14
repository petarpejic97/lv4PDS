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
    it("refil(int,int) mora vratiti status 200 ako je nadopuna uspješna", function () {
      assert.equal(testApp.refill(100, 1000), 200);
    });
    it("refil(int,int) vraća grešku ukoliko jedan od parametara nije int", function () {
      assert.throws(() => {
        testApp.addQuote("100", 10);
      }, Error);
    });
  });
  /*describe("removeQuote() method:", function () {
    it("removeQuote() mora vratiti status true ako rečenica postoji i obrisana iz liste", function () {
      let testStatus = testApp.removeQuote(
        "Nostalgia isn't what it used to be."
      );
      assert.isBoolean(testStatus);
      assert.equal(testStatus, true);
    });
    it("removeQuote() vraća grešku ukoliko prosljeđeni parametar nije znakovni tip", function () {
      assert.throws(() => {
        testApp.removeQuote(1234123);
      }, Error);
    });
  });*/
});
