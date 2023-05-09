'use client'

import './style.css'

import MiniTitle from '@/app/components/miniTitle'
import Testimony from '@/app/components/testimony'
import Title from '@/app/components/title'
import CarrouselVertImg from '@/app/components/carrouselVertImg'

import PERFIL from '../../img/perfil.jpg'

import image1 from '../../img/1.jpg'
import image2 from '../../img/2.jpg'
import image3 from '../../img/3.jpg'
import image4 from '../../img/4.jpg'

const images = [image1, image2, image3, image4, image1, image2, image3, image4]

export default function Depositions() {
    return (
        <section className='depositions'>
            <div className='container'>
                <MiniTitle label={'ALGUNS DEPOIMENTOS'} />
                <Title label={'O QUE OS NOSSOS CLIENTES DIZEM DE NÓS.'} colorText={'#016392'} />
                <div className='testimony-content'>
                    <Testimony img={PERFIL} office={'CEO'} name={'Vitor Santos'} testimony={'Essa empresa é incrivel e maravilhosa, por isso recomendo a todos ela é excelente.'} />
                    <Testimony img={PERFIL} office={'CEO'} name={'Vitor Santos'} testimony={'Essa empresa é incrivel e maravilhosa, por isso recomendo a todos ela é excelente.'} />
                    <Testimony img={PERFIL} office={'CEO'} name={'Vitor Santos'} testimony={'Essa empresa é incrivel e maravilhosa, por isso recomendo a todos ela é excelente.'} />
                </div>
                <div className='carrousel-content'>
                    <CarrouselVertImg imagens={images} heightCarrousel={390} />
                </div>
            </div>
        </section>
    )
}

