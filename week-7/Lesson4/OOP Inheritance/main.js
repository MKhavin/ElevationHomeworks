// SpotCheck 1
class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }

  //method overriding!
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);

    this.salary = salary;
    this.name = "Professor " + name;
    this.courses = {}; // SpotCheck 3
  }

  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade);
  }

  //   SpotCheck 3
  addCourse(course) {
    const courseCount = course in this.courses ? this.courses[course] + 1 : 1;
    this.courses[course] = courseCount;
  }
}

const s1 = new Student("Ronda", 2017);
const t1 = new Teacher("Cassandra", 2002, 40000);

t1.giveGrade(s1, "Algebra II", 82);
const firstGrade = s1.grades[0];

console.log(
  `${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`
);
//above should print "Ronda received an 82 in Algebra II"

// SpotCheck 2
const p1 = new Person("Anon", 1999);

s1 instanceof Person;
t1 instanceof Teacher;
t1 instanceof Person;
s1 instanceof Teacher;
t1 instanceof Student;
p1 instanceof Person;
p1 instanceof Student;
p1 instanceof Teacher;

// s1 instanceof p1;

//
console.log(t1.name);

// SpotCheck 3
const t2 = new Teacher("Cassandra", 2002, 40000);
t2.addCourse("Algebra II");
t2.addCourse("Algebra II");
t2.addCourse("Trigonometry");
console.log(t2.courses); //should print {Algebra II: 2, Trigonometry: 1}

