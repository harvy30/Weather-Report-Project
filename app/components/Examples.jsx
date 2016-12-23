var React = require('react');
var { Link } = require('react-router');


var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">Examples Component</h1>
        <p>Here are a few example Location to Try out</p>
        <ol>
          <li>
            <Link to="/?location=Chandigarh">Chandigarh, Punjab, India</Link>
          </li>
          <li>
            <Link to="/?location=Roi">Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
