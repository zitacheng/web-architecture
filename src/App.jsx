import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import {Header} from './component/Header.jsx';
import {Home} from './component/Home.jsx';
import {ServerCard} from './component/ServerCard.jsx';
import {Comparaison} from './component/Comparaison.jsx';
import { clientPoints, monoPoints, microPoints, serverlessPoints, SpaPoints, PwaPoints } from './constant/description.jsx';

function App() {
  return (
    <div className="App w-100">
      <Header />
      <Home />
      <ServerCard serverDesc={clientPoints} title='Client Server' id={'client'} />
      <ServerCard serverDesc={monoPoints} title='Monolithic' id={'mono'} />
      <ServerCard serverDesc={microPoints} title='Microservice' id={'micro'} />
      <ServerCard serverDesc={serverlessPoints} title='Serverless' id={'serverless'} />
      <ServerCard serverDesc={SpaPoints} title='Single page application' id={'spa'} />
      <ServerCard serverDesc={PwaPoints} title='Progressive web application' id={'pwa'} />
      <Comparaison />
      <Row className="mx-0 conclude" id="conclude">
        <h3 className="text-white text-center my-3 title">Conclusion</h3>
      </Row>
    </div>
  );
}

export default App;
