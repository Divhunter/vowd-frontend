import { useState } from 'react'
import Register from './Register'
import Login from './Login'
import SendMail from './SendMail'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Video from '../../components/Video'

// styles
import './m-website.css'

const Website = () => {

	localStorage.clear()

	const [isLoginModal, setIsLoginModal] = useState(true)
	const [isRegisterModal, setIsRegisterModal] = useState(false)
	const [isSendMailModal, setIsSendMailModal] = useState(false)

	const handleModals = (e) => {
		if (e.target.id === 'loginModal') {
			setIsLoginModal(false)
			setIsSendMailModal(false)
			setIsRegisterModal(true)
		} 
		else if (e.target.id === 'registerModal') {
			setIsLoginModal(true)
			setIsSendMailModal(false)
			setIsRegisterModal(false)
		}
	}

	const handleSendModals = (e) => {
		if (e.target.id === 'sendMailModal') {
			setIsSendMailModal(true)
			setIsLoginModal(false)
			setIsRegisterModal(false)
		} 
		else if (e.target.id === 'backToWebSiteModal') {
			setIsLoginModal(true)
			setIsRegisterModal(false)
			setIsSendMailModal(false)
		}
	}

	return (
		<>
			<section className='website'>
				<div className='website_text'>
					<span className='website_text_span'>
						<strong>
							vowd
						</strong>
						<br/>
						<FontAwesomeIcon className='website_text_play'
							icon={ faCirclePlay } 
						/>
					</span>
					<span className='website_text_span2 legal'>
						C.G.U.
					</span>
					<span className='website_text_span3 legal'>
						R.G.P.D.
					</span>
				</div>
				< Video />
				{ isLoginModal &&
					<div>
						<h1 className='headerModal'>- CONNEXION -</h1>
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
							className='formModal loginModal'
							onClick={handleModals} 
						>
							S'enregistrer
						</div>
					</div> 
				}
				{ isRegisterModal && 
					<div>
						<h1 className='headerModal'>- INSCRIPTION -</h1>
						<Register />
						<div 
							id='registerModal'
							className='formModal registerModal'
							onClick={handleModals}
						>
							Déjà inscrit ?
						</div>
					</div> 
				}
				{ isSendMailModal &&
					<div className='container-forgot'>
						<h1 className='headerModal'>- REDIRECTION MDP -</h1>
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
			</section>
		</>
	)
}
 
export default Website