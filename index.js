// alert("More Features yet to come")
let QuizQuestions=[
    {Q:"What is the capital of Odisha?",A:"Bhubaneswar",B:"Cuttack",C:"Rourkela",D:"Puri",answer:"ans1"},

    {Q:"What is the capital of Gujrat?",A:"Porbander",B:"Gandhinagar",C:"Ahmedabad",D:"Surat",answer:"ans3"},

    {Q:"What is the capital of Maharastra?",A:"Pune",B:"Mumbai",C:"Amravati",D:"Nagpur",answer:"ans2"}
]

let question= document.querySelector('.question');
let opt1=document.querySelector('#opt1');
let opt2=document.querySelector('#opt2');
let opt3=document.querySelector('#opt3');
let opt4=document.querySelector('#opt4');

let answer = document.querySelectorAll('.answer');

let submit=document.querySelector('.submit')

let showScore = document.querySelector('.score')

let count=0;

let score=0;

const loadQuestions =()=>
{
    const questionList = QuizQuestions[count]
    question.innerText=questionList.Q
    
opt1.innerText= questionList.A
opt2.innerText= questionList.B
opt3.innerText= questionList.C
opt4.innerText= questionList.D

    
}

loadQuestions()

const getAnswer=()=>
{ 
    let answerId;
    answer.forEach((currAnswer)=>
    {
        if(currAnswer.checked)
        {
            answerId = currAnswer.id;
        }
    })


return answerId
  
}


submit.addEventListener('click',()=>
{

   const checkedAnswer=getAnswer();

if(checkedAnswer==QuizQuestions[count].answer)
{
    score++
}

count++

if(count<QuizQuestions.length)
{
    loadQuestions();
}
else
{
    showScore.innerHTML =`
    <h3> Your Score is ${score} </h3>
    <button class='submit' onclick="window.location.reload()">Play Again </button>
    
    `;

    submit.style.display='none';


    
}

})





