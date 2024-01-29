import "./App.css";
import AllMovies from "./components/AllMovies";

const App = () => {
  return (
    <div className="App w-full h-screen grid grid-cols-2 sm:grid-cols-4 gap-2">
      <AllMovies />
    </div>
  );
};

export default App;
