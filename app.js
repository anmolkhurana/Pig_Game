

//////////// GAME RULES

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore;
var dicePrev;
var dice;
var gamePlay; // to quit the game once winner is achieved



init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlay){
    
    
    //1. We need a random number

    dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Show the results
    
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    //for changing the image each time a dice is rolled
    diceDOM.src = 'dice-' + dice + '.png';
    
    // Creating a variable to store previous results
    dicePrev = dice;
        
    
        
        
        
    //3. Update the dice and add the results untill and unless number 1 comes on the dice
    
    if(dice !== 1){
    
        // Keep on Adding scores to the round Scores
        roundScore = roundScore + dice;
        
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
    
    else
    {
        
        nextPlayer();    
    }
        
        
}

});



document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlay)
        {
                
            
    //1. Add the current score to the global score
    
    scores[activePlayer] = scores[activePlayer] + roundScore; 
    
    

    //2.Update the web page 
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input;
    var winScore = document.getElementById('input_id').value;
            
    if(winScore)
       {
        input = winScore;
       }
    else{
            input=100;
       }    
            
            
    //check if the player won the game
    if(scores[activePlayer] >= input)
        {
            document.querySelector('#name-' + activePlayer).textContent='Winner';
            document.querySelector('.dice').style.display ='none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            gamePlay = false;
        }
    
    else if(dicePrev===6 && dice===6)
    {
        
        roll6twotimes();
        
    }
            
    else{
        
        //next player
        nextPlayer();
    
    }         
        }
    
   
    
});



document.querySelector('.btn-new').addEventListener('click',init);


function init()

{
    
    scores =[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlay=true;
    
    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
    
    
    
    
}


function nextPlayer()
{
        
        if(activePlayer===1)
            {
                activePlayer=0;        
            }
        else
        {
            activePlayer=1;
        }
        
        roundScore=0;
        
    
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // if the class has active then it will add it else it will remove it
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
                                    //Or
    
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-0-panel').classList.add('active');
        
        
        //to hide the dice when player changes
        document.querySelector('.dice').style.display ='none';
        



}



function roll6twotimes()
{
                roundScore = 0;
                
                document.getElementById('score-'+ activePlayer).textContent = '0';
                document.getElementById('current-'+ activePlayer).textContent = '0';
                
                nextPlayer();
                
                
            
}












