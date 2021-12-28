import './App.css';

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    const dataAsArray = Array.from(new FormData(e.target));
    const data = Object.fromEntries(dataAsArray);
    console.log({ data })
    fetch("/", { method: "POST", body: JSON.stringify(data) })
  }

  return <form onSubmit={submitHandler}>
    <input name="nombre" />
    <input name="apellido" />
    <input type="submit" value="Enviar" />
  </form>
}

export default App;
