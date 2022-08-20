import Register from "./components/Register/Register";
import UserList from "./components/UserList/UsersList";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="app-header">Tinder🔥</h1>
      </header>
      <main className="app-container">
        <Register />
        <UserList />
      </main>
    </>
  );
}

export default App;
