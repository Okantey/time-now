import './App.css';


function App() {
  return (
    <div className="App">
      <User name="Gideon Nunoo" age={55} salary={2000} />
      <User name="Bernard Appiedu" age={65} salary={4000} />
      <User name="Elizabeth Dick" age={25} salary={2000} />
      <User name="Randy Mensah" age={13} salary={6000} />
      <User name="Daniel Jerry" age={52} salary={2000} />
    </div>
  );
}

const User = (props) => {
  return (
    <div className='gridLayout'>
      <h1> {props.name}</h1>
      <h1> {props.age}</h1>
      <h1> {props.salary}</h1>
    </div>
  )
}

export default App;
