let user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	nameU: 'Bartoloměj',
}

let formElm = document.querySelector('#registration')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let warningElm = document.querySelector('.warning')


formElm.addEventListener('submit', (event) => {
    
    event.preventDefault()
    let email = emailInput.value
    let password = passwordInput.value

    if (email === user.email && password === user.password) {

        formElm.remove()
        document.write("Přihlášený uživatel: Bartoloměj")

    }
    else {
        warningElm.textContent = "Neplatné přihlašovací údaje"
        passwordInput.value = ""
    }
})

