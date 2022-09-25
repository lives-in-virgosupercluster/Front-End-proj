const QuizData=[
    {
        question:"How Old is Harsh",
        a:"18",
        b:"19",
        c:"20",
        d:"22",
        answer:"c"
    },
    {
        question:"What is the most Popular Programming Language",
        a:"JavaScript",
        b:"Python",
        c:"C",
        d:"Java",
        answer:"a" 
    },
    {
        question:"What is the Prime minister of India",
        a:"Harsh",
        b:"Dhanvi",
        c:"Priyata",
        d:"Dictator",
        answer:"d" 
    },{
        question:"What is The Current Year",
        a:"2021",
        b:"2022",
        c:"2023",
        d:"2024",
        answer:"b"
    }
    ,{
        question:"What Year JavaScript Launched",
        a:"2020",
        b:"2022",
        c:"2023",
        d:"None of the above",
        answer:"d"
    }
]
let questionel=document.getElementById("question");
const a_text=document.getElementById("a_text");
const quiz=document.getElementById("quiz");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
let currquestion=0;
let score=0;
const submitbtn=document.getElementById("sub")
loadQuiz();
function loadQuiz(){
    deselect();
    const currentquizdata=QuizData[currquestion];
    questionel.innerHTML=currentquizdata.question;
    a_text.innerHTML=currentquizdata.a;
    b_text.innerHTML=currentquizdata.b;
    c_text.innerHTML=currentquizdata.c;
    d_text.innerHTML=currentquizdata.d;
   // currquestion++;

}
let answer=undefined;
function getselected(){
    const answers=document.querySelectorAll(".answer");
    console.log(answers);
    answers.forEach((answers)=>{
        if(answers.checked){
            console.log("answer is checked");
            console.log(answers.id);
            answer=answers.id;
            return answer;
            
        }

    })
    return answer;
}
function deselect(){
    const answers=document.querySelectorAll(".answer");
    answers.forEach((answers)=>{
        if(answers.checked){
            answers.checked=false;
        }
    })
}
submitbtn.addEventListener("click",()=>{
   let answereq= getselected()
   if(answereq==undefined){
    alert("please select an option");
   }
   console.log(answereq);
   if(answereq==QuizData[currquestion].answer){
    //currquestion++;
    score++;
   }
   
   currquestion++;
    if(currquestion<QuizData.length){
        loadQuiz();


    }
    else{
        //To do show results
        quiz.innerHTML=`<h2>Your Score is ${score}</h2><button Onclick="location.reload()" id="newbtn">Retry?</button>`
        //alert("You Finished the Quiz"+" Your score is-- "+score);
    }
    //loadQuiz();
})

