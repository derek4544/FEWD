var humanscore=0,botscore=0,outcome;

document.getElementById("rock").onclick=fightWithRock;
document.getElementById("paper").onclick=fightWithPaper;
document.getElementById("scissors").onclick=fightWithScissors;

function fightWithRock(){
	var randoWepo=botsWeapon();
	if(randoWepo == "rock"){
		outcome="you tied";
	} else if(randoWepo == "scissors") {
		outcome="you won";
		humanscore+=1;
		document.getElementById("humanScore").textContent=humanscore;
	} else {
		outcome="you lose";
		botscore+=1;
		document.getElementById("computerScore").textContent=botscore;
	}
}

function fightWithPaper(){
	var randoWepo=botsWeapon();
	if(randoWepo == "paper"){
		outcome="you tied";
	} else if(randoWepo == "rock") {
		outcome="you won";
		humanscore+=1;
		document.getElementById("humanScore").textContent=humanscore;
	} else {
		outcome="you lose";
		botscore+=1;
		document.getElementById("computerScore").textContent=botscore;
	}
}

function fightWithScissors(){
	var randoWepo=botsWeapon();
	if(randoWepo == "scissors"){
		outcome="you tied";
	} else if(randoWepo == "paper") {
		outcome="you won";
		humanscore+=1;
		document.getElementById("humanScore").textContent=humanscore;
	} else {
		outcome="you lose";
		botscore+=1;
		document.getElementById("computerScore").textContent=botscore;
	}
}

function botsWeapon(){
	var randoWepoNum=Math.random(),randoWepo;
	if(randoWepoNum<.3333333){
		randoWepo="rock";
	} if(randoWepoNum<.67){
		randoWepo="paper";
	} 
	else {
		randoWepo="scissors"
	}
	return randoWepo;
}

