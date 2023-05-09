import './style.css'
import {MdRocketLaunch} from 'react-icons/md'

export default function Form() {
    return (
        <div className="form">
            <div className="flex title">
                <div>
                    <MdRocketLaunch/>
                </div>
                <div>
                    <h4>Consultoria Gratuita para sua marca.</h4>
                    <h2>Agende gratuitamente!</h2>
                </div>
            </div>
            <form>
                <input type='text' placeholder='Nome Completo'/>
                <input type='mail' placeholder='Digite seu email'/>
                <input type='number' placeholder='Digite seu telefone '/>
                <button>Marcar consultoria grátis</button>
            </form>
        </div>
    )
}