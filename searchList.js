import React, { useState } from 'react';

// import './App.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
];

"use strict";
const e1 = React.createElement;
function App() {
  // the value of the search field 
  const [name, setName] = useState(''); // the search result

  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = e => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter(user => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase()); // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS); // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: name,
    onChange: filter,
    className: "input",
    placeholder: "Filter"
  }), /*#__PURE__*/React.createElement("div", {
    className: "user-list"
  }, foundUsers && foundUsers.length > 0 ? foundUsers.map(user => /*#__PURE__*/React.createElement("li", {
    key: user.id,
    className: "user"
  }, /*#__PURE__*/React.createElement("span", {
    className: "user-id"
  }, user.id), /*#__PURE__*/React.createElement("span", {
    className: "user-name"
  }, user.name), /*#__PURE__*/React.createElement("span", {
    className: "user-age"
  }, user.age, " year old"))) : /*#__PURE__*/React.createElement("h1", null, "No results found!")));
}
// export default App;

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e1(App));