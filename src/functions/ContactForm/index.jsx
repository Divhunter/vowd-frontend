import { useState } from "react"

// styles
import './m-contact-form.css'
import './d-contact-form.css'

const ContactForm = () => {

    const [isOpen1, setIsOpen1] = useState(true)

    const isOpen1State = () => {
        setIsOpen1(!isOpen1)
        if (isOpen1State === true) {
            document.getElementById('form__page1').style.display = 'block'
            document.getElementById('form__page2').style.display = 'none'
        } else {
            document.getElementById('form__page1').style.display = 'none'
            document.getElementById('form__page2').style.display = 'block'
        }
    }

    const [isOpen2, setIsOpen2] = useState(true)

    const isOpen2State = () => {
        setIsOpen2(!isOpen2)
        if (isOpen2State === true) {
            document.getElementById('form__page1').style.display = 'none'
            document.getElementById('form__page2').style.display = 'block'
        } else {
            document.getElementById('form__page1').style.display = 'block'
            document.getElementById('form__page2').style.display = 'none'
        }
    }

    const valueStateSociety = () => {
        if (document.getElementById('society').focus() === true) {
            document.getElementById('society').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateSociety = () => {
        document.getElementById('society').style.backgroundColor = 'white'
    }

    const onBlurStateSociety = () => {
        if (document.getElementById('society').value !== '') { 
            document.getElementById('society').style.backgroundColor = 'white'
        } else {
            document.getElementById('society').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }

    const valueStateCountry = () => {
        if (document.getElementById('country').focus() === true) {
            document.getElementById('country').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateCountry = () => {
        document.getElementById('country').style.backgroundColor = 'white'
    }

    const onBlurStateCountry = () => {
        if (document.getElementById('country').value !== '') { 
            document.getElementById('country').style.backgroundColor = 'white'
        } else {
            document.getElementById('country').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }

    const valueStateFirstName = () => {
        if (document.getElementById('first-name').focus() === true) {
            document.getElementById('first-name').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateFirstName = () => {
        document.getElementById('first-name').style.backgroundColor = 'white'
    }

    const onBlurStateFirstName = () => {
        if (document.getElementById('first-name').value !== '') { 
            document.getElementById('first-name').style.backgroundColor = 'white'
        } else {
            document.getElementById('first-name').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }

    const valueStateLastName = () => {
        if (document.getElementById('last-name').focus() === true) {
            document.getElementById('last-name').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateLastName = () => {
        document.getElementById('last-name').style.backgroundColor = 'white'
    }

    const onBlurStateLastName = () => {
        if (document.getElementById('last-name').value !== '') { 
            document.getElementById('last-name').style.backgroundColor = 'white'
        } else {
            document.getElementById('last-name').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }

    const valueStateProjet = () => {
        if (document.getElementById('projet').focus() === true) {
            document.getElementById('projet').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateProjet = () => {
        document.getElementById('projet').style.backgroundColor = 'white'
    }

    const onBlurStateProjet = () => {
        if (document.getElementById('projet').value !== '') { 
            document.getElementById('projet').style.backgroundColor = 'white'
        } else {
            document.getElementById('projet').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }

    const valueStateBudget = () => {
        if (document.getElementById('budget').focus() === true) {
            document.getElementById('budget').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateBudget = () => {
        document.getElementById('budget').style.backgroundColor = 'white'
    }

    const onBlurStateBudget = () => {
        if (document.getElementById('budget').value !== '') { 
            document.getElementById('budget').style.backgroundColor = 'white'
        } else {
            document.getElementById('budget').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }

    const valueStateDelai = () => {
        if (document.getElementById('delai').focus() === true) {
            document.getElementById('delai').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateDelai = () => {
        document.getElementById('delai').style.backgroundColor = 'white'
    }

    const onBlurStateDelai = () => {
        if (document.getElementById('delai').value !== '') { 
            document.getElementById('delai').style.backgroundColor = 'white'
        } else {
            document.getElementById('delai').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }

    const valueStateMessage = () => {
        if (document.getElementById('message').focus() === true) {
            document.getElementById('message').style.backgroundColor = 'white'   
        }
    }

    const onFocusStateMessage = () => {
        document.getElementById('message').style.backgroundColor = 'white'
    }

    const onBlurStateMessage = () => {
        if (document.getElementById('message').value !== '') { 
            document.getElementById('message').style.backgroundColor = 'white'
        } else {
            document.getElementById('message').style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
        }
    }
   
	return (
        
        <form 
            id='form'
            className='form'
            name='contact'
            method='post'
        >
            <div 
                id='form__page1'
                className='form__page1'>
                <div className='form-group'>
                    <label 
                        htmlFor='society'>
                        Société
                    </label>
                    <input
                        onChange={valueStateSociety}
                        onFocus={onFocusStateSociety}
                        onBlur={onBlurStateSociety} 
                        id='society'
                        type='text'
                        name='society'
                        placeholder='Société' 
                        className='form-control'
                        aria-label='société' 
                    />
                </div>
                <div className='form-group'>
                    <label 
                        htmlFor='country'>
                        Country
                    </label>
                    <input 
                        onChange={valueStateCountry} 
                        onFocus={onFocusStateCountry}
                        onBlur={onBlurStateCountry} 
                        id='country'
                        type='text'
                        name='country'
                        placeholder='Ville*' 
                        className='form-control'
                        aria-label='country' 
                        required
                    />
                </div>
                <div className='form-group'>
                    <label 
                        htmlFor='first-name'>
                        Prénom
                    </label>
                    <input
                        onChange={valueStateFirstName} 
                        onFocus={onFocusStateFirstName}
                        onBlur={onBlurStateFirstName}  
                        id='first-name'
                        type='text'
                        name='first-name'
                        placeholder='Prénom*'
                        className='form-control' 
                        required
                        aria-label='first-name' 
                    />
                </div>
                <div className='form-group'>
                    <label 
                        htmlFor='last-name'>
                        Nom
                    </label>
                    <input
                        onChange={valueStateLastName} 
                        onFocus={onFocusStateLastName}
                        onBlur={onBlurStateLastName}   
                        id='last-name' 
                        type='text'
                        name='last-name'
                        placeholder='Nom*'
                        className='form-control' 
                        required
                        aria-label='last-name' 
                    />
                </div>
                <div 
                    onClick={isOpen1State} 
                    className="form__next">
                    Suivant
                </div>
            </div>
            <div 
                id='form__page2'
                className='form__page2'>
                <div className='form-group'>
                    <label 
                        htmlFor='projet'>
                        Projet
                    </label>
                    <input
                        onChange={valueStateProjet}
                        onFocus={onFocusStateProjet}
                        onBlur={onBlurStateProjet}    
                        id='projet'
                        type='text' 
                        name='projet'
                        placeholder='Projet' 
                        className='form-control'
                        aria-label='projet' 
                    />
                </div>
                <div className='form-group'>
                    <label 
                        htmlFor='budget'>
                        Budget en K€
                    </label>
                    <input
                        onChange={valueStateBudget}  
                        onFocus={onFocusStateBudget}
                        onBlur={onBlurStateBudget} 
                        id='budget'
                        type='number' 
                        name='budjget'
                        placeholder='Budget en k€' 
                        className='form-control'
                        aria-label='budget'
                        maxLength={6}
                        min={500}
                        max={200000} 
                    />
                </div>
                <div className='form-group'>
                    <label 
                        htmlFor='delai'>
                        Délai en mois
                    </label>
                    <input
                        onChange={valueStateDelai} 
                        onFocus={onFocusStateDelai}
                        onBlur={onBlurStateDelai}   
                        id='delai'
                        type='number'
                        name='delai'
                        placeholder='Délai en mois' 
                        className='form-control'
                        aria-label='delai' 
                        maxLength={2}
                        min={1}
                        max={24}
                    />
                </div>
                <div className='form-group'>
                    <label 
                        htmlFor='message'>
                        Méssage
                    </label>
                    <textarea
                        onChange={valueStateMessage}
                        onFocus={onFocusStateMessage}
                        onBlur={onBlurStateMessage}  
                        id='message'
                        name='message'
                        placeholder='Méssage' 
                        className='form-control'
                        aria-label='message'
                        rows="4" cols="50"
                        maxLength={500}
                    > 
                    </textarea> 
                </div>
                <div 
                    onClick={isOpen2State}
                    className="form__next">
                    Précédent
                </div>
                <button 
                    className="form-submit contact-submit" 
                    type="submit">
                    Envoyer
                </button>
            </div>
        </form>
	)
}
 
export default ContactForm