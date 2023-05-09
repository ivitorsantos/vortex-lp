
import './style.css'

import MiniTitle from '@/app/components/miniTitle'
import CardProgress from '@/app/components/cardProgress'
import Title from '@/app/components/title'

import IMPACTO from '../../img/impacto.png'
import EMOCAO from '../../img/emocao.png'
import GARANTIR from '../../img/garantir.png'
    
export default function Steps() {
    return (
        <>
            <section className='progress'>
                <div className='container'>
                    <MiniTitle label={'QUAL OS PASSOS?'} />
                    <Title label={'VEJA O QUE TORNA TÃO EFICAZ AS LP IEG!'} colorText={'#016392'} />
                    <div className='flex cardProgress-content'>
                        <CardProgress step={'01'} titleStep={'Impacto na primeira impressão.'} resumeStep={'Foi provado por diversas pesquisas nas maiores portais online do mundo que seu cliente decide em até 5 segundos se continuarão navegando ou se sairão imediatamente da sua página. Por isso, é crucial que sua landing page cause um IMPACTO CORRETO na primeira impressão.'} imageStep={IMPACTO} altImageStep={'imagem de um grafico'}/>
                        <CardProgress step={'02'} titleStep={'Emocionar e provar por razão.'} resumeStep={'Segundo passo é que qualquer processo de convencimento é um processo bem complexo, todo ser humano é convencido e TOMA AS DECISÕES PELA EMOÇÃO, porém, a maioria dela tem que justificar a decisão pela RAZÃO. Então sua pagina PRECISA EMOCIONAR e tambem criar uma JUSTIFICATIVA CORRETA.'} imageStep={EMOCAO} altImageStep={'imagem de um grafico'}/>
                        <CardProgress step={'03'} titleStep={'Garantir o resgate de recurso.'} resumeStep={'O terceiro passo é o fechamento, esse momento é fundamental para conquistar o objetivo que sua lading page está destinada a cumprir. Esse momento é crucial de utilizar as tecnicas corretas para transformar visitantes em clientes. Este passo é onde vamos garantir que você receba o recurso esperado.'} imageStep={GARANTIR} altImageStep={'imagem de um grafico'}/>
                    </div>
                </div>
            </section>
        </>
    )
}