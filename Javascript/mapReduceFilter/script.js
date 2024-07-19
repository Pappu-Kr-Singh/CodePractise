// console.log("Hello ");

students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

/// +++++++++++++++++++++++++++  MAP +++++++++++++++++++++++++++++++++

// const names = students.map((student, index, arr) => {
//   console.log(
//     `The name of the student is ${student.name.toUpperCase()} and the index is ${index}`
//   );
//   // console.log(arr);
// });

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// const rollNo = students.map((stu) => stu.rollNumber);
// console.log(rollNo);

/// +++++++++++++++++++++++++++  Filter +++++++++++++++++++++++++++++++++

// const marksOver60 = students.filter((stu) => {
//   return stu.marks > 60;
// });

// console.log(marksOver60);

// const marksLessThan60 = students.filter((stu) => stu.marks < 60);

// console.log(marksLessThan60);

// +++++++++++++++++++++++++++++ Reduce +++++++++++++++++++++++++++++++++
// Total Marks of All Students:

// const totalMarks = students.reduce((acc, student) => {
//   return acc + student.marks;
// }, 0);

// console.log(totalMarks);

// More than 60 marks and rollNumber greater than 15

const result = students.filter(
  (student) => student.marks > 60 && student.rollNumber > 15
);
console.log(result);
