
import { useEffect, useState } from 'react'
import {BsPlus, BsX} from 'react-icons/bs'
import './style.css'

export default function Question({title, response}) {

    const [isOpen, setIsOpen] = useState(false)
    const [dataResponse, setDataResponse] = useState('')
    const [icon, setIcon] = useState(<BsPlus/>)

    
    const handleTitleClick = () => {
        if(isOpen === true) {
            setIsOpen(false)
            setDataResponse('')
            setIcon(<BsPlus/>)
        } else {
            setIsOpen(true)
            setDataResponse(response)
            setIcon(<BsX/>)

        }
    }

    return (
        <div className='question'>
            <div className='question-flex' onClick={handleTitleClick}>
                <h3>{title}</h3>
                {icon}
            </div>
            <p>{dataResponse}</p> 
        </div>
    )
}