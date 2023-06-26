import './App.css';
import Login from './account-components/Login'
import Signup from './account-components/Signup'

function App() {
  const isLogIn=true;
  return (
    <div>
      Hello Word
      <div>
        {4+5}<span> Ajeet</span>
      </div>
      <div>
        {isLogIn? <Login/>: <Signup/>}
      </div>
    </div>
  );
}

export default App;
