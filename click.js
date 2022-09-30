const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playto');

const p1={
    score:0,
    button:document.querySelector('#p1Btn'),
    display:document.querySelector('#p1Display')
}   
const p2={
    score:0,
    button:document.querySelector('#p2Btn'),
    display:document.querySelector('#p2Display')
}

let winningScore=3;

let isGameOver=false;

function scoreHandling (player,opponent) {
    if(!isGameOver){
        player.score+=1;
        player.display.innerHTML=player.score;
        }
        if(player.score===winningScore){
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
}

p1.button.addEventListener('click' , function() {
        scoreHandling(p1,p2);
})
p2.button.addEventListener('click' , function() {
    scoreHandling(p2,p1);
})

resetButton.addEventListener('click',reset)

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})

function reset(){
    isGameOver=false;
    for(let p of [p1,p2]){
        p.score=0;
        p.display.innerHTML=p.score;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
    }
}
