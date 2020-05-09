
const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
const op5=document.querySelector(".option5");
let questionIndex;
let index=0;
let myArray=[];
let score=0;
// questions and options and answers

const questions=[
    {
        q:'How many legs does a spider have?',
        options:['Three', 'Eight', 'Five', 'Six', 'Seven'],
        answer: 1
    },
    {
        q:'How many eggs does a cat lay in a day?',
        options:['Three', 'Four', 'Two', 'One', 'None of the above'],
        answer: 4
    },
    {
        q:'If you shoot at 10 birds sitting on a tree, how many will be left?',
        options:['Seven', 'Six', 'Zero', 'Two', 'I dont know'],
        answer: 2
    },
    {
        q:'Im not a preacher of love, i am a war, i am a fight, i am ...',
        options:['a runner', 'Indaboski Bahose', 'a chief', 'a begger', 'None of the above'],
        answer: 1
    },
    {
        q:'The name of the popular coffin dance song is ....',
        options:['Astronomia', 'Nobody', 'Can we kiss forever?', 'Sweet in the middle', 'Pawon'],
        answer: 0
    }
]

// set Questions and options and question number
totalQuestionSpan.innerHTML=questions.length;
function load() {
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    op5.innerHTML=questions[questionIndex].options[4];
    index++;

}
function check(element){
    if(element.id==questions[questionIndex].answer){
       element.classList.add("correct");
       updateAnswerTracker("correct");
       score++;
    }else{
        element.classList.add("wrong");
        updateAnswerTracker("wrong");
    }
    disabledOptions()
}
function disabledOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer){
            options[i].classList.add("correct");
        }
    }
}
function enableOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("You have not made a selection");
    }else{
        enableOptions();
        randomQuestion();
    }
}
function next(){
    validate();
}
function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    if (index==questions.length){
        quizOver();
    }
    else{
       if (myArray.length>0){
        for (let i = 0; i < myarray.length; i++) {
          if (myArray[i]==randomNumber){
              hitDuplicate=1;
              break;
          }
        }
        if(hitDuplicate==1){
            randomQuestion();
        }
        else {
            questionIndex=randomNumber;
            load();
        }
       } 
       if (myArray.length==0){
        questionIndex=randomNumber;
        load();
       }
    
    myArray.push(randomNumber);
    // console.log(questionIndex)
    
    }
}
function answerTracker(){
    for(let i=0; i<questions.length; i++){
        const div=document.createElement("div")
        answerTrackerContainer.appendChild(div);
    }
}
function updateAnswerTracker(className){
    answerTrackerContainer.children[index-1].classList.add(className)
}

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
}
function tryAgain(){
    window.location.reload();
}
window.onload=function(){
    randomQuestion()
    answerTracker()
}