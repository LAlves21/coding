/* import logo from './logo.svg'; */
import './App.css';
import logoTeste from"./Passaro2-png.png"

function App() {
  const onClickButton = () => {
  alert('Botão Funcionando')
}
  return (
    <div className="App">
      <h1>Teste</h1>
      <header className="App-header">
        {<img src={logoTeste} className="App-logo" alt="logo" />}
        <p>
          Testando o React.
        </p>
        <a
          className="App-link"
          href="https://labenu.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site da Labenu
        </a>
        <button onClick={onClickButton}> Clique Aqui </button>

      </header>
    </div>
  );
}

export default App;
