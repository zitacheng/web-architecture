import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import {Header} from './component/Header.jsx';
import {Home} from './component/Home.jsx';
import {ClientServer} from './component/ClientServer.jsx';
import {MicroServer} from './component/MicroServer.jsx';
import {Serverless} from './component/Serverless.jsx';
import {Spa} from './component/Spa.jsx';
import {Pwa} from './component/Pwa.jsx';
import {Comparaison} from './component/Comparaison.jsx';
import {Monolithic} from './component/Monolithic.jsx';

function App() {
  return (
    <div className="App w-100">
      <Header />
      <Home />
      <ClientServer />
      <Monolithic />
      <MicroServer />
      <Serverless />
      <Spa />
      <Pwa />
      <Comparaison />
      <Row className="mx-0 conclude" id="conclude">
        <h3 className="text-white text-center my-3 title">Conclusion</h3>
      </Row>
    </div>
  );
}

export default App;
