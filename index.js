const imgs = document.querySelectorAll("img");
const result = document.querySelector(".result");
const userScoreDiv = document.querySelector(".score");
const compScoreDiv = document.querySelector(".cscore");
let userScore = 0;
let compScore = 0;
// const 
imgs.forEach((i) =>{
    i.addEventListener("click",()=>{
        const compVal = Math.floor(Math.random() * 3);
        const userVal= i.getAttribute("id");
        if(compVal === userVal){
            //draw
            result.innerText = "Match Draw";

        }
       else if(compVal===2&& userVal === 0) {
            //user win
            result.innerText = "You won";
            userScore++;
            userScoreDiv.innerText = userScore;

        }
        else if(compVal ===0&& userVal==2){
            //comp win
            result.innerText = "Computer won";
            compScore++;
            compScoreDiv.innerText = compScore;
        }
        else if(compVal>userVal){
            //comp win
            result.innerText = "Computer won";
            compScore++;
            compScoreDiv.innerText = compScore;

        }
        else{
            //user win 
            result.innerText = "You won";
            userScore++;
            userScoreDiv.innerText = userScore;
        }



    })
})