import Image from 'next/image'
import MiniTitle from '../miniTitle'
import './style.css'

export default function Testimony({img ,office, name, testimony}) {
    return (
        <div className='testimony'>
            <div className='img'>
                <Image src={img} alt='foto do cliente que está testemunhando' />
            </div>
            <div className='text-content'>
                <MiniTitle label={office} />
                <h2>{name}</h2>
                <p>{testimony}</p>
            </div>
        </div>
    )
}