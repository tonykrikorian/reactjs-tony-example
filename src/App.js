import React from 'react';
import ContactFormComponent from './Components/ContactFormComponent/ContactFormComponent';
import NavBarComponent from './Components/NavbarComponent/NavBarComponent';
import Counter from './Components/CounterComponent/counter';




function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBarComponent></NavBarComponent>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <ContactFormComponent />
        </div>
        <div className="row">
          <Counter/>
        </div>
      </div>
    </div>
  );
}

export default App;
