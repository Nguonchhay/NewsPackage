import logo from './../assets/images/logo.svg';

const App = () => {
  const { REACT_APP_BASE_API } = process.env;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Base API: { REACT_APP_BASE_API }</p>
      </header>
    </div>
  );
}

export default App;
