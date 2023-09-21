import React from 'react';
import { Shortening } from './shorten';
import Section from './section';





function Main (){
    return(
        <main>
            <div>
                <Section/>
                <Shortening/>
            </div>
        </main>
    )
}

export {Main}