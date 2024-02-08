let kartiknumber = Math.trunc(Math.random()*20)+1;
let highscore = 0;

// console.log(document.querySelector('.guess').value);
let score = 20;
document.querySelector('.check').addEventListener('click', function(){
    // console.log(document.querySelector('.guess').value);
    // console.log(document.querySelector('.message').textContent = 'correct number');
    const c = Number(document.querySelector('.guess').value);
    console.log(c);

    if(!c){
        document.querySelector('.message').textContent = 'No Number';
    }
    else if(c == kartiknumber){
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('.highscore').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60B347'
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = kartiknumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(c > kartiknumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Number is too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(c < kartiknumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Number is too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
     kartiknumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.number').textContent = kartiknumber;
})
