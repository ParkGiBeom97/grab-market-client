import './App.css';
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from './upload';
import ProductPage from './product';


function App() {
  return (
    <div>
      <div>
        <div id="header">
          <div id="header-area">
            <img src="/images/icons/logo.png" />
          </div>
        </div>
        <div id="body">
          <switch>
            <Route exact={true} path={"/"}>
              <MainPageComponent />
            </Route>
            <Route exact={true} path={"/product/:id"}>
              <ProductPage />
            </Route>
            <Route exact={true} path={"/upload"}>
              <UploadPage />
            </Route>
          </switch>
        </div>
        <div id="footer"></div>
      </div>
    </div>
  );
}

export default App;
