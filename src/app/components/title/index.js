import './style.css'

export default function Title({label, colorText}) {
    return <h2 className="title" style={{color:colorText + '!important'}}>{label}</h2>
}