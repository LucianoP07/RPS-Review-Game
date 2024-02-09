//Global Variables
let playerWin = 0;
let ComputerWin = 0;

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Rock Button
document.getElementById("Rock").addEventListener("click", RockStuff);
function RockStuff() {
  document.getElementById("RealPlayer").src = "images/rock.png";
  document.getElementById("html").style.background = "#F44868";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Paper Button
document.getElementById("Paper").addEventListener("click", PaperStuff);
function PaperStuff() {
  document.getElementById("RealPlayer").src = "images/paper.png";
  document.getElementById("html").style.background = "#F8E342";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Scissors Button
document.getElementById("Scissors").addEventListener("click", ScissorsStuff);
function ScissorsStuff() {
  document.getElementById("RealPlayer").src = "images/scissors.png";
  document.getElementById("html").style.background = "#75E3F8";
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Computer Pick (Rock,Paper,Scissors)
//Rock
document.getElementById("Rock").addEventListener("click", RandomRPS1);
function RandomRPS1() {
  let RandRockNum = Math.floor(Math.random() * 3 + 1);
  let WhoWins = RandRockNum;

  if (RandRockNum == 1) {
    document.getElementById("ComputerPick").src = "images/rock.png";
  } else if (RandRockNum == 2) {
    document.getElementById("ComputerPick").src = "images/paper.png";
  } else {
    document.getElementById("ComputerPick").src = "images/scissors.png";
  }
  if (WhoWins == 1) {
    document.getElementById("outcome").innerHTML = "Tie";
  }
  if (WhoWins == 2) {
    ComputerWin = ComputerWin + 1;
    document.getElementById("outcome").innerHTML = "Computer Wins!";
    document.getElementById("ComputerScore").innerHTML = ComputerWin;
  } else if (WhoWins == 3) {
    playerWin = playerWin + 1;
    document.getElementById("PlayerScore").innerHTML = playerWin;
    document.getElementById("outcome").innerHTML = "Player Wins!";
  }
  console.log(RandRockNum);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Paper
document.getElementById("Paper").addEventListener("click", RandomRPS2);
function RandomRPS2() {
  let RandRockNum2 = Math.floor(Math.random() * 3 + 1);
  let WhoWins2 = RandRockNum2;

  if (RandRockNum2 == 1) {
    document.getElementById("ComputerPick").src = "images/rock.png";
  } else if (RandRockNum2 == 2) {
    document.getElementById("ComputerPick").src = "images/paper.png";
  } else {
    document.getElementById("ComputerPick").src = "images/scissors.png";
  }
  if (WhoWins2 == 2) {
    document.getElementById("outcome").innerHTML = "Tie";
  }
  if (WhoWins2 == 1) {
    playerWin = playerWin + 1;
    document.getElementById("outcome").innerHTML = "Player Wins!";
    document.getElementById("PlayerScore").innerHTML = playerWin;
  } else if (WhoWins2 == 3) {
    ComputerWin = ComputerWin + 1;
    document.getElementById("outcome").innerHTML = "Computer Wins!";
    document.getElementById("ComputerScore").innerHTML = ComputerWin;
  }
  console.log(RandRockNum2);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Scissors
document.getElementById("Scissors").addEventListener("click", RandomRPS3);
function RandomRPS3() {
  let RandRockNum3 = Math.floor(Math.random() * 3 + 1);
  let WhoWins3 = RandRockNum3;

  if (RandRockNum3 == 1) {
    document.getElementById("ComputerPick").src = "images/rock.png";
  } else if (RandRockNum3 == 2) {
    document.getElementById("ComputerPick").src = "images/paper.png";
  } else {
    document.getElementById("ComputerPick").src = "images/scissors.png";
  }
  if (WhoWins3 == 3) {
    document.getElementById("outcome").innerHTML = "Tie";
  }
  if (WhoWins3 == 1) {
    ComputerWin = ComputerWin + 1;
    document.getElementById("outcome").innerHTML = "Computer Wins!";
    document.getElementById("ComputerScore").innerHTML = ComputerWin;
  } else if (WhoWins3 == 2) {
    playerWin = playerWin + 1;
    document.getElementById("outcome").innerHTML = "Player Wins!";
    document.getElementById("PlayerScore").innerHTML = playerWin;
  }
  console.log(RandRockNum3);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
