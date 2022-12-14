import React, { useCallback, useState } from "react";
import './shorten.css';


function Shortening(){
    const [inputValue, setInputValue] = useState('');
    const [shortUrl, setShortUrl] = useState([]);

    const handleOnchange = (event)=>{
        setInputValue(event.target.value)
        };

    const handleOnSubmit = useCallback(()=>{
       const fetchData = async ()=>{
        if(inputValue === ''){
            alert('Please Enter a Link')
        }else{
            const getFetch = await fetch('http://localhost:3000/shorten', {
                method: 'post',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                        longUrl: inputValue 
                })       
            })
            const res = await getFetch.json()
            setShortUrl(res.shortLink);
        }
    };
    fetchData();
}, [inputValue])

    const copyToClipboard = ()=>{
        if(inputValue===""){
            console.log("Text field is empty")
        }else{
            navigator.clipboard.writeText(shortUrl)
        }
    }

    return(
        <div id="short-form">
            <div className="short-div">
                <div className="short-background">
                    <input type={'url'}
                    placeholder='Shorten a link here...'
                    onChange={handleOnchange}/>
                    <button className="btn--short--it" onClick={handleOnSubmit}>Shorten It!</button>
                </div>
                <div className="shortend-link">
                    <div className="display--shortend--link">{shortUrl}</div>
                    <button className="btn--short--it" onClick={copyToClipboard}>copy</button>
                </div>
                
            </div>
        </div>
    )
}

export {Shortening}
