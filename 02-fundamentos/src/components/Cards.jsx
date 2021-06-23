import React from 'react'
import Card from './Card'
import cards from '../cards.json'

export const Cards = () => {

    const cardContent = cards;

    
    // <React.Fragments> == <> --> Se usa para que a nivel HTML no se vean divs anidados
    return (
        <>
            {cardContent.map(({lang, url, fcolor, scolor}) => {
                return  <Card key={lang} lang={lang} img={url} fcolor={fcolor} scolor={scolor}/>
            })}
        </>
    )
}
