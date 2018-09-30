//Main Game controller
function runGame()
{
    var dollars = document.forms["luckySevens"]["dollars"].value;
    
    //Validate input
   if(dollars <= 0 || isNaN(dollars)){
       alert("Must enter a dollar amount.");
       
       document.forms["luckySevens"]["dollars"].parentElement.classList.add("text-danger");
       document.forms["luckySevens"]["dollars"].classList.add("is-invalid");
       document.forms["luckySevens"]["dollars"].focus();
         
       return false;
   }else {
       document.forms["luckySevens"]["dollars"].parentElement.classList.remove("text-danger");
       document.forms["luckySevens"]["dollars"].classList.remove("is-invalid");
   }
    
    //Start game
    playGame(dollars);
    
    //Give player ability to play again
    document.getElementById("resultsTable").className = "table table-bordered ";
    document.getElementById("resultsHeading").className = "text-center";
    document.getElementById("playButton").type = "reset";
    document.getElementById("playButton").value = "Play Again";

    return false;
}

//Dice Generator
function rollDice ()
{
    
    return Math.floor(Math.random()*6)+1;

}

//Game Round
function playGame(dollars) {
//Initialize variables to track data
    var startingBet = dollars;
    var totalRolls = 1;
    var maxMoney = dollars;
    var maxRolls = totalRolls;
//Play game until hitting zero
    for (var dice1,dice2,i=1;dollars > 0;i++,totalRolls++)
        {
            dice1 = rollDice();
            dice2 = rollDice();
            //Log dice rolls and roll number
            console.log("dice " + (dice1 + dice2));
            console.log("roll # " + i)

            if(dice1+dice2 == 7){
                dollars += 4;
            }else
                {
                    dollars -= 1;
                }

            //Tracks the most money made and at what number of rolls
            if(dollars > maxMoney)
                {
                    maxMoney = dollars;
                    maxRolls = totalRolls;
                }
            
            //Log dollars left
            console.log(dollars);
        }
    //Subtract one to get actual number of rolls
    totalRolls--;
    //Call function to display results
    displayResults(startingBet,totalRolls,maxMoney,maxRolls);
}


//Function to display results
function displayResults (startingBet,totalRolls,maxMoney,maxRolls)
{
    console.log("starting bet " + startingBet )
    document.getElementById("startingBet").innerHTML = startingBet;
    
    console.log("total rolls " + totalRolls );
    document.getElementById("totalRolls").innerHTML = totalRolls;
    
    console.log("max money " + maxMoney);
    document.getElementById("maxMoney").innerHTML = maxMoney;
    
    console.log("max rolls " + maxRolls);
    document.getElementById("maxRolls").innerHTML = maxRolls;
    
    
    

    
}

//Resets Game
function resetGame()
{
    
    document.getElementById("resultsTable").className = "d-none";
    document.getElementById("resultsHeading").className = "d-none";
    document.getElementsByName("dollasr").value = "";
    document.getElementById("playButton").value = "Play";
    document.getElementById("playButton").type = "submit";
    
}
