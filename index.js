'use strict';

const btn = document.querySelectorAll('.btn');
const btnn = document.querySelectorAll('.btnn');
const btns = document.querySelector('.btns')
const userValue = document.querySelector('.userValue');
const equal = document.querySelector('.equal');
const body = document.querySelector('.body');
const theme = document.querySelectorAll('.theme');
const del = document.querySelector('.del');
const reset = document.querySelector('.reset');
const btnGroup = document.querySelector('.btnGroup');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const head = document.querySelector('.head');

two.classList.remove('two');
three.classList.remove('three');

const inputValues = ['',''];
let isEmpty = true;
let action = '';
let currentInput = 0;


for(let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', function(){
        let x = btn[i].getAttribute('data-number');
        let y = btn[i].getAttribute('data-action');
        if(x){
         if(x === '0' && userValue.innerHTML === '0'){
            userValue.innerHTML = 0;
         }
         else if(x === '.'){
            let y = inputValues[currentInput].split('');
            if(y[y.length - 1] === '.') userValue.innerHTML = inputValues[currentInput];
         }
         else{
            isEmpty = false;
            inputValues[currentInput] = `${inputValues[currentInput]}${x}`;
            console.log(inputValues[currentInput]);
            inputValues[currentInput] = (inputValues[currentInput])
            userValue.innerHTML = inputValues[currentInput];
         }
        }
        else{
            isEmpty = true;
           if(y === '+' || y === '-' || y === '*' || y === '/'){
            currentInput = 1;
            action = y;
            userValue.innerHTML = '0';
           }
           else if(y === '='){
              calculate(action);
           }else if(y === 'reset'){
            location.reload();
           }else{
            let a = inputValues[currentInput];
            a = a.split('');
            a.pop();
            a = a.join('')
            userValue.innerHTML = a;
            inputValues[currentInput] = a;
           }
        }
    });
}

//Method helps to toggle between theme
for(let i = 0; i < theme.length; i++){
    theme[i].addEventListener('click', function(){
       let x = theme[i].getAttribute('data-key');
       if(x === '3'){
        one.classList.remove('one');
        two.classList.remove('two');
        three.classList.add('three');
        body.style.backgroundColor = '#17062a';
        head.style.color= '#e9d265';
        userValue.style.backgroundColor = '#1e0836';
        userValue.style.color = '#e9d265';
        btns.style.backgroundColor = '#1f0936';
        btns.style.color = '#e9d265';
        del.style.backgroundColor = '#57077b';
        del.style.color = 'white';
        del.style.boxShadow = '#9217c2';
        reset.style.backgroundColor = '#57077b';
        reset.style.color = 'white';
        reset.style.boxShadow = '#9217c2';
        equal.style.backgroundColor = '#00decf';
        equal.style.color = 'black';
        for(let i = 0; i < btnn.length; i++){
            btnn[i].style.backgroundColor = '#331b4d';
            btn[i].style.color = 'white';
            btn[i].style.boxShadow = '0px 5px #792490';
        }
       }else if(x === '2'){
        three.classList.remove('three');
        one.classList.remove('one');
        two.classList.add('two');
        body.style.backgroundColor = '#e6e6e6';
        head.style.color= '#43443e';
        userValue.style.backgroundColor = '#eeeeee';
        userValue.style.color = '#43443e';
        btns.style.backgroundColor = '#d3cdcd';
        btns.style.color = '#3a3933';
        del.style.backgroundColor = '#378285';
        del.style.color = 'white';
        del.style.boxShadow = '#236167';
        reset.style.backgroundColor = '#378285';
        reset.style.color = 'white';
        reset.style.boxShadow = '#236167';
        equal.style.backgroundColor = '#c85401';
        equal.style.color = 'white';
        for(let i = 0; i < btnn.length; i++){
            btnn[i].style.backgroundColor = '#b6a99f';
            btn[i].style.color = 'white';
            btn[i].style.boxShadow = '0px 5px #b0aaa1';
        }
       }else{
        three.classList.remove('three');
        two.classList.remove('two');
        one.classList.add('one');
        body.style.backgroundColor = '#3b4664';
        head.style.color= 'white';
        userValue.style.backgroundColor = '#181f32';
        userValue.style.color = 'white';
        btns.style.backgroundColor = '#262d45';
        btns.style.color = '#4a5160';
        del.style.backgroundColor = '#647299';
        del.style.color = 'white';
        reset.style.backgroundColor = '#647299';
        reset.style.color = 'white';
        equal.style.backgroundColor = '#d13f30';
        equal.style.color = 'white';
        for(let i = 0; i < btnn.length; i++){
            btnn[i].style.backgroundColor = '#b6a99f';
            btn[i].style.color = 'white';
            btn[i].style.boxShadow = '0px 5px #d3cdcd';
        }
       }
    });
}

//Method that help to decide what calculation operation to carry out
//Method also returns an output which would be displayed
function calculate(x){
    let f =  Number(inputValues[0]);
    let s = Number(inputValues[1]);
    if(x === '*'){
        let y = f * s;
        userValue.innerHTML = y;
    }
    else  if(x === '+'){
        let y = f + s;
        userValue.innerHTML = y;
    }
    else  if(x === '-'){
        let y = f - s;
        userValue.innerHTML = y;
    }else{
        if(x === '/'){
            let y = f / s;
            userValue.innerHTML = y;
        }
    }
}

