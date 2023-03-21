import { Routes, Route } from "react-router-dom";
import { ChatPage } from "./pages/ChatPage.jsx";
import { SignInPage } from "./pages/SignInPage.jsx"


function App() {
  return (
      <Routes>
        <Route path="/"> 
          <Route index element={<SignInPage />} />
          <Route path="/chat" element ={<ChatPage />} />
        </Route>
      </Routes>
  );
};

export default App; 
