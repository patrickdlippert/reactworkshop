// Also see https://github.com/patrickdlippert/reactworkshop for repository

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        // An alternate way to see if a student is already enrolled is shown below. Note that this technique
        // does not guarantee exclusive email addresses for students.
        //  if(this.students.includes(studentToRegister)) {

        // See if the student is already in the array of Bootcamp students by filtering and seeing if the
        // returned email string length is non-zero
        if(this.students.filter(s => s.email === studentToRegister.email).length) {
            console.log("This student is already registered");
        } else {
            // Add the student to the bootcamp
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}`);
        }
        return this.students;
    }
}