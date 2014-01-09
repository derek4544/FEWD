var myfiles = new Array();
var counter = 0;
var maxfiles = 7;
var scoresum = 0;
var scorecount = 0;

for(i = 0; i < maxfiles; i++){
	j = i + 1
	myfiles[i] = "food" + j + ".jpg";
}

function roundToTwo(value) {
    return(Math.round(value * 100) / 100);
}

$("#back").on("click",function(){
		counter = counter - 1;
		if (counter < 0) {counter = 0}
		url = "images/" + myfiles[counter];
		document.getElementById("photo").setAttribute("src", url);
});

$("#skip").on("click",function(){
		counter = counter + 1;
		if (counter > maxfiles-1) {counter = maxfiles-1}
		url = "images/" + myfiles[counter];
		document.getElementById("photo").setAttribute("src", url);
});

$("#scoreselect").on("change",function(){

        scoresum = scoresum + parseInt($("#scoreselect").val());

        scorecount = scorecount + 1;

		counter = counter + 1;

		if (counter > maxfiles-1) {

		  counter = maxfiles-1
		  $("#message").text("You have reached the end. Total deliciousness score was: " + roundToTwo(scoresum/scorecount));

		}

		url = "images/" + myfiles[counter];
		document.getElementById("photo").setAttribute("src", url);
		
		$("#scoreselect").val(0);	

});






























