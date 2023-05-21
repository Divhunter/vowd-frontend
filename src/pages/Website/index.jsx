import { useState } from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import SendMail from './SendMail'
import Video from '../../components/Video'
import vowd from '../../assets/brands/logo-vowd.png'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-website.css'

const Website = () => {

	const [isLoginModal, setIsLoginModal] = useState(true)
	const [isRegisterModal, setIsRegisterModal] = useState(false)
	const [isSendMailModal, setIsSendMailModal] = useState(false)

	const handleModals = (e) => {
		if (e.target.id === 'loginModal') {
			setIsLoginModal(false)
			setIsRegisterModal(true)
		} 
		else if (e.target.id === 'registerModal') {
			setIsLoginModal(true)
			setIsRegisterModal(false)
		}
	}

	const handleSendModals = (e) => {
		if (e.target.id === 'sendMailModal') {
			setIsLoginModal(false)
			setIsSendMailModal(true)
		} 
		else if (e.target.id === 'backToWebSiteModal') {
			setIsLoginModal(true)
			setIsSendMailModal(false)
		}
	}

	return (
		<>
			<section className='website'>
				<img className='website__logo-vowd' src={vowd} alt='logo-vowd' />
				<p className='website_text'>
					<span className='website_text_span'>
						<strong>
							vowd
						</strong>
					</span>
					<br/> 
					consultant en développement web
					<br/>
					& communication digitale
					<br/>
				</p>
				<Link  className='website__button' to=''>
					<FontAwesomeIcon 
						className='website__button__btn' 
						icon={faCirclePlay} 
					/>
				</Link>
				<Video />
				{ isLoginModal &&
					<div>
						<br/>
						<h1 id='modal-Title-log'>Se connecter :</h1>
						<Login />
						<div
							id='sendMailModal' 
							className='forgotPassword'
							onClick={handleSendModals}
						>
							Mot de passe oublié ?
						</div>
						<div 
							id='loginModal'
							className='formModal'
							onClick={handleModals} 
						>
							S'enregistrer
						</div>
					</div> 
				}
				{ isSendMailModal &&
					<div>
						<br/>
						<h1 id='modal-Title-send'>Saisissez vos informations :</h1>
						<SendMail />
						<div
							id='backToWebSiteModal' 
							className='backToWebSiteModal'
							onClick={handleSendModals}
						>
							Retour au formulaire de connexion
						</div>
					</div>
				}
				{ isRegisterModal && 
					<div>
						<br/>
						<h1 id='modal-Title-reg'>S'enregister :</h1>
						<Register />
						<div 
							id='registerModal'
							className='formModal'
							onClick={handleModals}
						>
							Déjà inscrit ?
						</div>
					</div> 
				}
			</section>
		</>
	)
}
 
export default Website