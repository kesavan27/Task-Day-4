const resumeData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Example",
            year: 2020
        },
        {
            degree: "Master of Science in Software Engineering",
            institution: "University of Example",
            year: 2022
        }
    ],
    experience: [
        {
            jobTitle: "Software Developer",
            company: "Tech Solutions",
            duration: "2020 - 2021"
        },
        {
            jobTitle: "Senior Software Engineer",
            company: "Innovative Tech",
            duration: "2021 - Present"
        }
    ],
    skills: ["JavaScript", "React", "Node.js", "Python"]
};

// For loop
for (let i = 0; i < resumeData.education.length; i++) {
    console.log(resumeData.education[i]);
}

// For...in loop
for (let key in resumeData) {
    console.log(`${key}:`, resumeData[key]);
}

// For...of loop
for (const experience of resumeData.experience) {
    console.log(experience);
}

// forEach loop
resumeData.skills.forEach(skill => {
    console.log(skill);
});
