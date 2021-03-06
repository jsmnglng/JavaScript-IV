// CODE here for your Lambda Classes

// Stretch
function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(generateRandomNum(1, 20));

// base-class
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// Person > Instructor
class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) { // subject => str
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) { // student => obj, subject => str
    return `${student.name} receives a perfect score on ${subject}.`
  }

  // stretch
  scoreGrade(studentGrade) { // studentGrade => obj prop's grade
    let addOrMinus = generateRandomNum(1, 2);
    let points = generateRandomNum(10, 50);

    if (addOrMinus === 1) {
      studentGrade.grade += points;
      if (studentGrade.grade > 100) {
        studentGrade.grade = 100;
        return `${studentGrade.name}, your final grade is ${studentGrade.grade}. You are excellent!`;
      } else {
        return `${studentGrade.name}, your final grade is ${studentGrade.grade}. It was increased by ${points} points!`;
      }
    } else if (addOrMinus === 2) {
      studentGrade.grade -= points;
      return `${studentGrade.name}, your final grade is ${studentGrade.grade}. It went down by ${points} points.`;
    }
  }
}

// Person > Student
class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    // stretch
    this.grade = props.grade;
  }

  listsSubjects() {
    return `${this.name}'s favorite subjects are ${this.favSubjects.join(', ')}.`;
  }

  PRAssignments(subject) { // subject => str
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) { // subject => str
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }

  // stretch
  graduate() {
    if (this.grade > 70) {
      return `Congratulations ${this.name}, you passed with a grade of ${this.grade}. See Ms. Karen Zachery for graduation details.`;
    } else {
      return `Unfortunately ${this.name}, you got a failing grade of ${this.grade}. Keep working!`;
    }
  }
}



// Person > Instructor > Project Manager
class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) { // channel => str
    return `${this.name} announces to ${channel}, "@channel standy times!"`;
  }

  debugsCode(student, subject) { // student => obj, subject => str
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const dudley = new Person({
  'name': 'Dudley Dursley',
  'age': 11,
  'location': 'Privet Drive',
  'gender': 'M'
});

const vernon = new Person({
  'name': 'Vernon Dursley',
  'age': 11,
  'location': 'Privet Drive',
  'gender': 'M'
});

const dumbledore = new Instructor({
  'name': 'Albus Dumbledore',
  'age': 110,
  'location': 'Hogwarts',
  'gender': 'M',
  'specialty': 'Everything that\'s magic' ,
  'favLanguage': ['Assembly Language', 'C', 'Machine Language', 'COBOL'],
  'catchPhrase': 'It is our choices that show what we truly are, far more than our abilities.'
});

const snape = new Instructor({
  'name': 'Severus Snape',
  'age': 31,
  'location': 'Cokeworth',
  'gender': 'M',
  'specialty': 'Potions',
  'favLanguage': ['Parseltongue', 'JavaScript', 'Ruby', 'Lily'],
  'catchPhrase': 'Alwaysss...'
});

const hermione = new Student({
  'name': 'Hermione Granger',
  'age': 11,
  'location': 'Heathgate',
  'gender': 'F',
  'previousBackground': 'Muggle',
  'className': 'Gryffindor',
  'favSubjects': ['Arithmancy', 'Charms', 'Transfiguration']
});

const malfoy = new Student({
  'name': 'Draco Malfoy',
  'age': 11,
  'location': 'Wiltshire',
  'gender': 'M',
  'previousBackground': 'n/a',
  'className': 'Slytherin',
  'favSubjects': ['bullying Harry', 'Make fun of Harry', 'Dark Arts']
});

const hagrid = new ProjectManager({
  'name': 'Rubeus Hagrid',
  'age': 63,
  'location': 'outside of Hogwarts Castle',
  'gender': 'M',
  'specialty': 'Magical creatures',
  'favLanguage': ['C#', 'JavaScript', 'Ruby', 'Buckbeak'],
  'catchPhrase': 'Yer a weezerd Herrey!',
  'gradClassName': 'Gryffindor',
  'favInstructor': 'Dumbledore'
});

const filch = new ProjectManager({
  'name': 'Argus Filch',
  'age': 80,
  'location': 'Hogwarts Castle',
  'gender': 'M',
  'specialty': 'sniffing out',
  'favLanguage': ['C#', 'JavaScript', 'Ruby', 'Norris'],
  'catchPhrase': '>:(',
  'gradClassName': 'n/a',
  'favInstructor': 'Snape?'
});

console.log('base-class: Person')
console.log('Dudley\'s intro:', dudley.speak());

console.log('Vernon\'s intro:', vernon.speak());
console.log('==========================================================================\n');


console.log('Person > Instructor');
console.log('Instructor\'s name:', dumbledore.name);
console.log(`${dumbledore.name}'s favorite languages: ${dumbledore.favLanguage}`);
console.log(dumbledore.catchPhrase);
console.log('--------------------------------------------------------------------------');
console.log('Instructor\'s name:', snape.name);
console.log(`${snape.name}'s Specialty: ${snape.specialty}`);
console.log(`"After all this time?" and Snape said, "${snape.catchPhrase}"`);
console.log(snape.demo('potions'));
console.log(snape.grade(malfoy, 'potions'));
console.log('==========================================================================\n');


console.log('Person > Student');
console.log('Student\'s name:', hermione.name);
console.log('House:', hermione.className);
console.log(hermione.listsSubjects());
console.log(hermione.PRAssignments(hermione.favSubjects[0]));
console.log(hermione.sprintChallenge(hermione.favSubjects[1]));
console.log('--------------------------------------------------------------------------');
console.log('Student\'s name:', malfoy.name);
console.log('House:', malfoy.className);
console.log(malfoy.PRAssignments(malfoy.favSubjects[2]));
console.log('==========================================================================\n');


console.log('Person > Instructor > Project Manager');
console.log('Project Manager\'s name:', hagrid.name);
console.log(`${hagrid.name} was a ${hagrid.gradClassName} back then.`);
console.log(`${hagrid.name}'s favorite professor is ${hagrid.favInstructor}.`);
console.log(hagrid.standUp('WW14')); // WW - Witchcraft and Wizardry lol
console.log(hagrid.debugsCode(hermione, hagrid.favLanguage[0]));
console.log('--------------------------------------------------------------------------');
console.log('Project Manager\'s name:', filch.name);
console.log(filch.debugsCode(malfoy, filch.favLanguage[1]));
console.log('==========================================================================\n');

// STRETCH
const harry = new Student({
  'name': 'Harry Potter',
  'grade': 90
});

const neville = new Student({
  'name': 'Neville Longbottom',
  'grade': 51
});

console.log(`${harry.name}'s current grade: ${harry.grade}`);
console.log(`${dumbledore.name} graded ${harry.name}: "${snape.scoreGrade(harry)}"`);
console.log(harry.graduate());
console.log('--------------------------------------------------------------------------');
console.log(`${neville.name}'s current grade: ${neville.grade}`);
console.log(`${snape.name} graded ${neville.name}: "${snape.scoreGrade(neville)}"`);
console.log(neville.graduate());

console.log(`${neville.name}'s current grade: ${neville.grade}`);
console.log(`${snape.name} graded ${neville.name}: "${snape.scoreGrade(neville)}"`);
console.log(neville.graduate());
