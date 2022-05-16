import React from 'react';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Bar from './pages/Navbar';
import Skills from './pages/skills';
import Title from './pages/title.js';
import Work from './pages/work';




function App() {

return(
  <>
  
  <div className='bgg'>
  <Bar />
  <div className='real-bg'>
<Title /> 
<About />
<Work />
<Skills />
</div>
<Contact />
</div>
  </>
);
};

export default App;
