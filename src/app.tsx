import React from 'react';
import Designer from './designer';

class App extends React.Component {
  public render() {
    return (
      <div style={{
        display: 'block'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <Designer/>
        </div>
      </div>
    );
  }
}

export default App;