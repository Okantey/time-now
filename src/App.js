import './App.css';



function App() {
  const names = ["Aba", "Esther", "Michelle", "Jerry", "Nelson"]

  return (

    <div className="App">
      <Job salary={2000} position="General Manager" company="IBM" />
      <Job salary={2000} position="Human Resource Manager" company="Apple" />
      <Job salary={2000} position="IT Officer" company="Google" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div className="wrapper">
      <h1 className="intro">{props.salary}</h1>
      <h1 className="intro">{props.position}</h1>
      <h1 className="intro">{props.company}</h1>
    </div>
  )
}


export default App;
