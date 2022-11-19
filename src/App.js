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

    console.log(mainData, "-mainData");


    if(mainData){

      const shuffled = mainData.sort(() => 0.5 - Math.random());
      let randomlySelected = shuffled.slice(0, 20);

      let mainDataMaped = randomlySelected
      .filter((ele,index) => index < 20)
      .map((ele, index) => {
        return <OutputContainer key={index} data={ele} />
      })
      return mainDataMaped;
    }else{
      return "loading"
    }
  }


  return (
    <div className="App">
      {renderOutputContainers()}
    </div>
  );
  
};

export default App;

