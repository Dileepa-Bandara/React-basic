import React, { useState } from "react";
import "../scss/form.scss";

function FormCom() {
  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    list: [],
  });

  const onChangeFunc = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const onSubmitFunction = () => {
    const userList = {
      id: Date.now(),
      name: input.name,
      email: input.email,
      password: input.password,
    };

    const list = input.list.slice();
    list.push(userList);
    setInput({
      ...input,
      name: "",
      email: "",
      password: "",
      list: list,
    });
  };
  console.log(input);
  return (
    <div className="form_container">
      <div className="form">
        <fieldset>
          <legend>Form</legend>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={onChangeFunc}
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Email "
            value={input.email}
            onChange={onChangeFunc}
          />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Password :"
            value={input.password}
            onChange={onChangeFunc}
          />
          <button onClick={onSubmitFunction}>Submit</button>
        </fieldset>

        <div className="display">
          <table border="1px">
            <caption>details</caption>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
              </tr>
            </thead>
            <tbody>
              {input.list.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormCom;
////https://www.geeksforgeeks.org/how-to-create-todo-app-using-reactjs/
