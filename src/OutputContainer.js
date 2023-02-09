import './App.css';
import { Tweet } from 'react-twitter-widgets';
import Meme from "./Meme";

function OutputContainer(props) {
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
      <main>
      <section className='memes_container'>
          {renderMemes}
      </section>
      </main>
    )

  };

  let renderTweet = () => {
    return (
      <section>
        <Tweet
          tweetId={tweet_id} /> 
      </section>  
    )
  }

  let checkProperty = tweet_id.hasOwnProperty('low');

  if(checkProperty){
    return null;
  }

  return (
    <section className='output'>
      <div className='output_memes'>
        {renderMemes()}
      </div>
      <div className='output_Tweet'>
        {renderTweet()}
      </div>
    </section>
  );
}

export default OutputContainer;

// {renderMemes()}

