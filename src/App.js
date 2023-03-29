import { Routes, Route } from "react-router-dom";
import { ChatPage } from "./pages/ChatPage.jsx";
import { SignInPage } from "./pages/SignInPage.jsx"
import { FaqPage } from "./pages/FaqPage.jsx";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext.js"

const initialState = {  //Redux ˘ 
  counter:0,
  username: 'Mario'
};

function reducer(initialState, action){
  console.log('Reducer', initialState, action); //ispise u konzoli, 'Reducer -> pocetno stanje -> akcija 

  if(action.type === 'INCREMENT'){
    return {...initialState, counter: initialState.counter + action.value}; // ...initSt kopira sve sto se nalazi u initial stateu i dodatno izvrsi akciju 
  }                                                                           // bez ...initialState, gubimo username 
  if(action.type === 'DECREMENT'){
    return {...initialState, counter: initialState.counter - action.value};
  }
  return initialState;
}

const state1 = reducer(initialState, {type: 'INCREMENT', value: 10}); //type i value su dio objekta koji je 'action' parametar u funkciji
const state2 = reducer(state1, {type: 'DECREMENT', value: 6});  


console.log('REDUCER-1', state1);
console.log('REDUCER-2', state2); //Redux ^

function App() {
  const context = useContext(AppContext);

  if(context.error != null){
    return (
      <div>
        <h1>Error!</h1>
        <div>Something went wrong: {context.error.toString()}</div>
      </div>
    );
  }


  return (
      <Routes>
        <Route path="/"> 
          <Route index element={<SignInPage />} />
          <Route path="/chat" element ={<ChatPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
  );
};

export default App; 
