import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Student from './components/Student.jsx';
import Details from './components/Details.jsx';
import Contact from './components/Contact.jsx';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;