"use strict";

var React = require('react');

var TextInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    error: React.PropTypes.string,
    value: React.PropTypes.string.isRequired
  },
  handleChange: function(e){
    this.props.onChange(e);
  },
  render: function(){
    return (
      <div className="form-group">
         <label htmlFor={this.props.name}>{this.props.label}</label>
         <input className="form-control" name={this.props.name} id={this.props.name}
          value={this.props.value} onChange={this.handleChange}/>
         <div className={this.props.error !== undefined ? 'alert alert-danger' : ''}>
              {this.props.error}
         </div>
      </div>
    );
  }
});

module.exports = TextInput;
