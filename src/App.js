//
/**
 *  <h3>{siteName}</h3>
      {siteName1}

      {user}
      {user}
      {user}
 * 
 */

import "./App.css"

function App() {
  const siteName = "Thithippu Stores"
  const siteName1 = <h1>Thithippu Super Stores</h1>
  const name = <h5>Vicky</h5>
  const age = <strong>30</strong>

  const user = (
    <div className="user-container">
      {name}
      {age}
    </div>
  )

  return (
    <div className="App">
      {/* {user}
      {siteName}
      {siteName1}
      {User()} */}
      <User name="Vicky" empid={1212007} email="ap@gva.com" />
      <User name="Ammu" empid={1212006} email="am@gva.com" />
      <User name="Valli" empid={1212005} email="val@gva.com" />
      <User name="Ganes" empid={1212004} email="ga@gva.com" />

      <User />
      <User />

      <Job
        Salary={95000}
        Position=" Senior Front-End Developer"
        CompanyName=" GVa"
      />
      <Job
        Salary={97000}
        Position=" Senior Back-End Developer"
        CompanyName=" GVa"
      />
      <Job Salary={99000} Position=" Senior Engineer" CompanyName=" GVa" />
    </div>
  )
}

const User = (props) => {
  return (
    <div className="userComponent">
      <h2>{props.name}</h2>
      <h3>{props.empid}</h3>
      <h4>{props.email}</h4>
    </div>
  )
}

const Job = (props) => {
  const salaryColor = props.Salary > 45000 ? "orange" : "black"
  return (
    <div className="jobComponent">
      {props.Salary > 20000 ? (
        <>
          ( <p style={{ color: salaryColor }}>Salary:{props.Salary}</p>
          <p>Position : {props.Position}</p>
          <p>Compnay Name : {props.CompanyName}</p>)
        </>
      ) : (
        <span>Not Employee of Gva</span>
      )}
    </div>
  )
}

export default App
