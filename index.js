const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students = [
    { name: 'larry' },
    { name: 'kevin' },
    { name: 'john' },
    { name: 'arnold' }
];

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

function askStudentName() {
    rl.question("Enter student's name or 'done' to finish: ", (name) => {
        if (name.toUpperCase() === 'DONE') {
            console.log("Student Grades:");
            students.forEach(student => {
                console.log(`Name: ${student.name}, Mark: ${student.mark || 'N/A'}, Grade: ${student.grade || 'N/A'}`);
            });
            rl.close(); // Close the readline interface
        } else {
            askStudentMark(name);
        }
    });
}

function askStudentMark(name) {
    rl.question(`Enter mark for ${name} (0-100): `, (input) => {
        let mark = parseInt(input, 10);
        while (isNaN(mark) || mark < 0 || mark > 100) {
            console.log("Invalid mark! Please enter a number between 0 and 100.");
            rl.question(`Enter the mark for ${name} (0-100): `, (input) => {
                mark = parseInt(input, 10);
                if (!isNaN(mark) && mark >= 0 && mark <= 100) {
                    const grade = getGrade(mark);
                    students.push({ name, mark, grade });
                    askStudentName(); // Continue to ask for the next student's name
                }
            });
        }
        // Only push and continue if the mark is valid
        const grade = getGrade(mark);
        students.push({ name, mark, grade });
        askStudentName(); // Go back to asking for the next student name
    });
}

// Start the program
askStudentName();
