import React from "react";
import './section.css';

function Section(){
    return(
    <section>
            <div className="box">
                <h1>
                    {'More than just shorter links'}
                </h1>
                    <p> {`Build your brand’s recognition 
                    and get detailed insights on how your links are performing.`}
                    </p>
                    <div className="sec-btn"><button>{'Get Started'}</button></div>
             </div>
             <div className="img-box">
                <img src="/images/illustration-working.svg" alt="workstation"/>
             </div>
    </section>
    )
}

export default Section;