
import './App.css';
import Signup from './component/Signup';
import {Container} from 'react-bootstrap'
import {UserAuthContextProvider} from './context/AuthContext'



function App() {
  return (
    <UserAuthContextProvider>
<Container className='d-flex aligin-item-center justify-content-center' style={{minHeight :'100vh'}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
      <Signup/>
      </div>
  
    </Container>
    </UserAuthContextProvider>
    
  );
}

export default App;
