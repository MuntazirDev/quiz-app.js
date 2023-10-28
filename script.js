let quizData=[
    {
        question:"Which language tuns in a web browser?",
        a:"Java",
        b:"C",
        c:"Pyyhon",
        d:"JfvaScript",
        correct:"d",
    },
    {
        question:"What does CSS stand for?",
        a:"Centrsl Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple",
        d:"Cars SUVs Sailboats",
        correct:"b",
    },
    {
        question:"What does HTML stand for ?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Helicopters Terminals Motorboats Lamborginis",
        correct:"a",
    },
    {
        question:"What year was JavaScript Launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b",
    },
];
console.log(quizData);


let quiz=document.querySelector('#quiz');
let questionEL=document.querySelector('#question');
let answerELs=document.querySelectorAll('.answer');
let a_text=document.querySelector('#a_text');
let b_text=document.querySelector('#b_text');
let c_text=document.querySelector('#c_text');
let d_text=document.querySelector('#d_text');
let submitBtn=document.querySelector('#submit');

let score=0;
let current_index=0;

print();

submitBtn.addEventListener('click',function(){
   let answer =getAnswer();
   if(answer==quizData[current_index].correct){
    score++;
    console.log(score);
   }
   current_index++;
   if(current_index<quizData.length){
    print();
    console.log('cccc= ',current_index);
    if(current_index==quizData.length-1){
        submitBtn.textContent='Submit';
       submitBtn.classList.add('colorHover');
        
        
    }
   }else{
    quiz.innerHTML=
    `<h2> You answerd ${score}/${quizData.length} questions correctly </h2>
    <button onclick="location.reload()" class="colorend">Reload</button>`;
   }

});




function print(){
    deselectAnswers();
    questionEL.textContent=quizData[current_index].question;
    a_text.textContent=quizData[current_index].a;
    b_text.textContent=quizData[current_index].b;
    c_text.textContent=quizData[current_index].c;
    d_text.textContent=quizData[current_index].d;

}
function deselectAnswers(){
    answerELs.forEach(answerEL =>answerEL.checked=false)
}

function getAnswer(){
    let answer;
    answerELs.forEach(answerS =>{
        if(answerS.checked){
           answer=answerS.id;
        }

    })
    return answer;
}


