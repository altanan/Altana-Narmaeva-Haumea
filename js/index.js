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

    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    messageForm.reset();

    //be able to message the messenger
    var newMessage = document.createElement('li');

    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' +  usersName + '</a>' +
                           '<span>' + usersMessage + '</span>';

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