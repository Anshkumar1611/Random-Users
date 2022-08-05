import React, { useEffect, useState } from "react";
import Footer from "./components/Layouts/Footer/Footer";
import Hero from "./components/Layouts/Hero/Hero";
import Navbar from "./components/Layouts/Header/Navbar";
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

    return axios.request(users)
  }
  const setData = async () => {
    try {
      const response = await dataFetching();
      const user = response.data.results[0]
      setResult(user)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div >
      <Navbar />
      <div className="bg-cyan-200">
        <Hero setData={setData} result={result} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
