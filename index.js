let user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	nameU: 'Bartoloměj',
}

let {email, password, nameU} = user 

let formElm = document.querySelector('#registration')

    formElm.addEventListener('submit', (event) => {
        
        event.preventDefault()

        let emailInput = document.querySelector('#email')
        let email = emailInput.value
        let passwordInput = document.querySelector('#password')
        let password = passwordInput.value

    if (email === 'bartolomej.rozumbrada@gmail.com' && password === 'vimzenicnevim') {

        let form = document.getElementById("registration")
        form.remove()
        document.write("Přihlášený uživatel: Bartoloměj")
    }
    else if (email !== 'bartolomej.rozumbrada@gmail.com' && password !== 'vimzenicnevim'){
        let para = document.createElement("p")
        let node = document.createTextNode("Neplatné přihlašovací údaje")
        para.appendChild(node)
        para.style.color = "red"

        let form = document.getElementById("registration")
        form.appendChild(para)
        
       /* function clearInput(){
            let getValue = document.getElementById(password)
                if (getValue.value !=="")
                    getValue.value = ""
        }
        */
       
        
    }
})


/*

Nemůžu přijít na to, jak vymazat hodnotu z políčka e-mail, pokud je neplatný. Nejnadějněji mi připadala funkce clearInput() - zakomentovaná, ale nefunguje.

*/