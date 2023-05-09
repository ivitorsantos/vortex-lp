
import './style.css'

import MiniTitle from '@/app/components/miniTitle'
import Title from '@/app/components/title'
import CardStatitic from '@/app/components/cardStatistic'

import FATURAMENTO from '../../img/faturamento.png'
import LEADS from '../../img/leads.png'
import ROI from '../../img/roi.png'
import CAC from '../../img/cac.png'
    
export default function Statitics() {
    return (
        <>
            <section className='statitics'>
                <div className='container'>
                    <MiniTitle label={'ALGUMAS ESTATÍSTICAS!'} />
                    <Title label={'VEJA O IMPACTO QUE A LADING PAGE IEG CAUSA EM SEU NEGOCIO!'} colorText={'#016392'} />
                    <div className='flex statitics-content'> 
                        <CardStatitic titleStatistic={'FATURAMENTO'} resumeStatistic={'As landing pages direcionadas e específicas aumentam as taxas de conversão em até 300%.'} imageStatistic={FATURAMENTO} altImageStatistic={'grafico'} />
                        <CardStatitic titleStatistic={'LEADS'} resumeStatistic={'As landing pages é a forma mais eficaz de gerar leads. Empresas que têm landing pages geram 75% mais leads.'} imageStatistic={LEADS} altImageStatistic={'grafico'} />
                        <CardStatitic titleStatistic={'ROI'} resumeStatistic={'As Empresas que usam landing pages IEG geralmente obtêm um ROI mais alto. Apenas um aumento de 1% na taxa de conversão da pagina pode levar a um aumento de 10% no ROI.'} imageStatistic={ROI} altImageStatistic={'grafico'} />
                        <CardStatitic titleStatistic={'CAC'} resumeStatistic={'As landing pages podem ajudar a reduzir o CAC (custo por aquisição), permitindo que as empresas gerem leads mais qualificados e economizem em outras formas de publicidade.'} imageStatistic={CAC} altImageStatistic={'grafico'} />
                     </div>
                </div>
            </section>
        </>
    )
}