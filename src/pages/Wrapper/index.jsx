import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import Auth from '../../contexts/Auth'
import Background from '../../components/Background'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import About from '../../components/About'
import LetsTalk from '../../components/LetsTalk'
import Futur from '../../components/Futur'
import Services from '../../components/Services'
import Portfolio from '../../components/Portfolio'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

// styles
import './m-wrapper.css'

const Wrapper = (props) => {

	window.onload = () => {
        window.scrollTo(0,0)
    }
	
	const navigate = useNavigate()
	const {isAuthenticated} = useContext(Auth)

	useEffect(() => {
		if(isAuthenticated === false) {
			navigate('/*')
		} 
	}, [isAuthenticated, navigate, props.userId])

	return (
		<main className='wrapper'>
			<Header />
            <Banner />
			<About />
			<LetsTalk />
			<Futur />
			<Services />
			<Portfolio />
			<Contact />
            <Background />
			<Footer />
		</main>
	) 
}
 
export default Wrapper