import Image from 'next/image'

import CardInformation from '@/app/components/cardInformation'
import MiniTitle from '@/app/components/miniTitle'
import Title from '@/app/components/title'

import './style.css'

import WEARE from '../../img/we-are.jpg'
import ConsultingButton from '@/app/components/consultingButton'

export default function WhoAreUs() {
    return (
        <>
            <section className='who-we-are'>
                <div className='container'>
                    <div className='flex'>
                        <div>
                            <MiniTitle label={'QUEM SOMOS NÓS?'} />
                            <Title label={'Resultado está no NOSSO DNA!'} colorText={'#016392'} />
                            <p>Somos uma equipe de profissionais apaixonados por oferecer soluções que trazem RESULTADOS para nossos clientes. Com anos de experiência, em desenvolvimento de landing pages, marketing digital e estratégia de negócios, estamos comprometidos em ajudar nossos clientes a alcançar todos os seus objetivos através das lading pages!</p>
                            <ul>
                                <li>Garanta o sucesso da sua empresa.</li>
                                <li>Impacte muito mais pela internet.</li>
                            </ul>
                        </div>
                        <div className='margin-auto'>
                            <Image src={WEARE} alt='foto pessoas trabalhando feliz' />
                        </div>
                    </div>
                    <div className='flex business-performance'>
                        <h2>Nossa performance só cresce!</h2>
                        <CardInformation data={'150+'} description={'Clientes satisfeitos'} />
                        <CardInformation data={'700+'} description={'Paginas desenvolvidas'} />
                        <CardInformation data={'45M+'} description={'De visitas recebidas'} />
                    </div>
                    <div className='cta'>
                        <ConsultingButton href={'#'} label={'Marcar consultoria gratuita'} selectColor={'#016392'} borderColor={'#016392'}/>
                    </div>
                </div>
            </section>
        </>
    )
}