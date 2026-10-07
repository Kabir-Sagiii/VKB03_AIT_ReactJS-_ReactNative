import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="text-red-800 text-center mt-10 text-4xl">
      Welcome to React JS World
      <Home /> 
      <Profile />
    </div>
  )
}

export default App