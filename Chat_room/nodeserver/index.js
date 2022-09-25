const { Socket } = require("socket.io");

//Node server which will handle socket io connections
const io=require("socket.io")(80, {
    cors: {
      origin: '*',
    }
  });;
const users={};
io.on('connection',Socket=>{
    Socket.on('new-user-joined',name1=>{
        console.log("New User",name1);
        users[Socket.id]=name1;
        console.log(Socket.id);
        Socket.broadcast.emit('user-joined',name1);
    });
   Socket.on("send",message=>{
    Socket.broadcast.emit("receive",{message:message,name1:users[Socket.id]})
    //console.log(name1);
    console.log(Socket.id);
   }) ;

})