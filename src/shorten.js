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
                     const res = await fetch('http://localhost:3000/shorten', {
                        //https://shortit-etr8.onrender.com/shorten
                     method: 'post',
                     headers: {'content-type': 'application/json'},
                     body: JSON.stringify({
                             longUrl: inputValue 
                     })       
                 })
                 const data = await res.json(); 
                 console.log(data);
                 if(!data){
                    setFeedback("Unable to show result at the moment");
                    setIsSubmitting(false);
                 }
                
                 setShortUrl(data.shortLink);
                }
             }
                
        }catch(err){
            console.log(err)
        }
    };
    fetchData();
}, [inputValue])

    const copyToClipboard = ()=>{
            navigator.clipboard.writeText(shortUrl);
            setIsCopied(true)
    }

    return(
        <div id="short-form">
            <div className="short-div">
                <div className="short-background">
                    <input type={'url'}
                    placeholder='Shorten a link here...'
                    onChange={handleOnchange}/>
                    <button disabled={isSubmitting}
                    className="btn--short--it" onClick={handleOnSubmit}>{!isSubmitting?"Shorten it!":"Loading..."}</button>
                </div>
                <p className="feedback">{feedback}</p>
                <div id="shortend-link">
                    <div className="display--shortend--link">{shortUrl}</div>
                    <button className="btn--copy" onClick={copyToClipboard}>{isCopied?"Copied":"Copy"}</button>
                </div>
                
            </div>
        </div>
    )
}

export {Shortening}
