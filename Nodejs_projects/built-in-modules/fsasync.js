const fs=require("fs");
let first;
let second;
fs.readFile('./content/first.txt',"utf-8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
 first=result;
 fs.readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
 second=result;
 fs.writeFile('./content/result-async.txt',`here is the result : ${first},${second}`,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});
})
})


    