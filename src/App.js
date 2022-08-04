import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
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
      const data = response.data;
      const { info, results } = data;
      console.log(info);
      console.log(results);
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
        <Hero dataFetching={dataFetching} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
