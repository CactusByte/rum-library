import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Resources</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img-9.jpg"
                    text="Calculadora Grafica"
                    label="Desmos"
                    href='https://www.desmos.com/calculator'
                    />
                    <CardItem
                    src="images/img-8.jpg"
                    text="Wolfram Aplha"
                    label="Calculadora"
                    href='https://www.wolframalpha.com/'
                    />
                    <CardItem
                    src="images/img-7.jpg"
                    text="Notaso"
                    label="Profesores"
                    href='https://www.notaso.com/'
                    />
                    <CardItem
                    src="images/img-5.jpg"
                    text="Quillbot Paraphrasing Tool"
                    label="Paraphrasing"
                    href='https://quillbot.com/'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img-4.jpg"
                    text="Canva"
                    label="Digital Design"
                    href='https://www.canva.com/es_419/'
                    />
                    <CardItem
                    src="images/img-3.jpg"
                    text="Chegg Study Resources"
                    label="Tutoring"
                    href='https://www.chegg.com/'
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="freeCodeCamp"
                    label="Coding"
                    href='https://www.freecodecamp.org/'
                    />
                    <CardItem
                    src="images/img-1.jpg"
                    text="Codecademy"
                    label="Coding"
                    href='https://www.codecademy.com/'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img-6.jpg"
                    text="Google Docs"
                    label="Docs"
                    href='https://www.google.com/docs/about/'
                    />
                    <CardItem
                    src="images/img-11.jpg"
                    text="Khan Academy"
                    label="Tutoring"
                    href='https://www.khanacademy.org/'
                    />
                    <CardItem
                    src="images/img-12.jpg"
                    text="LinkedIn"
                    label="Networking"
                    href='https://www.linkedin.com/'
                    />
                    <CardItem
                    src="images/img-10.jpg"
                    text="Outlook Mail"
                    label="Mail"
                    href='https://outlook.office.com/'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards