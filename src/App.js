import Emulador from './components/Emulador/Emulador';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Aprovacao from './components/Solicitacao/Aprovacao';
import Solicitacao from './components/Solicitacao/Solicitacao';

function App() {
  return (
    <>
      <Header />
      {/* <Login />
      <Solicitacao />
      <Aprovacao /> */}
      <Emulador />
    </>
  )
}

export default App;
