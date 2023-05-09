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
                        <Question title={'Pergunta numero um?'} response={'Resposta numero um, resposta numero um, resposta numero um, resposta numero um'}/>
                        <Question title={'Pergunta numero dois?'} response={'Resposta numero dois, resposta numero dois, resposta numero dois, resposta numero dois'}/>
                        <Question title={'Pergunta numero tres?'} response={'Resposta numero dois, resposta numero dois, resposta numero dois, resposta numero dois'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

