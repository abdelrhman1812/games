import React, { useState } from "react";
import teams from "../../Assets/Data/teams";

function Teams() {
  const [person, setPerson] = useState(teams);

  return (
    <section className="teams">
      <div className="container">
        <div className="row g-3">
          <h2>
            Oure <span>Teams</span>
          </h2>
          {person.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="person">
                <figure>
                  <img
                    src={require(`../../Assets/Images/Teams/${item.img}`)}
                    className="w-100"
                    alt=""
                  />
                </figure>
                <div className="info">
                  <h3>{item.name}</h3>
                  <p className="">
                    {item.titel}
                    {/* <i class="fa-brands fa-youtube"></i> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
