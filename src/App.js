import { useState } from "react";
import { Counter } from "./components/Counter.jsx";
import { ChatPage } from "./pages/ChatPage.jsx";
import { SignInPage } from "./pages/SignInPage.jsx"


function App() {
  const [username, setUsername] = useState('');

  function handleSubmit (username){
      setUsername(username);
  }

  return (
    <div>
      <Counter precision={2} initialValue={0} step={1.2354353} />  {/*Koristiti toFixed metodu u komponenti da definiramo preciznost decimala countera*/}
      {username === '' && <SignInPage onSubmit={handleSubmit}/>}
      {username !== '' && <ChatPage />}
    </div>
  );
};

export default App; 
