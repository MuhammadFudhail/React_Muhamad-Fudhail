
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Chat.css';

function App() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("default response");

  const apiKey = "AIzaSyCuBOYHqYNPqE-11q9Srxxf9JsQNOVdyKw";

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,
  };

  function handleChange(e) {
    setInputUser(e.target.value);
  }

  async function handlePromptSubmit() {
    console.log("input user =", inputUser);
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: []
      });

      const result = await chatSession.sendMessage(inputUser);
      console.log(result.response.text());
      setResponse(result.response.text()); // Menyimpan respons dari model ke state
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <h1>AI Ku</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handlePromptSubmit} type="button">Submit</button>
      <p>Response: {response}</p>
     
    </>
  );
}

export default App;
