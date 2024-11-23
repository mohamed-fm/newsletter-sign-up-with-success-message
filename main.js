/*
    
    
    
    Dismiss message
*/

const form = document.querySelector('form')
const email_input = document.querySelector('#email')
const submit = document.querySelector('#btn')
const label = document.querySelector('label')
const contenar = document.querySelector('.contenar')
function validator (val) {
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return regx.test(val)
}

function bulid_massage(){
    let massage = document.createElement('div')
    massage.classList.add('massage')
    let img = document.createElement('img')
    img.src = "./assets/images/icon-success.svg" 
    let h1 = document.createElement('h1')
    h1.textContent = "Thanks for subscribing!"
    let p = document.createElement('p')
    let email = document.createElement('span')
    email.textContent  = email_input.value
    let text1 = document.createTextNode('A confirmation email has been sent to ')
    let text2 = document.createTextNode(' Please open it and click the button inside to confirm your subscription.')
    p.append(text1)
    p.append(email)
    p.append(text2)
    let btn = document.createElement('button')
    btn.textContent = "Dismiss message"
    btn.classList.add("btn")
    massage.append(img)
    massage.append(h1)
    massage.append(p)
    massage.append(btn)
    contenar.append(massage)
}

form.onsubmit = function (e){
    e.preventDefault()
    if(validator(email_input.value)){
        // bulid the succes bage
        contenar.innerHTML = ''
        contenar.textContent = 'Loading...'
        setTimeout(() => {
            contenar.textContent = ''
            bulid_massage()
        }, 2000);
    }else{
        // wrong email !
        label.classList.add('M-error')
        email_input.classList.add('E-error')
        email_input.oninput = function(e){
            console.log(email_input.value)
            if(validator(email_input.value)){
                email_input.classList.remove('E-error')
                label.classList.remove('M-error')
            }
        }
    }
}