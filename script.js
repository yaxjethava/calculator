let btns = document.querySelectorAll("button");

// take aapni input fild
let display = document.getElementById("resultDisplay");

let click = document.getElementById("click");
let Enter = document.getElementById("Enter");
let clearSound = document.getElementById("clearBack");

// functions declaration in if...else
function clear() {
    display.value = '';
    clearSound.play();
}

function equalto() {
    display.value = eval(display.value);
    Enter.play();

}

function calculation(textInbtn) {
    display.value = display.value + textInbtn;
    click.play();

}

function back() {
    // make string to array
    const convertArray = display.value.split('');

    //remove last value of array
    convertArray.pop();

    //convert array into string
    const pop = (convertArray.join(''));

    //display final value
    display.value = pop;

    clearSound.play();
}



// for take a multipl value and operatorand butttons value 

// for mouse events
for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', () => {
                
        //assaing preesed text in variabale
        const textInbtn = btns[i].textContent;


        // condition for cheaking presssed key
        if (textInbtn === 'C' || textInbtn === 'c') {
            clear();

        } else if (textInbtn === '=') {
            equalto();

        }
        else if (textInbtn === '>') {
            back();
        }
        else {
            calculation(textInbtn);
        }
    })
}

// for keyboard events

document.addEventListener('keydown', (event) => {

    // console.log(event.key);


    // condition for cheaking presssed key
    if (event.key === 'C' || event.key === 'c') {
        clear();


    } else if (event.key === 'Enter') {
        equalto();

    }
    else if (event.key === 'Backspace') {
        back();
    }
    else {

        if (event.key >= 0 && event.key <= 9 || event.key == '.' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') {
            calculation(event.key);
        }
    }
})

