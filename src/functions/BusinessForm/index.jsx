import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-business-form.css'
import './d-business-form.css'

const BusinessForm = () => {
    
    const openOther = () => {
        if (
            document.getElementById('work-option-c').checked === true) {
            document.getElementById('business-form').style.visibility = 'hidden'
            document.getElementById('contenair-project-other').style.visibility = 'visible'
            document.getElementById('contenair-project-other__input').focus();
        } else {
            document.getElementById('business-form').style.visibility = 'visible'
            document.getElementById('contenair-project-other').style.visibility = 'hidden'
        }
    }

    return (
        <>
            <form 
                id='business-form'
                className='business-form'>
                <div className='business-form__container'>
                    <div className='business-form__container__work'>
                        <input 
                            type='radio' 
                            name='work-option' 
                            className='work-option option' 
                            id='work-option-a'
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
                    onClick={()=>openOther()}
                    name='projet-submit'
                    className='form-submit project-submit' 
                    id='project-submit'
                >
                    Parlons-en
                </div>
            </form>
            <div 
                id='contenair-project-other'
                className='contenair-project-other'>
                <h2 className='contenair-project-other__title'>
                    <FontAwesomeIcon 
                        className='other-closed' 
                        icon={faXmark} 
				    />
                    Définissez votre projet
                </h2>
                <textarea 
                    type='text'
                    className='contenair-project-other__input'
                    id='contenair-project-other__input'
                    maxLength={500}
                    rows="4" cols="50">
                </textarea> 
                <button
                    className='contenair-project-other__button'>
                    <FontAwesomeIcon
                        className='other-button' 
                        icon={faCircleCheck} 
				    />
                </button>
            </div>
        </>
	)
}

export default BusinessForm