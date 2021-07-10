
import './App.css';
import FormReg from './components/FormReg';
function App() {
  const handleUserAdd=(e)=>{
    console.log("Parent Component");
    console.log(e);
  }
  return (
    <div className="App">
{/*         
      <hr />
      <Studentdetails /> */}
      <FormReg onUserAdd={handleUserAdd}/>
    </div>
  );
}
  
export default App;
