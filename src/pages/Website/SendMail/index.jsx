import { useNavigate } from "react-router-dom"
import { useState, useContext } from 'react'
import { login } from '../../../servicesApi/AuthApi'
import Auth from '../../../contexts/Auth'
import { removeItem } from '../../../servicesApi/LocalStorage'
import axios from "axios"
import FormInput from '../../../functions/FormInput'

const SendMail = () => {

	removeItem('token')

	const { setIsAuthenticated } = useContext(Auth)

    const[values, setValues] = useState({
		userName:'',
		email:''
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
			url: 'https://vowd-project-app-api.onrender.com/api/auth/sendMail',
			credentials: true,
			data: {
				userName: values.userName,
				email: values.email,
			}
		})
		.then((res) => {
			if (res.data.userSendError) {
				console.log(res.data.userSendError)
				alert(res.data.userSendError)
			} else {
				console.log(res.data.messageSend)
                alert(res.data.messageSend)
				const userId = res.data.userId
				navigate(`/info/${userId}`)
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
            <form action='' id='sendMail' onSubmit={(e) => handleSubmit(e)}>
                {inputs.map(input => (
                    <FormInput 
                        key={input.id} 
                        {...input}
                        value={values[inputs.name]}
                        onChange={(e) => onChange(e)}
                    />
                ))}
                <button 
                    className='formSubmit'
                >Envoyez
                </button>
            </form>
		</>
	)
}
 
export default SendMail