import Link from 'next/link'
import { AiFillPlayCircle, AiFillCheckSquare } from 'react-icons/ai'

import './style.css'

import Image from 'next/image'

import Verify from '@/app/components/verify'
import MiniPlayer from '@/app/components/miniPlayer'

import LOGO from '../../img/logo.svg'


export default function Hero() {
    return (
        <>
            <main className='mainContent'>
                <div className='container'>
                    <div className='flex'>
                        <div className='textContent'>
                            <div className='logo'>
                                <Image src={LOGO} alt='logo Vortex LPs' />
                                <h2>Vortex - LPs</h2>
                            </div>
                            <h1>Descubra como nos transformamos cliques em resultado com as <span>LADING PAGES IEG</span>!</h1>
                            <p>Nos da Vortex criamos experiências únicas para seu público através das lading pages e aumentamos suas conversões. Assista ao nosso vídeo exclusivo de poucos minutos e descubra a importância e o impacto que uma lading page IEG pode causar no seu negocio. Veja como a empresa aumentou seu lucro em 335% com apenas uma página!</p>
                            <div className='call-actions'>
                                <Link href={'#'}><AiFillCheckSquare /> Consultoria grátis</Link>
                                <Link href={'#'}><AiFillPlayCircle /> Assitir video</Link>
                            </div>
                        </div>
                        <div className='player-content'>
                            <MiniPlayer />
                        </div>
                    </div>
                    <div className='verifys-content'>
                        <Verify label={'Alta conversão.'} />
                        <Verify label={'Pagina 100% otimizada.'} />
                        <Verify label={'Boa experiencia de usuario.'} />
                    </div>
                    <div className='separator'></div>
                </div>
            </main>
        </>
    )
}