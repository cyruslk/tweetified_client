import './App.css';
import { Tweet } from 'react-twitter-widgets';
import Meme from "./Meme";

function OutputContainer(props) {

  console.log(props, "-OutputContainer");

  const {
    tweet_id,
    tokens
  } = props.data;

  let renderMemes = () => {
    let renderMemes = tokens.map(
      (ele, index) => {
      return (
        <Meme
          key={index}
          data={ele}
        />  
      )
    })
    return (
      <section className='meme_component'>
          {renderMemes}
      </section>  
    )

  };

  let renderTweet = () => {
    return (
      <section>
        <Tweet tweetId={tweet_id} /> 
      </section>  
    )
  }

  return (
    <div className='output_container'>  
      {renderTweet()}
      {renderMemes()}
    </div>
  );
}

export default OutputContainer;
