import { useContext } from "react";
import { Counter } from "./components/Counter.jsx";
import { AppContext } from "./contexts/AppContext.js";
import { ChatPage } from "./pages/ChatPage.jsx";
import { SignInPage } from "./pages/SignInPage.jsx"


function App() {
  const context = useContext(AppContext);

  return (
    <div>
      <Counter precision={2} initialValue={0} step={1.2354353} />  {/*Koristiti toFixed metodu u komponenti da definiramo preciznost decimala countera*/}
      {!context.isSignedIn  && <SignInPage />}
      {context.isSignedIn  && <ChatPage  />}   {/*prosljedjuje avatar preko propsa u chat page */}
    </div>
  );
};

export default App; 
