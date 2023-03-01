import { useState } from "react";
import { ChatPage } from "./pages/ChatPage.jsx";
import { SignInPage } from "./pages/SignInPage.jsx"


function App() {
  const [username, setUsername] = useState('');

  function handleSubmit (username){
      setUsername(username);
  }

  return (
    <div>
      {username === '' && <SignInPage onSubmit={handleSubmit}/>}
      {username !== '' && <ChatPage />}
    </div>
  );
};

export default App;
