//Globals-No window!!
//__dirname-path to current directory
//__filename -file name
//require--function to use modules
//module -- info about current module
//process -info about env where the program is being executed


//Modules
const sayhi=(name)=>{
    console.log(`hello ${name}`);
}
const name=require('./names');
console.log(name);
module.exports=sayhi;
