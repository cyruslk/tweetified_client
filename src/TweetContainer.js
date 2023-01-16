import { useState, useEffect } from 'react';
import { Tweet } from 'react-twitter-widgets';
import './App.css';

function TweetContainer(props) {

    console.log(props, "-");

    return (
      <section className='tweet_outer'>
        <Tweet 
          className="tweet_inner"
          tweetId={props.tweetId} 
        /> 
      </section>  
    );
  };  

export default TweetContainer;
