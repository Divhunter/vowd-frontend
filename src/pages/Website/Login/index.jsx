import { useNavigate } from "react-router-dom"
import { useState, useContext } from 'react'
import { login } from '../../../servicesApi/AuthApi'
import Auth from '../../../contexts/Auth'
import { removeItem } from '../../../servicesApi/LocalStorage'
import axios from "axios"
import FormInput from '../../../functions/FormInput'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {

	removeItem('token')

	const [ visible, setVisibility ] = useState(false)

	const { setIsAuthenticated } = useContext(Auth)

    const[values, setValues] = useState({
		userName:'',
		email:'',
		password:''
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
			type: 'text',
			placeholder: 'Email',
			label: 'Email',
			required: true
		},
		{
			id: 'password',
			name: 'password',
			type: visible ? 'text' : 'password',
			placeholder: 'Mot de passe',
			label: 'Password',
			required: true
		}
	]

	const onChange = (e) => {
		setValues({ ...values, [e.target.name] : e.target.value })
	}

	const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
		
        try {
            const response = login(values)
            setIsAuthenticated(response)
			send()
        }  
		catch ({ response }) {
			navigate('/*')
        }   
    }

//====================================================
// Fonction d'envoi du formulaire 
//====================================================

	const send = async () => {

		await axios({
			method: 'post',
			url: 'https://vowd-project-app-api.onrender.com/api/auth/login',
			credentials: true,
			data: {
				userName: values.userName,
				email: values.email,
				password: values.password,
			}
		})
		.then((res) => {
			if (res.data.userLogError) {
				console.log(res.data.userLogError)
				alert(res.data.userLogError)
			} else if (res.data.passwordLogError) {
				console.log(res.data.passwordLogError)
				alert(res.data.passwordLogError)
			} else {
				const userId = res.data.userId
				navigate(`/vowd/home/${userId}`)
			}
		})
		.catch((error) => {
			console.log(error.message)
			alert(error.message)
			navigate('/*')
		})
	} 

return (
		<>
            <form action='' id='login' onSubmit={(e) => handleSubmit(e)}>
                {inputs.map(input => (
					<FormInput 
                        key={input.id} 
                        {...input}
                        value={values[inputs.name]}
                        onChange={(e) => onChange(e)}
                    />
                ))}
				<span className='connexion-password-toogle-icon toogle-icon'>
					<FontAwesomeIcon 
						icon={ visible ? faEyeSlash : faEye } 
						onClick={() => setVisibility( visibility => !visibility)}
					/>
				</span>
				<button className='formSubmit'>Se connecter</button>
            </form>
		</>
	)
}
 
export default Login