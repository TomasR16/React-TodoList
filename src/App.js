import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

//importing compontents
import { confirmAlert } from "react-confirm-alert";
import Header from "./components/layout/Header";
import AddTodo from "./components/Addtodo";
// import About from "./components/pages/About";
import { v4 as uuid } from "uuid";
import About from "./components/pages/About";

//maken van method
class App extends Component {
  //creating objects and values
  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuid(),
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: uuid(),
        title: "Meeting with boss",
        completed: false,
      },
      {
        id: uuid(),
        title: "Chestday",
        completed: false,
      },
    ],
  };

  //change completed to opposite state
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo function
  delTodo = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Do you want to delete task",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            this.setState({
              todos: [...this.state.todos.filter((todo) => todo.id !== id)],
            }),
        },
        {
          label: "No",
          // onClick: () => alert('Item not deleted')
        },
      ],
    });
  };

  //Add Todo
  AddTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  //render the todos state title and run markComeplete function
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />

              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
