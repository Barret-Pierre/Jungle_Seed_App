import { useState } from 'react'
import "../styles/Footer.css"

function handelSubmit(e) {
    e.preventDefault();
    alert('Votre email nous à été envoyé')
}

function checkMail(input) {
    if (!input.includes('@')) {
        alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }
}

function Footer() {

    const [inputMail, setInputMail] = useState('Tapez votre email');

    return (
        <footer className='js-footer'>
            <div className='js-footer-element'>
                Vous voulez nous contecter ? Alors laissez-nous votre mail :
            </div>
            <form onSubmit={handelSubmit}>
                <input type="text" name="email" value={inputMail} onChange={(e) => setInputMail(e.target.value)} onBlur={(e) => checkMail(e.target.value)} />
                <button type="submit" onClick={() => console.log(inputMail)}>Envoyer</button>
            </form>
        </footer>
    )
}

export default Footer