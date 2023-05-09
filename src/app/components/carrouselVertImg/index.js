"use client"

import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

import './style.css'
import Image from 'next/image'


export default function CarrouselVertImg({imagens, widthCarrousel, heightCarrousel}) {


    const carrousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carrousel.current?.scrollWidth, carrousel.current?.offsetWidth)
        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    }, [])


    return (
       <div>
            <motion.div className='carrousel' whileTap={{cursor: 'grabbing'}} ref={carrousel} style={{height:`${heightCarrousel+50}px !important`}}>
                <motion.div className='inner' drag='x' dragConstraints={{right: 0, left: -width}} initial={{x: 250}} animate={{x:0}} transition={{duration: 0.67}}>
                   {imagens.map(item => (
                        <motion.div className='item' key={item}>
                            <Image src={item} alt={item} style={{height:`${heightCarrousel}px !important`}}/>
                        </motion.div>
                   ))}
                </motion.div>
            </motion.div>
       </div>
    )
}