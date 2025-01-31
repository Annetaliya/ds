//Create a grades object that stores a set of student grades in an object.
//  Provide a function for adding a grade

 //and a function for displaying the student’s grade average.

const studentsGrade = {
    studentMarks: [],
    addMarks(grade) {
        this.studentMarks.push(grade)
        return this.studentMarks
    },
    getAverage () {
        let sum = 0;
        for (let i = 0; i < this.studentMarks.length; i++) {
            sum += this.studentMarks[i];
        }
        const averageMarks = sum / this.studentMarks.length;
        return averageMarks;
    },
}



console.log(studentsGrade.addMarks(45));
console.log(studentsGrade.addMarks(60));
console.log(studentsGrade.addMarks(76));
console.log(studentsGrade.getAverage())
