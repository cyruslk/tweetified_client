import OutputContainer from "./OutputContainer";
import axios from "axios";
import { Tweet } from 'react-twitter-widgets';
import { useEffect, useState } from "react";
import React from "react";
import './App.css';

function App(){

  const [mainData, setData] = useState(null)
  const [isDisplayedLoader, setIsDisplayedLoader] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      const data = await axios('https://memeified-server.herokuapp.com/entries');
      setData(data.data.data);
    }
    fetchData()
    .catch(console.error);;

    const timer = setTimeout(() => setIsDisplayedLoader(!isDisplayedLoader), 3000);

  }, [])


  let renderOutputContainers = () => {

    if(mainData){

      const shuffled = mainData.sort(() => 0.5 - Math.random());
      let randomlySelected = shuffled.slice(0, 1);

      console.log(randomlySelected, "-randomlySelected");

      let mainDataMaped = randomlySelected
      .filter((ele,index) => index < 1)
      .map((ele, index) => {
        return <OutputContainer key={index} data={ele} />
      })
      return mainDataMaped;
    }else{
      return "loading"
    }
  };

  let renderFakeLoader = () => {

    if(isDisplayedLoader){
      return (
        <main className="loader">
          LOADING...
        </main>
      )
    }
  }

  return (
    <div className="App">
      {renderFakeLoader()}
      {renderOutputContainers()}
    </div>
  );
  
};

export default App;

