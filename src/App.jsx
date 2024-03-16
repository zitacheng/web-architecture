import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import {Header} from './component/Header.jsx';
import {Home} from './component/Home.jsx';
import {ArchiCard} from './component/ArchiCard.jsx';
import {Comparaison} from './component/Comparaison.jsx';
import {Conclude} from './component/Conclude.jsx';
import { clientPoints, monoPoints, microPoints, serverlessPoints, SpaPoints, PwaPoints } from './constant/description.jsx';

function App() {
  return (
    <div className="App w-100">
      <Header />
      <Home />
      <ArchiCard serverDesc={clientPoints} title='Client Server' id={'client'} />
      <ArchiCard serverDesc={monoPoints} title='Monolithic' id={'mono'} />
      <ArchiCard serverDesc={microPoints} title='Microservice' id={'micro'} />
      <ArchiCard serverDesc={serverlessPoints} title='Serverless' id={'serverless'} />
      <ArchiCard serverDesc={SpaPoints} title='Single page application' id={'spa'} />
      <ArchiCard serverDesc={PwaPoints} title='Progressive web application' id={'pwa'} />
      <Comparaison />
      <Conclude />
    </div>
  );
}

export default App;
