const students = [];

while (true) {
    const name = promp("Enter student's name or 'done' to finish:");
    if (name.toUpperCase() === 'DONE') break;

    let mark = parseInt(prompt(`Enter mark for ${name} (0-100):`), 10);
    while (isNaN(mark) || mark < 0 || mark > 100) {
        console.log("Invalid mark! Please enter a number between 0 and 100.");
        mark = parseInt(prompt(`Enter the mark for ${name} (0-100):`), 10);
    }

    function getGrade(mark) {
        const gradeBand = Math.floor(mark / 10);
        switch (true) {
            case gradeBand >= 9:
                return 'A';
            case gradeBand >= 7:
                return 'B';
            case gradeBand === 6:
                return 'C';
            case gradeBand === 5:
                return 'D';
            default:
                return 'E';
        }
    }

    const grade = getGrade(mark);
    students.push({ name, mark, grade });
}

console.log("Student Grades:");
students.forEach(student => {
    console.log(`Name: ${student.name}, Mark: ${student.mark}, Grade: ${student.grade}`);
});
gradeBrand(68)