const APIURL='https://api.github.com/users/';
const main=document.getElementById("main");
const form=document.getElementById("form");
const userid=document.getElementById("userid");
//getinfo("prasoonsoni");

async function getinfo(user){
    const full=APIURL+user;
    const resp=await fetch(full);
    const respdata= await resp.json();
    createusercard(respdata)
    getrepos(user);

}
async function getrepos(username){
    const full=APIURL+username+'/repos';
    const resp=await fetch(full);
    const respdata= await resp.json();
    addReposToCard(respdata);
}
function addReposToCard(repos){
    const reposel=document.getElementById("repos");
    console.log(repos);
    repos.slice(0,9).forEach(repo=>{
        const repoel=document.createElement('a');
        repoel.classList.add('repo');
        repoel.href=repo.html_url;
        
        repoel.innerText=repo.name;
        repoel.target="_blank";
        reposel.appendChild(repoel);

    });
}
function createusercard(user){
    //const card=document.createElement('div');
    //card.classList.add('card');
    const cardhtml=`
    <div class="card">
    <div class="imgcont">
    <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
    </div>
    <div class="name">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>

    <ul class="info">
    <li>${user.followers}<strong>Followers</strong></li>
    <li>${user.following}<strong>Following</strong></li>
    <li>${user.public_repos}<strong>Repo</strong></li>
    </ul>
    <h4>Repos</h4>
    <div class="repos" id="repos"></div>
    </div>
    </div>
    `
    main.innerHTML=cardhtml;


}
form.addEventListener('submit',e=>{
    e.preventDefault();
    const user=userid.value;
    console.log(user);

    if(user){
        getinfo(user);
        userid.value=
        "";
    }


})
