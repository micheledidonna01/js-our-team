const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

let container = document.querySelector('.container');
cardGenerator(container, teamMembers);
function cardGenerator(container, team) {

    for (let i = 0; i < team.length; i++) {
        container.innerHTML += `
<div class="card">
    <div class="images">
        <img src=${team[i].img} alt=${team[i].name}>
    </div>
    <div class="description">
        <h3 class="name">${team[i].name}</h3>
        <h4 class="role">${team[i].role}</h4>
        <p class="email">${team[i].email}</p>
    </div>
</div> `;
    }
}
/* 
<div class="images">
    <img src="" alt="">
</div>
<div class="description">
  <h3 class="name"></h3>
  <h4 class="role"></h4>
  <p class="email"></p>
</div> 
*/




/****************
BONUS
****************/
let form = document.getElementById('newCard');

form.addEventListener('submit', newCard);

function newCard(event) {
    event.preventDefault();
    let newCardArray = [];
    
    let name = document.getElementById('name').value;
    let role = document.getElementById('role').value;
    let email = document.getElementById('email').value;
    let src = document.getElementById('source').value;

    let obj = { name, role, email, src };
    teamMembers.push(obj);
    newCardArray.push(obj);
    console.log(teamMembers);
    cardGenerator(container, newCardArray);
    form.reset();
}