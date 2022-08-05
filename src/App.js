import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import axios from "axios";


function App() {
  const [result, setResult] = useState('')

  const dataFetching = () => {
    const users = {
      method: 'GET',
      url: 'https://random-user.p.rapidapi.com/getuser',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
      }
    };

    axios.request(users).then(function (response) {
      const user = response.data.results[0];
      console.log(user)
      setResult(user)
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    dataFetching();
  }, [])

  return (
    <div >
      <Navbar />
      <div className="bg-cyan-200">
        <Hero dataFetching={dataFetching} result={result}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
