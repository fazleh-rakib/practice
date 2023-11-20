class AllTeam {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  feedback() {
    console.log(`Thank ${this.name} for your feedback`);
  }
}
class Teacher extends AllTeam {
  designation = "web course Teacher";
  team = "web team";

  constructor(name, location) {
    super(name, location);
  }

  officeTime(startTime) {
    console.log(`Office Time start at ${startTime} am`);
  }
  officeEnd(endTime) {
    console.log(`office end at ${endTime} pm`);
  }
}

class Designer extends AllTeam{
  designation = "web page designer";
  team = "web team";
  tech;

  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }

  giveDesign(startTime) {
    console.log(`Office Time start at ${startTime} am`);
  }
  officeEnd(endTime) {
    console.log(`office end at ${endTime} pm`);
  }
}

const amir = new Teacher("amir", "uttara");
console.log(amir);
amir.officeTime(7);
amir.officeEnd(5);
amir.feedback();

const rakib = new Designer("rakib", "uttara", "CSS");
console.log(rakib);
rakib.feedback()

const mizanVAi = new Designer('Mizan ai','Dhaka', 'Js')
console.log(mizanVAi);
amir.feedback();
