import './style.css'

export default function CardContact({icon, title, label}) {


    return (
        <div className='card-contact'>
            <h3>{title}</h3>
            <p>{label}</p>
        </div>
    )
}