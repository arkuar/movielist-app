import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => (
  <div>
    Movie list app
  </div>
);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
