import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted />
        <h1>Bienvenidos a RUM Library</h1>
        <p>Donde encuentras todo lo que tu profesor no te enseña</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Asignaciones
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Examenes
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;