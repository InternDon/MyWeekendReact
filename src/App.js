import './App.css';

//Router
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Navigation Bar
import NavBar from './components/navBar';

//PageOne
import PageOne from './pages/pageOne'

//PageTwo
import PageTwo from './pages/pageTwo';

//PageThree
import PageThree from './pages/pageThree';

//Footer
import Footer from './components/footer';


function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<PageOne />} />
            <Route path="Saturday" element={<PageTwo />} />
            <Route path="Sunday" element={<PageThree />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;