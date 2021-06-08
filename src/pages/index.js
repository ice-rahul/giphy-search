import React from 'react';
import { Header, Footer } from 'components';

function App() {
  return (
    <div id="main">
      <Header />
      <div className="flex-1 bg-skin">
        body
      </div>
      <Footer />
    </div>
  );
}

export default App;
