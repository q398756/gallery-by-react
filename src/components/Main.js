require('normalize.css/normalize.css');
require('styles/App.scss');
var imageDatas = require('../data/imageDatas.json');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

// 自执行函数将图片名转成路径信息
imageDatas = (function genImageURL( imageDatasArr) {
  for ( var i = 0, j = imageDatasArr.length; i < j; i++){
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName)

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (

      <section className="stage">
        <section className="img-sec">
        </section>

        <nav className="controller-nav"></nav>
      </section>
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

