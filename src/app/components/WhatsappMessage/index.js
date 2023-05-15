"use client"

import Link from 'next/link'
import './style.css'
import { BsWhatsapp } from 'react-icons/bs'
import { useEffect } from 'react'


export default function WhatsappMessage({label, colorText}) {

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('whatsapp-message').style.display = 'flex'
        }, 3000);
    }, [])
    

    return (
        <div className='whatsapp-message' id='whatsapp-message'>
            <Link href={'https://www.google.com'} target='_blank' className='link'>Entre em contato conosco!</Link>
            <Link href={'https://www.google.com'} target='_blank' className='whatsapp'>
                <BsWhatsapp />
            </Link>
        </div>
    )
}