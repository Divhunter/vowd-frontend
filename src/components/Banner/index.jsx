import { Link } from 'react-router-dom'
import Video from '../Video'
//import me from '../../assets/pictures/me.jpg'
import space from '../../assets/pictures/space.jpg'
//import me2 from '../../assets/pictures/me2.jpg'
//import nature from '../../assets/pictures/nature.jpg'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-banner.css'
import './d-banner.css'

const Banner = () => {

	return (
		<section id='banner' className='banner'>
			<h1 className='banner__title'>
				<span className='banner__title-v'>V</span>
				<span className='banner__title-o'>O</span>
				tre
				<br/>
				<span className='banner__title-w'>W</span>
				eb
				<br/>
				<span className='banner__title-d'>D</span>
				ev.
			</h1>
			{/*<h2 className='banner__subtitle'>Simplement votre !</h2>
			<p className='banner__text'>
				Consultant en développement web
				<br/> 
				& communication digitale
				<br/>
				<strong className='banner__text__end'>
					Pour les entrepreneurs ambitieux
				</strong>
			</p>*/}
			<Link  className='banner__button' to=''>
				<FontAwesomeIcon 
					className='banner__button__btn' 
					icon={faCirclePlay} 
				/>
				<p className='banner__button__text'>
					Tout savoir
					<br/>
					en 5 minutes
				</p>
			</Link>
			<img className='banner__picture' src={space} alt='space' />
			{/*<img className='banner__picture' src={me} alt='congratulation' />*/}
			{/*<img className='banner__picture2' src={me2} alt='congratulation' />*/}
			{/*<img className='banner__picture' src={nature} alt='congratulation' />*/}
			<Video />
		</section>
	)
}
 
export default Banner