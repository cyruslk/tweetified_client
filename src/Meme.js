import { useEffect } from 'react';
import './App.css';

function Meme(props) {

  const { 
    image_path,
    orig_word,
    word,
  } = props.data;

  const {
    index
  } = props;

  let dynamicStyling =  {
    // change the image weight first
    // animation: `${index}s fadeInImages`,
    // animationFillMode: "forwards",
    // visibility: "hidden"
  }



  return (
    <div 
      style={dynamicStyling}
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
