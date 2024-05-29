document.addEventListener("DOMContentLoaded", function() {
    //current year footer
    var today = new Date();
    var thisYear = today.getFullYear();
    document.getElementById("copyright").textContent = " Altana " + thisYear;
});

//list skills
var skills = ["Javascript", "HTML", "CSS"];

var skillsSection = document.getElementById('skills');

var skillsList = document.querySelector('#skills ul');
console.log("skillsList:", skillsList); 

for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');
    
    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

//send messages
var messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var usersName = event.target.usersName.value;
    var usersEmail = event.target.usersEmail.value;
    var usersMessage = event.target.usersMessage.value;

    //fill in form to be able to message
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    messageForm.reset();

    //be able to message the messenger
    var newMessage = document.createElement('li');

    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a>' +
                           '<span>: ' + usersMessage + '</span>'; 
    //remove message
    var removeButton = document.createElement('button');
    
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    
    removeButton.addEventListener('click', function() {
        var entry = removeButton.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    
    messageList.appendChild(newMessage);
});

var messageSection = document.querySelector('#messages');
var messageList = messageSection.querySelector('ul');

//takes github profile
const GITHUB_USERNAME = 'altanan';
var projectSection = document.getElementById('projects');
var projectList = projectSection.querySelector('ul');
 
//displays repos from github profile
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const repositories = data.map(repo => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url
        }));
        console.log(repositories);

        repositories.forEach(repo => {
            var projectItem = document.createElement('li');
            projectItem.innerHTML = `<a href="${repo.url}" target="_blank">${repo.name}</a>`;
            projectList.appendChild(projectItem);
        });
    })
    .catch(error => {
        //error message just in case
        console.error('There was a problem with the fetch operation:', error);
    });