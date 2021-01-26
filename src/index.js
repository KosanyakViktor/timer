import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

// const renderSeconds = time => {
  // const seconds = new Date(time).getSeconds();
  // const backgroundColor = seconds % 2 === 0 
  //       ? '#fff'
  //       : "#000";
  // const textColor = seconds % 2 !== 0 
  //       ? '#fff'
  //       : "#000";
  // const styles = {
  //   color: textColor,
  //   backgroundColor
  // };
  const element = (
    <div>
      <h1 class="title">Todo List</h1>
      <main class="todo-list">
       <div class="actions">
           <input class="task-input" type="text"/>
           <button class="btn create-task-btn">Create</button>
       </div>
      <ul class="list"></ul>
      </main>
    </div>
  );
  
  ReactDOM.render(element, rootElement);
