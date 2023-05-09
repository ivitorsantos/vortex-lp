import './style.css'

export default function MyButton({label, colorText, backgroundButton}) {
    return <button className="button" style={{color:colorText + ' !important', backgroundColor:backgroundButton + ' !important'}}>{label}</button>
}