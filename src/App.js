import React from 'react';
import Pages from './Core/Components/Properties/index';
import PropList from './Core/Components/Properties/PropList';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <PropList />
          </div>
          <div style={{backgroundColor:'#f0f0f0'}} className="col-lg-8 col-md-8">
            <Pages />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default App;
