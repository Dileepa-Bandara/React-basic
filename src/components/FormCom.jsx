import React, { useState, useEffect } from "react";
import "../scss/form.scss";

function FormCom() {
  const [input, setInput] = useState({ name: "", password: "", email: "" });
  const [submit, setSubmit] = useState({
    name: [],
    password: [],
    email: [],
    nameList: [],
  });
  const [submitStatus, setSubmitStatus] = useState(false);

  const onChangeFunc = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const onSubmitFunction = (e) => {
    e.preventDefault();
    if (input.name && input.email && input.password) {
      setSubmitStatus(!submitStatus);
    }
  };

  useEffect(() => {
    setSubmit({
      ...submit,
      name: input.name,
      email: input.email,
      password: input.password,
    });
    pushNames();
    return () => {
      setInput({ ...input, name: "", email: "", password: "" });
    };
  }, [submitStatus]);

  const pushNames = () => {
    var names = [];
    names.push(submit.name);
    setSubmit({ ...input, nameList: [...submit.name, names] });
  };
  console.log(submit);
  return (
    <div className="form_container">
      <div className="form">
        <fieldset>
          <legend>Form</legend>
          <form action="" onSubmit={onSubmitFunction}>
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
            <button type="submit">Submit</button>
          </form>
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
              <tr>
                <td>{submit.name}</td>
                <td>{submit.email}</td>
                <td>{submit.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormCom;
