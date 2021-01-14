const fillCoffe = 100,
  fillWater = 1000;
class CoffeMachine {
  constructor(coffeAmount, waterAmmount, powerStatus) {
    this.coffeAmount = coffeAmount;
    this.waterAmmount = waterAmmount;
    this.powerStatus = powerStatus;
  }
  turnMachineOn() {
    if (this.powerStatus === false) {
      this.powerStatus = true;
      return this.powerStatus;
    }
    return "Machine is already turned on !";
  }
  turnMachineOff() {
    if (this.powerStatus === true) {
      this.powerStatus = false;
      return this.powerStatus;
    }
    return "Machine is already turned off !";
  }
  refill(coffe, water) {
    if (Number.isInteger(coffe) && Number.isInteger(water)) {
      if (coffe > fillCoffe) return "Coffe added. You can fill more!";
      else if (water > fillWater) return "Water added. You can fill more!";
      else {
        this.coffeAmount = coffe;
        this.waterAmmount = water;
        console.log("Machine refilled !");
        return 200;
      }
    }
    throw new Error("Illegal type");
  }
  makeCoffe() {
    this.coffeAmount -= 5;
    this.waterAmmount -= 15;
  }
}
module.exports = CoffeMachine;
