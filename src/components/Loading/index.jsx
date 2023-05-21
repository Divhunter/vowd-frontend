import { ThreeDots } from 'react-loader-spinner'

// styles
import './m-loading.css'

const Loading = () => (
    <div className='loading'>
        <ThreeDots
            height='65'
            width='65'
            color='white' 
        />
    </div>
)

export default Loading