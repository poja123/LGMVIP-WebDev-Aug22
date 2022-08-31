let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'CLR') {
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenvalue);
        }
        else if(buttonText == 'DEL') {
            screenvalue = screenvalue.slice(0,-1);
            screen.value = screenvalue;
        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}