import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //Creating style function with if, else statement (React)
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  //creating React event handler
  markComplete = (e) => {
    console.log(this.props + "i was clicked");
  };

  //sending id to Todos.js from Todos.js to App.js (React)
  render() {
    //creating variable with props
    const { id, title } = this.props.todo;
    //return div with updated state
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "3px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
