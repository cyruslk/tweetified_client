import OutputContainer from "./OutputContainer";
import axios from "axios";
import { Tweet } from 'react-twitter-widgets';
import { useEffect, useState } from "react";
import React from "react";
import './App.css';

function App(){

  const [mainData, setData] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      const data = await axios('https://memeified-server.herokuapp.com/entries');
      setData(data.data.data);
    }

    fetchData()
    .catch(console.error);;

  }, [])

  let renderOutputContainers = () => {

    if(mainData){

      const shuffled = mainData.sort(() => 0.5 - Math.random());
      let randomlySelected = shuffled.slice(0, 10);

      let mainDataMaped = randomlySelected
      .filter((ele, index) => ele.tweet_id !== Object)
      .filter((ele,index) => index < 15)
      .map((ele, index) => {
        return (
            <OutputContainer key={index} data={ele} />
        )
      })
      return mainDataMaped;
    }
  };


  let renderLoading = () => {
    if(!mainData){
      return (
        <section className="loading_screen">
          <div>LOADING</div>
        </section>
      )
    }
  };

  let renderRationaleContainer = () => {
    return (
      <div>
      <div className="title_project">
          TWEETIFIED
      </div> 
      <section className="rationale">
        <div className="rationale_left">
        <p>
          TWEETIFIED is a Web App that combines the Twitter, Google and Tensorflow image recognition APIs in order to translate words by words into internet memes the textual content of randomly selected news tweets. Updated at each 30 minutes intervals with a new entry randomly sourced from a list of popular news providers, the project’s process moreover performs the following procedural authorship:
        </p>

        <ol>
          <li>
              First it randomly targets the Twitter account of a news company amongst a list of popular news channels. 
          </li>
          <li>
            The last published tweet of this selected news Twitter account is then retrieved; Its text content is splitted into a list of words.
          </li>
          <li>
            For each word of that Tweet, a Google image request is operated. The source image corresponding to the best prediction of the inputted Tweet’s word is saved. 
          </li>
          <li>
          From the saved Google image of the imputed word, a Tensorflow image recognition program trained on the mobilenet dataset returns a semantic prediction, corresponding in other words to what AI “sees” on the image. The prediction is saved.
          </li>
          <li>
          Drawing from the ubiquitous internet meme template where two sequences of words are displayed at the top and bottom of a background image, the app creates the meme. The initial word is at the top, the Google image translation of that word in the middle and the AI returned prediction is at the bottom.
          </li>
          <li>
          The app then displays side by side an iframe of the initial tweet and the generated sequence of memes. In addition, a call to action/button located on the page invites the visitor to shuffle the output.
          </li>
        </ol>

        <p>
          TWEETIFIED is a critique of social media platforms and their dynamics in turning our lives into a constant spectacle - a spectacle we observe through the mediation of these online platforms. From this standpoint, it draws from Guy Debord’s The Society of the Spectacle (Debord, 1967) in creating a humoristic and absurd version of these Tweets - Tweets that already contribute to the news spectacle - by turning them into memes; memes whose sole purpose is to entertain.  Using humour and satire, the project also deploys a critical lens on our algorithmic culture, where algorithms increasingly act as main curators of our social media feeds and content.
        </p>
        </div>
        <div className="rationale_right">
          <div className="words_splitted row_1">
            <div className="img_logo_rationale">
            <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676031395/stuff/TRI-1c1a5996_mxcgnw.png" />
            </div>
              <div>Indian</div>
              <div>shares</div>
              <div>fall</div>
              <div>on</div>
              <div>slowdown</div>
              <div>jitters,</div>
              <div>Adani</div>
              <div>group</div>
              <div>uncertainty</div>
          </div>
          <div className="words_splitted row_2">
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676042498/stuff/google-logo-9824_ys64ny.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676032961/stuff/Flag_of_India.svg_r2giux.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033018/stuff/stock-market-16_9-1_pvuxdx.jpg" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033059/stuff/original_sonjf4.jpg" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033088/stuff/1200px-ONS-2D.svg_ccsd1z.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033117/stuff/economic-review_great-slowdown_jqzsm8.jpg" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033393/stuff/startup-jitters-futurama_cdid2a.jpg" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033330/stuff/ezgif.com-webp-to-jpg_gcavlh.jpg" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033398/stuff/Cafebord-2-COLOURBOX23980354-1024x1024-1_ffdzji.jpg" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033395/stuff/Blank_Fork_fwe5ll.png" />
            </div>
              
          </div>
          <div className="words_splitted row_3">
            <div>
              <img 
                style={{filter: "invert(1)"}}
                src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676032211/stuff/5190545_g9qkvr.png" />
            </div>
              <div>Envelope</div>
              <div>Menu</div>
              <div>Volcano</div>
              <div>Hook</div>
              <div>Shield</div>
              <div>Comic Book</div>
              <div>Notebook</div>
              <div>Balloon</div>
              <div>Street Sign</div>
          </div>
          <div className="words_splitted row_4">
            <div>
              <img 
                style={{filter: "invert(1)"}}
                src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676042894/stuff/Trollface_bk61s5.png" />
            </div>
              <div>
                INDIAN
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676032961/stuff/Flag_of_India.svg_r2giux.png" />
                Envelope
              </div>
              <div>
                SHARE
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033018/stuff/stock-market-16_9-1_pvuxdx.jpg" />
                MENU
              </div>
              <div>
                FALL
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033059/stuff/original_sonjf4.jpg" />
                VOLCANO
              </div>
              <div>
                ON
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033088/stuff/1200px-ONS-2D.svg_ccsd1z.png" />
                HOOK
              </div>
              <div>
                slowdown
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033117/stuff/economic-review_great-slowdown_jqzsm8.jpg" />
                shield
              </div>
              <div>
                jitters
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033393/stuff/startup-jitters-futurama_cdid2a.jpg" />
                comic book
              </div>
              <div>
                adani
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033330/stuff/ezgif.com-webp-to-jpg_gcavlh.jpg" />
                notebook
              </div>
              <div>
                group
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033398/stuff/Cafebord-2-COLOURBOX23980354-1024x1024-1_ffdzji.jpg" />
                balloon
              </div>
              <div>
                uncertainty
                <img src="https://res.cloudinary.com/sismographie-cloud/image/upload/v1676033395/stuff/Blank_Fork_fwe5ll.png" />
                street sign
              </div>
          </div>
        </div>
      </section>
      </div>
    )
  }


  return (
    <div className="App">
      {renderRationaleContainer()}
      {renderLoading()}
      <section className="output">
        {renderOutputContainers()}
      </section>
    </div>
  );
  
};


export default App;

