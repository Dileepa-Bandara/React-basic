import React, { useState, useEffect } from "react";
import axios from "axios";
import "../scss/useeffect.scss";

function UseEffectCom() {
  const [input, setInput] = useState({
    term: "",
    search: "colombo",
    list: []
   
  });
  
  const [submit.setSubmit]  = useState(false);

  useEffect(() => {
    if (input.search) {
      axios
        .get("https://api.openweathermap.org/data/2.5/weather?", {
          params: {
            q: input.search,
            appid: "6fa19a6b840e2d8ede589918d1cd8946",
          },
        })
        .then((res) => setInput({ ...input, list: res.data }))
        .catch((err) => console.log(err));
    }
  }, [submit]);

  const searchFunc = () => {
    setSubmit(!submit);
  };

  const addTerm = (e) => {
    setInput({ ...input, term: e.target.value });
  };
  console.log(input,input.list.weather);
  return (
    <div className="useeffect_container">
      <div className="display_effect">
        <img src="./images/weather.jpg" alt="weather" />
        <input
          type="text"
          value={input.term}
          onChange={addTerm}
          placeholder="Enter City.."
        />
        <button onClick={searchFunc}>Search</button>

        <div className="weather_details">
          <h3>{input.list.name}</h3>
          {input.list.weather
            ? input.list.weather.map((item) => (
                <div key={item.id}>
                  <p>Main :{item.main}</p>

                  <p>Description :{item.description}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default UseEffectCom;
