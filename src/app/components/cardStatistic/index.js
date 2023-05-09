import Image from 'next/image'
import './style.css'

export default function CardStatitic({titleStatistic, resumeStatistic, imageStatistic, altImageStatistic}) {
    return (
        <div className='cardStatistic'>
            <h2>{titleStatistic}</h2>
            <span></span>
            <p>{resumeStatistic}</p>
            <Image src={imageStatistic} alt={altImageStatistic} width={100} height={100}/>
        </div>
    )
}