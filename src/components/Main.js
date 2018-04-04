require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
         <span>wow</span>
        <div className="notice">hello Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;



// var React = require(React);
// var ReactTransitionGroup = React.addons.TransitionGroup;
//
// var imageURL = require('../images/yeoman.png');
//
// var Appc = React.createClass({
//   render: function () {
//     return (
//       <div className="main">
//         <ReactTransitionGroup transitionName="fade">
//           <img src={imageURL} alt="image"/>
//           <span>nani</span>
//         </ReactTransitionGroup>
//       </div>
//     )
//   }
// })
//
//
// React.render(<Appc />, document.getElementById('content'));
//
// module.exports = Appc;
//

