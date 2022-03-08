import './App.css';

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
        <Routes>
          <Route path="/ReactJS" element={<NavBar />}>
            <Route index element={<PageOne />} />
            <Route path="/ReactJS/Saturday" element={<PageTwo />} />
            <Route path="/ReactJS/Sunday" element={<PageThree />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;