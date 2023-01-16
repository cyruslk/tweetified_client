import './App.css';
import { useEffect, useState } from "react";
import Meme from "./Meme";
import TweetContainer from "./TweetContainer";

function OutputContainer(props) {

  const {
    tweet_id,
    tokens
  } = props.data;

  let renderMemes = () => {
    let tokensLength = tokens.length;
    let renderMemes = tokens.map(
      (ele, index) => {
      return (
        <Meme
          key={index}
          index={index}
          data={ele}
          tokensLength={tokensLength}
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
      <TweetContainer
        tweetId={tweet_id}
      />  
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
