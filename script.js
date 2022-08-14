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
        }
    }
    if (length > 18) {
        document.getElementById("correct_or_not").innerHTML =  "Your Name Has to be Under 18 Characters";
    }
    if (length < 3) {
        document.getElementById("correct_or_not").innerHTML = "Your Name Has to be Above 3 Characters"
    }
}
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
            }
        }
        if (length > 18) {
            document.getElementById("correct_or_not").innerHTML =  "Your Name Has to be Under 18 Characters";
        }
        if (length < 3) {
            document.getElementById("correct_or_not").innerHTML = "Your Name Has to be Above 3 Characters"
        }
    }
  });