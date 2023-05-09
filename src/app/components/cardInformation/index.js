import './style.css'

export default function CardInformation({data, description}) {
    return (
        <div className="cardInformation">
            <h2>{data}</h2>
            <p>{description}</p>
        </div>
    )
}