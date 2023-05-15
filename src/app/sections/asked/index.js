'use client'
import './style.css'

import Image from 'next/image'

import MiniTitle from '@/app/components/miniTitle'
import Title from '@/app/components/title'
import Question from '@/app/components/question'

import QUESTIONS from '../../img/questions.jpg'



export default function Asked() {
    return (
        <section className='asked'>
            <div className='container'>
                <div className='flex'>
                    <div className=''>
                        <Image src={QUESTIONS} alt='Foto de uma pessoa digitando uma pergunta'/>
                    </div>
                    <div className='askeds-content'>
                        <MiniTitle label={'Perguntas mais frequentes -'} />
                        <Title label={'Você tem alguma dúvida?'} colorText={'#04004d'} />
                        <Question title={'Como vou receber a LP IEG?'} response={'Iremos manter contato via WhatsApp, discord ou zoom para conversarmos e discutirmos sobre sua necessidade. Apos finalizarmos todos os ajustes. De bonus vou configurar a pagina direto em sua hospedagem.'}/>
                        <Question title={'Qual o preço da LP IEG?'} response={'Não temos um valor fixo para as lading page, tudo depende do que você vai precisar e de que combinarmos via WhatsApp.'}/>
                        <Question title={'Qual o prazo de entrega?'} response={'O prazo de entrega é rápido, são poucos dias uteis, porem, tudo depende de como está nossa agenda, não perca tempo!'}/>
                        <Question title={'Qual o seu contato?'} response={'Você pode entrar em contato via nosso email contato@vortexlp.com ou pelo botão do WhatsApp no canto inferior direito.'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

