const students = [];

while (true) {
    const name = readline("Enter student's name or 'done' to finish:");
    if (name.toUpperCase() === 'DONE') break;

    let mark = parseInt(prompt(`Enter mark for ${name} (0-100):`), 10);
    while (isNaN(mark) || mark < 0 || mark > 100) {
        console.log("Invalid mark! Please enter a number between 0 and 100.");
        mark = parseInt(prompt(`Enter the mark for ${name} (0-100):`), 10);
    }
    let gradeBand = Math.floor(mark / 10);
    let grade;
    switch (gradeBand) {
        case 10:
        case 9:
        case 8:
            grade = 'A';
            break;
        case 7:
        case 6:
            grade = 'B';
            break;
        case 5:
            grade = 'C';
            break;
        case 4:
            grade = 'D';
            break;
        default:
            grade = 'E';
    }
    students.push({ name, mark, grade });
}
console.log("Student Grades:");
students.forEach(student => {
    console.log(`Name: ${student.name}, Mark: ${student.mark}, Grade: ${student.grade}`);
});
