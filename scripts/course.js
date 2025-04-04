const courses = [
    { name: "All", },
    { name: "CSE", },
    { name: "WDD", },
];

const courseContainer = document.getElementById("course-cards-container");

courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    
    if (course.completed) {
        courseCard.classList.add("completed");
    }

    courseCard.innerHTML = `
        <h3>${course.name}</h3>
        <p>Credits: ${course.credits}</p>
    `;

    courseContainer.appendChild(courseCard);
});
