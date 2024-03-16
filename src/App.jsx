import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import {WebChart} from './component/WebChart.jsx';
import {Header} from './component/Header.jsx';
import {Home} from './component/Home.jsx';

function App() {
  return (
    <div className="App w-100">
      <Header />
      <Home />
      <Row className="mx-auto cardBg mb-4" id="client">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Client Server</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="mono">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Monolithic Server</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="micro">
        <div className="headerGreen">
          <h3 className="title text-center my-3">microservice Server</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="serverless">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Serverless</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg" id="spa">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Single Page App</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg"  id="pwa">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Progressive Web App</h3>
        </div>
      </Row>
      <Row className="mx-auto mb-4 cardBg"  id="pwa">
        <div className="headerGreen">
          <h3 className="title text-center my-3">Comparaison</h3>
        </div>
        <Row className="mx-auto w-75 mt-4 justify-content-center">
          <WebChart />
        </Row>
      </Row>
      <Row className="mx-0 conclude" id="conclude">
        <h3 className="text-white text-center my-3 title">Conclusion</h3>
      </Row>
    </div>
  );
}

export default App;
