import React, { useCallback, useState } from "react";
import './shorten.css';


function Shortening(){
    const [inputValue, setInputValue] = useState('');
    const [shortUrl, setShortUrl] = useState([]);
    const [feedback, setFeedback] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCopied, setIsCopied] = useState(false);


    const validateUrl = (url)=>{
        try{
           let link = new URL(url);
            if(link){
                return true
            } 
        }catch(err){
            console.log(err)
            return false
        }
    }
    
    const handleOnchange = (event)=>{
        setInputValue(event.target.value)
        };

    const handleOnSubmit = useCallback(()=>{
       const fetchData = async ()=>{
        try{
            if(inputValue === ''){
                setFeedback("URL must not be Empty!")
             }else{
                let checkUrl = validateUrl(inputValue);
                if(checkUrl === false){
                    setFeedback("Please Provide a valid URL")
                }else{
                    setIsSubmitting(true);
                     const res = await fetch('https://shortit-etr8.onrender.com/shorten', {
                        // http://localhost:3000/shorten
                     method: 'post',
                     headers: {'content-type': 'application/json'},
                     body: JSON.stringify({
                             longUrl: inputValue 
                     })       
                 })
                  if(!res.ok){
                    setIsSubmitting(false);
                    setFeedback("Temporary server error, unable to shorten link");
                 }
                 if(res.ok){
                    const data = await res.json(); 
                    setIsSubmitting(false);
                     setShortUrl(data);
                 }
                }
             }
                
        }catch(err){
            //console.log(err)
            setFeedback("Internal Server Error, Please try again later")
        }
    };
    fetchData();
}, [inputValue])

    const copyToClipboard = ()=>{
            navigator.clipboard.writeText(shortUrl.shortId);
                setIsCopied(true);
    }

    return(
        <div id="short-form">
                <div className="short-background">
                    <label>
                        <input type={'url'}
                        placeholder='Shorten a link here...'
                        onChange={handleOnchange}/>
                    </label>
                    <div className="shorten-btn-box">
                        <button disabled={isSubmitting}
                            className="btn--short--it" onClick={handleOnSubmit}>{!isSubmitting?"Shorten it!":"Loading..."}
                        </button>
                    </div>
                </div>
                <p className="feedback">{feedback}</p>
                <div className={shortUrl.shortId?"short-background":"hide-copy"}>
                    <div className="display--shortend--link">{shortUrl.shortUrl}</div>
                    <div className="shorten-btn-box">
                        <button className="btn--copy" onClick={copyToClipboard}>
                            {isCopied?"Copied":"Copy"}
                        </button>
                    </div>
                </div>
        </div>
    )
}

export {Shortening}
