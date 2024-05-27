var today = new Date();

console.log(today);

var thisYear = today.getFullYear();

var skills = ["Javascript", "HTML", "CSS"];

var skillsSection = document.getElementById('skills');

var skillsList = document.querySelector('#skills ul');
console.log("skillsList:", skillsList); 

for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');
    
    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}
