let num1 = Math.round(Math.random()*10);
let num2 = Math.round(Math.random()*10);

let questEl = document.getElementById('question');
questEl.innerText = `what is the multiplication of ${num1} and ${num2} ?`

let correctAns = num1*num2;

let formEl = document.getElementById('form');
let userEl = document.getElementById('ans');


let buttonEl = document.getElementById('btn');
var scoreEl = document.getElementById('score');
var score = JSON.parse(localStorage.getItem('score'))


formEl.addEventListener('submit', ()=>{
    if(userEl.value){
        let userAns = +userEl.value
        if(userAns === correctAns){
            score++
            updatelocalStorage();
        }
        else if(userAns != correctAns){
            
            score--
            updatelocalStorage();
        }
    }

})

function updatelocalStorage (){
    localStorage.setItem("score", JSON.stringify(score))
}
scoreEl.innerText = `score: ${score}`

restartEl = document.getElementById('btnr');
restartEl.addEventListener('click', () =>{
    scoreEl.innerText = `score: ${score = 0}`
})

