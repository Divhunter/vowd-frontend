import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import elTaros from '../../assets/pictures/el-taros.jpg'
import turbo from '../../assets/pictures/auto-ecole-turbo.jpg'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-portfolio.css'
import './d-portfolio.css'

const Portfolio = () => {

    const portfolioHeader = pagesHeadersArray.find(el => el.title === "5")
    const portfolioHeaderArray = []
    portfolioHeaderArray.push(portfolioHeader)

    const redirection = () => { 
        window.location.replace('http://autoecole-turbo.com/')
        return null
    }

	return (
		<section id='portfolio' className='portfolio'>
            {portfolioHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    titleCol2={item.titleCol2}
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={item.text1}
                    br1={item.br1 && <><br/><br/></>}
                    text2={item.text2}
                    icon1={
                        item.icon1 && 
                        <FontAwesomeIcon
                        className='portfolio__icon' 
                        icon={faGears} 
                        />
                    }
                />
            ))}
            <div className='portfolio__book'>
                <div className='portfolio__book__link' onClick={redirection}>
                    <h2 className='portfolio__book__link__title'>Auto-école<br/>Turbo</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>autoecole-turbo.com</h3>
                            <p>html css php js bootstrap</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={turbo} alt='auto-ecole-turbo'/>
                    </article>
                </div>
                <div className='portfolio__book__link'>
                    <h2 className='portfolio__book__link__title'>El<br/>Taros</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>Site restaurateur</h3>
                            <p>En cours de réalisation</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={elTaros} alt='resto'/>
                    </article>
                </div>
                <div className='portfolio__book__link'>
                    <h2 className='portfolio__book__link__title'>El<br/>Taros</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>Site restaurateur</h3>
                            <p>En cours de réalisation</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={elTaros} alt='resto'/>
                    </article>
                </div>
                <div className='portfolio__book__link'>
                    <h2 className='portfolio__book__link__title'>El<br/>Taros</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>Site restaurateur</h3>
                            <p>En cours de réalisation</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={elTaros} alt='resto'/>
                    </article>
                </div>
                <div className='portfolio__book__link'>
                    <h2 className='portfolio__book__link__title'>El<br/>Taros</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>Site restaurateur</h3>
                            <p>En cours de réalisation</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={elTaros} alt='resto'/>
                    </article>
                </div>
                <div className='portfolio__book__link'>
                    <h2 className='portfolio__book__link__title'>El<br/>Taros</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>Site restaurateur</h3>
                            <p>En cours de réalisation</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={elTaros} alt='resto'/>
                    </article>
                </div>
                <div className='portfolio__book__link'>
                    <h2 className='portfolio__book__link__title'>El<br/>Taros</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>Site restaurateur</h3>
                            <p>En cours de réalisation</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={elTaros} alt='resto'/>
                    </article>
                </div>
                <div className='portfolio__book__link'>
                    <h2 className='portfolio__book__link__title'>El<br/>Taros</h2>
                    <article className='portfolio__book__link__article'>
                        <div className='portfolio__book__link__article__info'>
                            <h3>Site restaurateur</h3>
                            <p>En cours de réalisation</p>
                        </div>
                        <img className='portfolio__book__link__article__cover'src={elTaros} alt='resto'/>
                    </article>
                </div>
            </div>
		</section>
	)
}
 
export default Portfolio