var movecount = 0;
var matchcount = 0;
var firstcard = "";
var secondcard = "";

//randomize cards
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var cardArray = ['King','King','Queen','Queen'];
cardArray = shuffle(cardArray);


$("#card1").on("click",function(){

  if ($("#card1").attr('src') != "images/back-of-card.png") {return}

   movecount = movecount + 1;
  if (movecount % 2 == 1 & matchcount == 0) {
    hidecards();
  }
  url = "images/" + cardArray[0] + ".png";
 
  $("#card1").attr("src", url);


  if (movecount % 2 == 1) {
  	firstcard = cardArray[0];
  }
  else {
  	secondcard = cardArray[0];
  	if (firstcard == secondcard) {
  		matchcount = matchcount + 1;
      if (matchcount == 2) {
        alert(movecount);
      }
  	} 
  }


});


$("#card2").on("click",function(){

  if ($("#card2").attr('src') != "images/back-of-card.png") {return}

  movecount = movecount + 1;
  if (movecount % 2 == 1  & matchcount == 0) {
    hidecards();
  }
  url = "images/" + cardArray[1]+ ".png";
  $("#card2").attr("src", url);


  if (movecount % 2 == 1) {
  	firstcard = cardArray[1];
  }
  else {
  	secondcard = cardArray[1];
  	if (firstcard == secondcard) {
  		matchcount = matchcount + 1;
    if (matchcount == 2) {
        alert(movecount);
      }  
  	}
  }
});
$("#card3").on("click",function(){
  if ($("#card3").attr('src') != "images/back-of-card.png") {return}

  movecount = movecount + 1;
  if (movecount % 2 == 1  & matchcount == 0) {
    hidecards();
  }
  url = "images/" + cardArray[2]+ ".png";
  $("#card3").attr("src", url);


  if (movecount % 2 == 1) {
  	firstcard = cardArray[2];
  }
  else {
  	secondcard = cardArray[2];
  	if (firstcard == secondcard) {
  		matchcount = matchcount + 1;
      if (matchcount == 2) {
        alert(movecount);
      }
  	}
  }
});
$("#card4").on("click",function(){
  if ($("#card4").attr('src') != "images/back-of-card.png") {return}

  movecount = movecount + 1;
  if (movecount % 2 == 1  & matchcount == 0) {
    hidecards();
  }
  url = "images/" + cardArray[3]+ ".png";
  $("#card4").attr("src", url);


  if (movecount % 2 == 1) {
  	firstcard = cardArray[3];
  }
  else {
  	secondcard = cardArray[3];
 	if (firstcard == secondcard) {
   		matchcount = matchcount + 1; 
      if (matchcount == 2) {
        alert(movecount);
      }		
  	}	
  }
});

function hidecards(){
  $("#card1").attr("src", "images/back-of-card.png");
  $("#card2").attr("src", "images/back-of-card.png");
  $("#card3").attr("src", "images/back-of-card.png");
  $("#card4").attr("src", "images/back-of-card.png");
};


$("#Reset").on("click",function(){
  hidecards();
  movecount = 0;
  matchcount = 0;
  firstcard = "";
  secondcard = "";
  cardArray = ['King','King','Queen','Queen'];
  cardArray = shuffle(cardArray);

});

$("#Start").on("click",function(){
  hidecards();
  movecount = 0;
  matchcount = 0;
  firstcard = "";
  secondcard = "";
  cardArray = ['King','King','Queen','Queen'];
  cardArray = shuffle(cardArray);
});







