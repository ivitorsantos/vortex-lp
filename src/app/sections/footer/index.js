import {BsInstagram, BsFacebook, BsYoutube} from 'react-icons/bs'
import './style.css'

import Link from 'next/link'
import Image from 'next/image'

import LOGO from '../../img/logo.svg'

export default function Footer() {
    return (
        <footer className='footer'>
           <Image src={LOGO} alt='foto da logo da Vortexs LPs' />
            <div className='call'>
                <h2>Marque sua consultoria gratuita!</h2>
                <p>Fale com nossa equipe e descubra a melhor lading page para seu negocio!</p>
                <Link href={''}>Marcar consultoria</Link>
            </div>
            <div>
                <ul>
                    <li><Link href={''}><BsFacebook/> Facebook</Link></li>
                    <li><Link href={''}><BsInstagram/> Instagram</Link></li>
                    <li><Link href={''}><BsYoutube/> Youtube</Link></li>
                </ul>
            </div>
            <div className='copyright'>
                <p>2023 © Vortex LPs - Creative Consulting Business </p>
            </div>
        </footer>
    )
}

