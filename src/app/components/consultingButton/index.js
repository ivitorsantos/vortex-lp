import Link from 'next/link'
import './style.css'

export default function ConsultingButton({href, label, selectColor, borderColor}) {
    return (
        <Link className={'consulting-button'} href={href} style={{color: selectColor, border: `solid 2px ${borderColor}`}}>{label}</Link>
    )
}