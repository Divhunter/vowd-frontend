import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { removeItem } from '../../servicesApi/LocalStorage'
import axios from "axios"
import FormInput from '../../functions/FormInput'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewPass = () => {

    const navigate = useNavigate()

	removeItem('token')

	const [ visible, setVisibility ] = useState(false)

	const [ visible2, setVisibility2 ] = useState(false)

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
			type: visible2 ? 'text' : 'password',
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
                url: 'https://vowd-project-app-api.onrender.com/api/auth/updatePassword',
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
				<p className='website_text'>
					<span className='website_text_span'>
						<strong>
							vowd
						</strong>
					</span>
				</p>
                <div>
				<h1 className='headerModal'>-NOUVEAU MDP-</h1>
                    <form action='' id='updatePassword' onSubmit={(e) => handleSubmit(e)}>
                        {inputs.map(input => (
                            <FormInput 
                                key={input.id} 
                                {...input}
                                value={values[inputs.name]}
                                onChange={(e) => onChange(e)}
                            />
                        ))}
						<span toogle='#password' className='newPass-password-toogle-icon toogle-icon eye'>
							<FontAwesomeIcon 
								icon={ visible ? faEyeSlash : faEye } 
								onClick={() => setVisibility( visibility => !visibility)}
							/>
						</span>
						<span 
							toogle='#confirmPassword' 
							className='newPass-conf-password-toogle-icon toogle-icon eye'
						>
							<FontAwesomeIcon 
								icon={ visible2 ? faEyeSlash : faEye } 
								onClick={() => setVisibility2( visibility => !visibility)}
							/>
						</span>
                        <button 
                            className='formSubmit newPass-submit'
                        >Envoyez
                        </button>
                    </form>
                </div>
			</section>
		</>
	)
}
 
export default NewPass