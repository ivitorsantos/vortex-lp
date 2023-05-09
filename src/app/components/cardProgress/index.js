import Image from 'next/image'
import './style.css'

export default function CardProgress({step, titleStep, resumeStep, imageStep, altImageStep}) {
    return (
        <div className='cardProgress'>
            <span>{step}</span>
            <h2>{titleStep}</h2>
            <p>{resumeStep}</p>
            <Image src={imageStep} alt={altImageStep} width={100} height={100}/>
        </div>
    )
}