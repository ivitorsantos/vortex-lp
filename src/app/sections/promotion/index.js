import Image from 'next/image'

import './style.css'

import CONSULTOR from '../../img/consultor.png'
import MyButton from '@/app/components/myButton'

import LOGO from '../../img/logo.svg'

export default function Promotion() {
    return (
        <>
            <section className='call-to-action'>
                <div className='container'>
                    <div className='callBoard'>
                        <div className='flex'>
                            <div className='text-content'>
                                <h2>Aproveite e faça uma consultoria <span>gratuita</span>!</h2>
                                <p>Clique no botão abaixo e entre em contato conosco para marcarmos sua consultoria para tirarmos  todas as suas dúvidas. É Grátis!</p>
                                <MyButton label={'APROVEITAR GRATIS'} backgroundButton={'#00c389'} colorText={'#000000'} />
                            </div>
                            <div className='image-content'>
                                <Image src={CONSULTOR} alt='carton de uma pessoa recebendo consultoria via mensagem' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}