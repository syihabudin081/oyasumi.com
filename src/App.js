import logo from './logo.svg';
import './App.css';

import Landingpage from './components/landingpage';

import Navbar from './components/navbar';
import Hotellist from './components/hotellist';
function App() {
  return (
<>
<Navbar/>
 {/* <Landingpage/>    */}
 <Hotellist/>
  </>
  );
}

export default App;
