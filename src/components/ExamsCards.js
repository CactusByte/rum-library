import React from 'react'
import DownloadCardItem from './DownloadCardItem'
import './ExamsCards.css'

function ExamsCards() {
  return (
    <div className='cards'>
        <h1>Examenes</h1>
        <h3>QUIM</h3>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <DownloadCardItem
                    src="images/exams.jpg"
                    text="ExamenFinal_FISI-3162_y_3172_20080508"
                    label="FISI-3162/3172"
                    href='files/exams/ExamenFinal_FISI_3162_y_3172_20080508.pdf'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ExamsCards