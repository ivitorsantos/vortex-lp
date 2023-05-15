'use client'

import './style.css'

import MiniTitle from '@/app/components/miniTitle'
import Title from '@/app/components/title'
import CarrouselVertImg from '@/app/components/carrouselVertImg'

import image1 from '../../img/1.jpg'
import image2 from '../../img/2.jpg'
import image3 from '../../img/3.jpg'
import image4 from '../../img/4.jpg'

const images = [image1, image2, image3, image4]

export default function Portifolio() {
    return (
        <section className='depositions'>
            <div className='container'>
                <MiniTitle label={'ALGUNS TRABALHOS'} />
                <Title label={'VEJA ALGUMAS LPS DE SUCESSO.'} colorText={'#016392'} />
                <p>Por motivos de motivos de segurança todo conteúdo em texto e imagens reais foram removidos.</p>
                <div className='carrousel-content'>
                    <CarrouselVertImg imagens={images} heightCarrousel={480}/>
                </div>
            </div>
        </section>
    )
}

