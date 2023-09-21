import './footer.css';

function Footer(){
    return(
        <footer>
            <div className='first-div'>
                <div className='footer-about-us' >
                <h2>About Us</h2>
                    <p>
                        At shortly, we specialize in 
                        helping clients shorten their long links for easy marketting.
                        Our expert team is dedicated to ensuring that you are able to shorten and 
                        monitor your business urls so as to maximise profit and reduce cost.
                        Trust us to simplify your journey with reliable and efficient solutions.
                    </p>
                </div>
            </div>
        
            <div className='last-div'>
                <h2>Contact Us</h2>
                <ul>
                    <li>WhatsApp</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer