import './App.css';
import { Landing, Vetan, WhyMool } from "./Components"
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      {/* <Vetan />
      <WhyMool /> */}
      <Footer />
    </div>
  );
}

export default App;
