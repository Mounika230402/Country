import { useNavigate } from 'react-router-dom';
import {signInWithGooglePopup} from '../firebase'
import image from './google_icon.png'
import "./login.css"
const SignIn = () => {
    const navigate=useNavigate()
    const logGoogleUser = async () => {
            const response = await signInWithGooglePopup();
            console.log(response);
            navigate("/Country")
        }
    return (
            <div className='sign-in-container'>
                <button onClick={logGoogleUser} className="sign-in-button" style={{border:"1px solid ",width:"30vw"}}><img src={image} alt="Google" width={50}/>Continue With Google</button>
            </div>
        )
    }
    export default SignIn;