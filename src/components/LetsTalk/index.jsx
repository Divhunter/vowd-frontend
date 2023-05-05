import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import BusinessForm from '../../functions/BusinessForm'
import letsTalk from '../../assets/pictures/letsTalk.png'
import { faEuro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-letsTalk.css'
import './d-letsTalk.css'

const LetsTalk = () => {

    const letsTalkHeader = pagesHeadersArray.find(el => el.title === "2")
    const letsTalkHeaderArray = []
    letsTalkHeaderArray.push(letsTalkHeader)

	return (
		<section id='letsTalk' className='letsTalk'>
            {letsTalkHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    titleCol2={item.titleCol2}
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={item.text1}
                    br1={item.br1 && <><br/><br/></>}
                    text2={item.text2}
                    br2={item.br2 && <><br/><br/></>}
                    text3={item.text3}
                    br3={item.br3 && <><br/><br/></>}
                    text4={item.text4}
                    br4={item.br4 && <><br/><br/></>}
                    text5={item.text5}
                    icon1={
                        item.icon1 && 
                        <FontAwesomeIcon
                        className='letsTalk__icon' 
                        icon={faEuro} 
                        />
                    }
                />
            ))}
            <img className='letsTalk__picture' src={letsTalk} alt='work' />
            <div className='letsTalk__discount'>10% de remise*</div>
            <ul className='letsTalk__labels'>
                <li className='letsTalk__labels__projet'>Projet</li>
                <li className='letsTalk__labels__budget'>Budget</li>
                <li className='letsTalk__labels__delai'>Délai</li>
            </ul>
            <BusinessForm />
		</section>
	)
}
 
export default LetsTalk