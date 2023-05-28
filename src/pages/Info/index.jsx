import { removeItem } from '../../servicesApi/LocalStorage'

// styles
import './m-info.css'

const Info = () => {
    window.scrollTo(0,0)
	removeItem('token')

return (
		<>
            <section className='info'>
                <p className='info-text'>
                    <br/>
                    <br/>
                    Nous vous remercions pour votre confiance.
                    <br/>
                    <br/>
                    Nos services mettent tout en oeuvre pour satisfaire votre demande.
                    <br/>
                    <br/>
                    Nous vous enverrons un lien sur votre adresse email pour la réinitialisation de votre mot de passe.
                    <br/>
                    <br/>
                    Pout tout autre question, veuillez nous contacter sur contact@vowd.fr.
                    <br/>
                    <br/>
                    Avec nos meilleurs salutations.
                </p>
            </section>
		</>
	)
}
 
export default Info