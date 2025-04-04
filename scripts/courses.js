const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the notion of classes and objects.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

let displayedCourses = [...courses];  // Store courses being displayed

// Function to dynamically render the course cards
function renderCourses(coursesToDisplay) {
    const courseContainer = document.getElementById('course-cards-container');
    courseContainer.innerHTML = '';  // Clear previous content

    let totalCredits = 0;
    coursesToDisplay.forEach(course => {
        totalCredits += course.credits;

        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Mark completed courses differently
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Subject:</strong> ${course.subject}</p>
            <p><strong>Description:</strong> ${course.description}</p>
        `;

        courseContainer.appendChild(courseCard);
    });

    // Update total credits
    document.getElementById('total-credits').textContent = totalCredits;
}

// Function to filter courses based on subject
function filterCourses(subject) {
    if (subject === 'all') {
        displayedCourses = [...courses];
    } else {
        displayedCourses = courses.filter(course => course.subject === subject);
    }
    renderCourses(displayedCourses);
}

// Initial render of all courses
renderCourses(displayedCourses);
