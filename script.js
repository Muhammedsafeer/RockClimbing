function Name_correct() {
    const Name = document.getElementById("name_input").value;
    const length = Name.length;
    
    if (length <18) {
        if (length >3){
            document.getElementById("name_input").id="name_inputX";
            document.getElementById("name_enter").id="name_enterX";
            document.getElementById("NameIN").innerHTML = "";
            document.getElementById("correct_or_not").innerHTML = "";
            document.getElementById("BackgroundX").id="Background";
            document.getElementById("play_buttonX").id="play_button";
            document.getElementById("SettingsX").id="Settings";
            document.getElementById("HelpX").id="Help";
            let click = document.getElementById("click");
            click.play()
        }
    }
    if (length > 18) {
        document.getElementById("correct_or_not").innerHTML =  "Your Name Has to be Under 18 Characters";
    }
    if (length < 3) {
        document.getElementById("correct_or_not").innerHTML = "Your Name Has to be Above 3 Characters"
    }
}

function play() {
    document.getElementById("play_button").id="play_buttonX";
    document.getElementById("Settings").id="SettingsX";
    document.getElementById("Help").id="HelpX";
    document.getElementById("GbgX").id="Gbg";

    let click = document.getElementById("click");
    click.play()
}

//In Setings
function settings() {
    document.getElementById("play_button").id="play_buttonX";
    document.getElementById("Settings").id="SettingsX";
    document.getElementById("Help").id="HelpX";
    document.getElementById("SettingsINX").id="SettingsIN";
    document.getElementById("BackgroundDX").id="BackgroundD";
    document.getElementById("ON_buttonX").id="ON_button";
    document.getElementById("OFF_buttonX").id="OFF_button";

    let click = document.getElementById("click");
    click.play()
}
function BackgroundON()  {document.getElementById("bgOFF").id="bgON";}
function BackgroundOFF() {document.getElementById("bgON").id="bgOFF"}

//*In settings

function help() {
    document.getElementById("play_button").id="play_buttonX";
    document.getElementById("Settings").id="SettingsX";
    document.getElementById("Help").id="HelpX";
    document.getElementById("InHelpX").id="InHelp";


    let click = document.getElementById("click");
    click.play()
}



// Javascript Buttons

//Enter
document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        const Name = document.getElementById("name_input").value;
        const length = Name.length;
        
        if (length <18) {
            if (length >3){
                document.getElementById("name_input").id="name_inputX";
                document.getElementById("name_enter").id="name_enterX";
                document.getElementById("NameIN").innerHTML = "";
                document.getElementById("correct_or_not").innerHTML = "";
                document.getElementById("BackgroundX").id="Background";
                document.getElementById("play_buttonX").id="play_button";
                document.getElementById("SettingsX").id="Settings";
                document.getElementById("HelpX").id="Help";
                let click = document.getElementById("click");
                click.play()
            }
        }
        if (length > 18) {
            document.getElementById("correct_or_not").innerHTML =  "Your Name Has to be Under 18 Characters";
        }
        if (length < 3) {
            document.getElementById("correct_or_not").innerHTML = "Your Name Has to be Above 3 Characters"
        }
    }
  }
);

//Escape
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		document.getElementById("play_buttonX").id="play_button";
        document.getElementById("SettingsX").id="Settings";
        document.getElementById("HelpX").id="Help";
        document.getElementById("InHelp").id="InHelpX";

        let click = document.getElementById("click");
        click.play()
	    }
    }
);
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        document.getElementById("BackgroundD").id="BackgroundDX";
        document.getElementById("ON_button").id="ON_buttonX";
        document.getElementById("OFF_button").id="OFF_buttonX";

        let click = document.getElementById("click");
        click.play()
	    }
    }
);



//Random Chances Of spawning Rocks
const play = 0;
function random() {
    play + 1;
}
function randomX() {

}
const chance1 = [1, 2, 3, 1, 2, 3];
const chance2 = [0];
setInterval(function() {
    if (play = 1) {
        for (let i = chance1.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = chance1[i]
            chance1[i] = chance1[j]
            chance1[j] = k
          }
          const chance2 = chance1.slice(-0,-5)
          if (chance2 < 3) {
            if (chance2 < 2) {
                console.log("1")
            }else {
                console.log("2")
            }
          }else {
            console.log("3")
          }
      }
}
,1000);