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
            click.play();
        }
    }
    if (length > 18) {
        document.getElementById("correct_or_not").innerHTML =  "Your Name Has to be Under 18 Characters";
    }
    if (length < 3) {
        document.getElementById("correct_or_not").innerHTML = "Your Name Has to be Above 3 Characters";
    }
    if (length = 3) {
        document.getElementById("correct_or_not").innerHTML = "Your Name Has to be Above 3 Characters";
    }
}
//In PLAY
function play() {
    document.getElementById("play_button").id="play_buttonX";
    document.getElementById("Settings").id="SettingsX";
    document.getElementById("Help").id="HelpX";
    document.getElementById("GbgX").id="Gbg";
    document.getElementById("back2X").id="back2";
    document.getElementById("nameX").id="name";
    document.getElementById("scoreX").id="score";

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
    document.getElementById("back2X").id="back2";

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
                click.play();
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


//Random Chances Of spawning Rocks
const random = ["1", "2", "3", "1", "2", "3"];
setInterval(function () {
    for (let i = random.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = random[i]
        random[i] = random[j]
        random[j] = k
      }
      console.log(random)
      const random1 = random.slice(-0, -5)
},1000)
//

function Back1() {
    document.getElementById("play_buttonX").id="play_button";
    document.getElementById("SettingsX").id="Settings";
    document.getElementById("HelpX").id="Help";
    document.getElementById("Gbg").id="GbgX";
    document.getElementById("back2").id="back2X";
    document.getElementById("name").id="nameX"; 
    document.getElementById("score").id="scoreX";
}
setInterval(function () {
    const player = document.getElementById("name_input").value;
    return document.getElementById("player_name").innerHTML = "Name: " + player;
},1)