import logo from './logo.svg';
import './App.css';
import Labelname from './Component/Labelname';



function App() {
  const name="Vijayalakshmi Ravi";
  const date=new Date();
  return (
    
    <div>
     
    <div className="App">
      <h1> NAME: {name}</h1>
      <h2> CURRENT DATE: {date.toString()} </h2>
      <hr />
      <Labelname data={name}/>
    </div>
    </div>
  );
}
export default App;
