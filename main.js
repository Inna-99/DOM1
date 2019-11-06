let newElementinput = document.createElement('input');
document.body.appendChild(newElementinput);

var element = document.createElement('div');
document.body.appendChild(element);
var inputText = "";
newElementinput.addEventListener("blur",function(){
    inputText = newElementinput.value;
});
firstlinemassive = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 
 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','Del','CapsLock', 'ф', 'ы', 'в', 'а', 
 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'
 , 'Ctrl', 'Win' , 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
document.addEventListener("keydown",function(event){
const key = event.key;

if(key === "Backspace"){
    inputText = inputText.slice(0,inputText.length - 1);
} else {
    inputText = inputText + key;
}
newElementinput.value = inputText;
});

    function createClipboard(){
        firstlinemassive.forEach((char)=>{
            var ch = document.createElement("div");
            ch.addEventListener("click", function() {
                switch(char){
                    case "Backspace":{
                        inputText = inputText.slice(0,inputText.length - 1);
                    }
                    default:{
                        inputText = inputText + char;
                    }
                    newElementinput.value = inputText;
                }
            });
            ch.innerText = char;
            ch.id = "1";
            ch.classList = ["test"];
            element.appendChild(ch);
        });
    }

    createClipboard();










    
