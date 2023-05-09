import {FaCheck} from 'react-icons/fa'
import './style.css'

export default function Verify({label}) {
    return (
        <p className='verify'><span><FaCheck/></span> {label}</p>
    )
}