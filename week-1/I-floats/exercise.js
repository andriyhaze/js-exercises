var students = "Percentage of students:";
var mentors = "Percentage of mentors:";
var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfMentors + numberOfStudents;

var percentageStudents = Math.round((numberOfStudents / total) * 100);
var percentageMentors = Math.round((numberOfMentors / total) * 100);

console.log(students);
console.log(percentageStudents + " %");
console.log(mentors);
console.log(percentageMentors + " %");
