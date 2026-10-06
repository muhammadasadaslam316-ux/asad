import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Module1 from './module1.mjs';
import Textform from './component/Textform';

function App() {
  return (
    <>
<Navbar/>
    <div className="container my-3">
      <Textform heading="Enter the text to analyze below"/>
    </div>


    {/* <Module1 /> */}
</>
  );
}


export default App;
