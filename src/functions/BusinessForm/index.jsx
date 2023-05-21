import { Link } from 'react-scroll'
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

// styles
import './m-business-form.css'
import './d-business-form.css'

const BusinessForm = () => {

    const [inputValue, setInputValue] = useState('');

    const [isVisibleForm, setIsVisibleForm ] = useState(true)

    const [isVisibleDiv, setIsVisibleDiv ] = useState(false)

    const workWeb = 'Web'

    const handleVisibleForm = (e) => {
        e.preventDefault() 

        if (e.target.id === 'project-submit' && document.getElementById('work-option-c').checked === true) {
			setIsVisibleForm(false)
            setIsVisibleDiv(true)

		} else if (document.getElementById('other-button')) {
            setIsVisibleForm(true)
            setIsVisibleDiv(false)

            let projectOther = []
            projectOther.push(inputValue)
            localStorage.setItem('projectOther', projectOther)
            alert('Veuillez compléter le formulaire de contact via l\'onglet "Contact France" pour finaliser votre demande')
            window.location.reload(false)

        } else if (document.getElementById('other-closed')) {
            setIsVisibleForm(true)
            setIsVisibleDiv(false)
        }
    }

    return (
        <>
            {isVisibleForm && <form 
                id='business-form'
                className='business-form'>
                <div className='business-form__container'>
                    <div className='business-form__container__work'>
                        <input 
                            type='radio' 
                            name='work-option' 
                            className='work-option option' 
                            id='work-option-a'
                            value={workWeb}
                        />
                        <label className='work-option--padding1'
                            htmlFor='work-option-a'>Web
                        </label>

                        <input 
                            type='radio' 
                            name='work-option' 
                            className='work-option option' 
                            id='work-option-b'
                        />
                        <label className='work-option--padding1'
                            htmlFor='work-option-b'>Design
                        </label>

                        <input 
                            type='radio' 
                            name='work-option' 
                            className='work-option option'
                            id='work-option-c' 
                        />
                        <label className='work-option--padding1'
                            htmlFor='work-option-c'>Autre
                        </label>

                        <input 
                            type='radio' 
                            name='work-option' 
                            className='work-option option'
                            id='work-option-d' 
                            defaultChecked 
                        />
                        <label className='work-option--padding1'
                            htmlFor='work-option-d'>N/R
                        </label>
                    </div>

                    <div className='business-form__container__budget'>
                        <input 
                            type='radio' 
                            name='budget-option' 
                            className='budget-option option'
                            id='budget-option-a' />
                        <label className='work-option--padding2'
                            htmlFor='budget-option-a'>
                                <span>&lsaquo;</span> 2k€
                        </label>

                        <input 
                            type='radio' 
                            name='budget-option' 
                            className='budget-option option'
                            id='budget-option-b'
                        />
                        <label className='work-option--padding1'
                            htmlFor='budget-option-b'>2 à 6k€
                        </label>

                        <input 
                            type='radio' 
                            name='budget-option' 
                            className='budget-option option'
                            id='budget-option-c' 
                        />
                        <label className='work-option--padding2'
                            htmlFor='budget-option-c'>
                                <span>&rsaquo;</span> 6k€
                        </label>

                        <input 
                            type='radio' 
                            name='budget-option' 
                            className='budget-option option'
                            id='budget-option-d' 
                            defaultChecked 
                        />
                        <label className='work-option--padding1'
                            htmlFor='budget-option-d'>N/R
                        </label>
                    </div>

                    <div className='business-form__container__dead-line'>
                        <input 
                            type='radio'
                            name='dead-line-option' 
                            className='dead-line-option option'
                            id='dead-line-option-a' 
                        />
                        <label className='work-option--padding1'
                            htmlFor='dead-line-option-a'>1 mois
                        </label>

                        <input 
                            type='radio'
                            name='dead-line-option' 
                            className='dead-line-option option'
                            id='dead-line-option-b'
                        />
                        <label className='work-option--padding2'
                            htmlFor='dead-line-option-b'>
                                <span>&lsaquo;</span> 5 mois
                        </label>

                        <input 
                            type='radio' 
                            name='dead-line-option' 
                            className='dead-line-option option'
                            id='dead-line-option-c' 
                        />
                        <label className='work-option--padding2'
                            htmlFor='dead-line-option-c'>
                                <span>&rsaquo;</span> 5 mois
                        </label>

                        <input 
                            type='radio' 
                            name='dead-line-option' 
                            className='dead-line-option option'
                            id='dead-line-option-d' 
                            defaultChecked 
                        />
                        <label className='work-option--padding1'
                            htmlFor='dead-line-option-d'>N/R
                        </label>
                    </div>
                </div>
                <div
                    onClick={(e) => handleVisibleForm(e)}
                    name='projet-submit'
                    className='formSubmit project-submit' 
                    id='project-submit'
                >
                    Parlons-en
                </div>
            </form>}
            {isVisibleDiv && <div 
                id='contenair-project-other'
                className='contenair-project-other'>
                <h2 className='contenair-project-other__title'>
                    <FontAwesomeIcon 
                        onClick={handleVisibleForm}
                        id='other-closed'
                        className='other-closed' 
                        icon={faXmark} 
				    />
                    Définissez votre projet
                </h2>
                <form id='description'>
                    <label className='description'>Description</label>
                    <textarea 
                        autoFocus
                        type='text'
                        className='contenair-project-other__input'
                        id='contenair-project-other__input'
                        maxLength={500}
                        rows="4" cols="50"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}> 
                    </textarea> 
                    <button
                        id='contenair-project-other__button'
                        className='contenair-project-other__button'>
                        <Link to='contact__picture'>
                            <FontAwesomeIcon
                                onClick={handleVisibleForm}
                                id='other-button' 
                                className='other-button' 
                                icon={faCircleCheck} 
                            />
                        </Link>
                    </button>
                </form>
            </div>}
        </>
	)
}

export default BusinessForm