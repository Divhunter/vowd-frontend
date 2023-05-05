import { useNavigate } from "react-router-dom"
import { useState, useContext } from 'react'
import { login } from '../../../servicesApi/AuthApi'
import Auth from '../../../contexts/Auth'
import { removeItem } from '../../../servicesApi/LocalStorage'
import axios from "axios"
import FormInput from '../../../functions/FormInput'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Register = () => {
	const navigate = useNavigate()

	removeItem('token')

	const [ visible, setVisibility ] = useState(false)

	const { setIsAuthenticated } = useContext(Auth)

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
			placeholder: 'Mot de passe',
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
				url: 'http://localhost:4200/api/auth/register',
				credentials: true,
				data: {
					userName: values.userName,
					email: values.email,
					password: values.password
				}
			})
			.then((res) => {
				if (res.data.userNameRegError) {
					console.log(res.data.userNameRegError)
					alert(res.data.userNameRegError)
				} else if (res.data.emailRegError) {
					console.log(res.data.emailRegError)
					alert(res.data.emailRegError)
				} else if (res.data.passwordRegError) {
					console.log(res.data.passwordRegError)
					alert(res.data.passwordRegError)
				} else if (res.data.userRegError) {
					console.log(res.data.userRegError)
					alert(res.data.userRegError)
				} else {
					console.log(res.data.message)
					alert(res.data.message)
					const response = login(values)
            		setIsAuthenticated(response)
					const userId = res.data.userId
					navigate(`/home/${userId}`)
					
				}
			})
			.catch((userRegError) => {
				console.log(userRegError)
				alert(userRegError)
			})
		}
	}

return (
		<>
            <form action='' id='register' onSubmit={(e) => handleSubmit(e)}>
                {inputs.map(input => (
                    <FormInput 
                        key={input.id} 
                        {...input}
                        value={values[inputs.name]}
                        onChange={(e) => onChange(e)}
                    />
                ))}
				<span className='register-password-toogle-icon toogle-icon'>
					<FontAwesomeIcon 
						icon={ visible ? faEyeSlash : faEye } 
						onClick={() => setVisibility( visibility => !visibility)}
					/>
				</span>
				<span className='register-conf-password-toogle-icon toogle-icon'>
					<FontAwesomeIcon 
						icon={ visible ? faEyeSlash : faEye } 
						onClick={() => setVisibility( visibility => !visibility)}
					/>
				</span>
                <button className='formSubmit'>S'enregistrer</button>
            </form>
		</>
	)
}
 
export default Register