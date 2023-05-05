import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { removeItem } from '../../servicesApi/LocalStorage'
import axios from "axios"
import FormInput from '../../functions/FormInput'
import { Link } from 'react-router-dom'
import Video from '../../components/Video'
import vowd from '../../assets/brands/logo-vowd.png'
import { faCirclePlay, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewPass = () => {

    const navigate = useNavigate()

	removeItem('token')

	const [ visible, setVisibility ] = useState(false)

    const[values, setValues] = useState({
		userName:'',
		email:'',
		password:'',
		confirmPassword:''
	})

    const inputs = [
		{
			id: 'userName',
			name: 'userName',
			type: 'text',
			placeholder: 'Pseudo',
			label: 'UserName',
			required: true
		},
		{
			id: 'email',
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			label: 'Email',
			required: true
		},
		{
			id: 'password',
			name: 'password',
			type: visible ? 'text' : 'password',
			placeholder: 'Nouveau mot de passe',
			label: 'Password',
			required: true
		},
		{
			id: 'confirmPassword',
			name: 'confirmPassword',
			type: visible ? 'text' : 'password',
			placeholder: 'Confirmation du passe',
			label: 'ConfirmPassword',
			required: true
		}
	]

	const onChange = (e) => {
		setValues({ ...values, [e.target.name] : e.target.value })
	}

	const handleSubmit = async (e) => {

        e.preventDefault()

        if (values.password !== values.confirmPassword) {
            alert('Les mots de passe ne correspondent pas !')
        } 
        else {
            await axios({
                method: 'post',
                url: 'http://localhost:4200/api/auth/updatePassword',
                credentials: true,
                data: {
                    userName: values.userName,
                    email: values.email,
                    password: values.password
                }
            })
            .then((res) => {
                if (res.data.userUpdateError) {
                    console.log(res.data.userUpdateError)
                    alert(res.data.userUpdateError)
                } else {
                    console.log(res.data.messageUpdate)
                    alert(res.data.messageUpdate)
                    navigate('/')
                }
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
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
                <div>
                    <br/>
                    <h1 id='modal-Title-updatePassword'>Saisissez vos informations :</h1>
                    <form action='' id='updatePassword' onSubmit={(e) => handleSubmit(e)}>
                        {inputs.map(input => (
                            <FormInput 
                                key={input.id} 
                                {...input}
                                value={values[inputs.name]}
                                onChange={(e) => onChange(e)}
                            />
                        ))}
						<span className='newPass-password-toogle-icon toogle-icon'>
							<FontAwesomeIcon 
								icon={ visible ? faEyeSlash : faEye } 
								onClick={() => setVisibility( visibility => !visibility)}
							/>
						</span>
						<span className='newPass-conf-password-toogle-icon toogle-icon'>
							<FontAwesomeIcon 
								icon={ visible ? faEyeSlash : faEye } 
								onClick={() => setVisibility( visibility => !visibility)}
							/>
						</span>
                        <button 
                            className='formSubmit'
                        >Envoyez
                        </button>
                    </form>
                </div>
			</section>
		</>
	)
}
 
export default NewPass