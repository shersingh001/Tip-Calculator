import React, { useState } from "react";
import Header from "./components/Header/Header";
import './App.css';
import Card from "./components/UI/Card";
import Footer from "./components/Footer/Footer";
import InputData from "./components/InputSection/InputData";
import CustomerList from './components/OutputSection/CustomerList';

const App = () => {
  const [inputData, setInputData] = useState("");

  const userData = (newUserData) => {
    setInputData((preUserData) => {
      return [newUserData, ...preUserData,]
    })
  }
  return(
    <main>
    <Header />
    <Card>
      <InputData onUserData={userData}/>
      <CustomerList data={inputData}/>
      </Card>
      <Footer />
    </main>
  )
}

export default App;