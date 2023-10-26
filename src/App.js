import './App.css';
import Har from './components/F1';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home,About,Contact,Blog} from './components/F1';
import LandingPage from './components/LandingPage';
function App() {
return (
<div>
<Har />
<div class="rev"><h1 class="text-center">My Portfolio</h1></div>
<HashRouter>
<Nav />
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</HashRouter>
</div>
);
}
export default App;