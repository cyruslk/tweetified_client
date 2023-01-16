import { useState, useEffect } from 'react';
import './App.css';

function Meme(props) {

  const [isDisplayed, setIsDisplayed] = useState(false)

  const {
    index, 
    tokensLength
  } = props;

  const { 
    image_path,
    orig_word,
    word
  } = props.data;


  useEffect(() => {
    const timer = setTimeout(() => setIsDisplayed(!isDisplayed), 500*index);
  }, []);
  

  let renderDynamicVisibility = () => {
    if (isDisplayed){
      return "visible";
    }else{
      return "hidden";
    }
  }

  return (
    <div 
      style={{visibility: renderDynamicVisibility()}}
      className='meme_outer'>
      <div className="img_component">
        <span className="first_span">{orig_word}</span>
        <img src={image_path} />
        <span className="last_span">{word}</span>
      </div>
    </div>
  );
  
}

export default Meme;
