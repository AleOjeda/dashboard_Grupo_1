import logo from './logo.svg';
import './App.css';

import SideBar from "./components/SideBar/SideBar";
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar valor=""/>
        <ContentWrapper />
      </div>
    </>
  );
}

export default App;
