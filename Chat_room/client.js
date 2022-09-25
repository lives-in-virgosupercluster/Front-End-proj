const socket=io("http://localhost:80");
const form=document.getElementById('send-container');
const messageInput=document.getElementById("messageInp");
const messagecontainer=document.querySelector(".container");
const append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);


}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append(`You:${message}`,'right');
    socket.emit("send",message);
    messageInput.value='';
})
const name1=prompt("Enter your name to join");
socket.emit('new-user-joined',name1);
socket.on("user-joined",data=>{
    append(`${data} joined the chat`,'right');

})
socket.on("receive",data=>{
    console.log(data);
   append(`${data.name1}:${data.message}`,'left');
})