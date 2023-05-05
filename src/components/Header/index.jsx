import { Link } from 'react-scroll'
import { Link as Logout } from 'react-router-dom'
import { useState, useContext} from 'react'
import Auth from '../../contexts/Auth'
import { logout } from '../../servicesApi/AuthApi'
import vowd from '../../assets/brands/logo-vowd.png'
import { faBars, faCircleUser, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-header.css'
import './d-header.css'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const isOpenState = () => {
        setIsOpen(!isOpen)
    }

	const { setIsAuthenticated } = useContext(Auth)

	const handleLogout = () => {
        logout()
        setIsAuthenticated(false)
    }

	return (
		<nav id='navbar' className={	
			isOpen ? 
			'navbar navbar-open':
			'navbar navbar-closed'}>
			<img className='navbar__logo-vowd' src={vowd} alt='logo-vowd' />
			<span className='navbar__title-vowd'>
				vowd
			</span>
			<FontAwesomeIcon 
				className='navbar__user' 
				icon={faCircleUser} 
			/>
			<FontAwesomeIcon 
				onClick={isOpenState} 
				className={
					isOpen ?
					'navbar__button-bars closed':
					'navbar__button-bars open'} 
				icon={faBars} 
			/>
			<FontAwesomeIcon 
				onClick={isOpenState}
				className={
					isOpen ?
					'navbar__button-x open':
					'navbar__button-x closed'} 
				icon={faXmark} 
			/>
			<Logout className='navbar__logout' to='/vowd'>
				<FontAwesomeIcon 
					onClick={handleLogout}
					className='navbar__logout__btn' 
					icon={faPowerOff} 
				/>
			</Logout>
			<menu className={
				isOpen ?
				'navbar__menu navbar__menu-open':
				'navbar__menu navbar__menu-closed'}>
				<div	
					onClick={isOpenState} 
					className='nav__menu__link nav__menu__link-zero'>
					Accueil
				</div>
				<Link to='about'>
					<div
						className='nav__menu__link nav__menu__link-one'>
						A propos
					</div>
				</Link>
				<Link to='futur'>
					<div 
						className='nav__menu__link nav__menu__link-two'>
						A portée de main
					</div>
				</Link>
				<Link to='letsTalk'>
					<div
						className='nav__menu__link nav__menu__link-hree'>
						Projet ? Parlons-en
					</div>
				</Link>
				<Link to='services'>
					<div
						className='nav__menu__link nav__menu__link-four'>
						Services de qualité
					</div>
				</Link>
				<Link to='portfolio'>
					<div
						className='nav__menu__link nav__menu__link-five'>
						Mes réalisations
					</div>
				</Link>
				<Link to='contact'>
					<div
						className='nav__menu__link nav__menu__link-six'>
						Contact France
					</div>
				</Link> 
			</menu> 
		</nav>
	)
}
 
export default Header