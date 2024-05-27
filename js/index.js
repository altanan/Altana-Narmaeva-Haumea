var today = new Date();

console.log*today;

var thisYear = getFullYear;

var footer = document.querySelector('footer');

var copyright = document.createElement('p');

copyright.innerHTML = `&copy; Your Name ${thisYear}`;

footer.appendChild(copyright);

var skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

var skillsSection = document.getElementById('skills-section');

var skillsList = skillsSection.querySelector('ul');

for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');
     
    skill.innerText = skills[i];
    
    skillsList.appendChild(skill);
}
