import ReactPlayer from 'react-player'
//import vdo from '../../assets/video/vdo.mp4'

// styles
import './m-video.css'
import './t-video.css'
import './d-video.css'

const Video = () => {
    
	return (
		<div className='vdo'>
			<ReactPlayer 
                //url={vdo}
                controls
                playing
                muted
                margin='auto'
                width='80vw'
                height='auto'
            />
		</div>
	)
}
 
export default Video