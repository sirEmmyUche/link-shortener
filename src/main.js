import React from 'react';
import { Shortening } from './shorten';
import Section from './section';
import { CardList } from './cardList';



function Main (){
    return(
        <main>
            <div>
                <Section/>
                <Shortening/>
                <CardList/>  
            </div>
        </main>
    )
}

export {Main}