import { useState } from "react";

export default function FormQuestion4() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState("");
  const [dataProps, setDataProps] = useState({
    display: "none",
    skills: [],
  });
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleChangeSkill = (e) => {
    skills.push(e.target.value);
    console.log(skills);
    setSkills(skills);
  };
  const handleChangeAbout = (e) => {
    setAbout(e.target.value);
  };
  const handleSubmit = (e) => {
    let dataProps = {
      display: "block",
      name: name,
      age: age,
      gender: gender,
      skills: skills,
      aboutYou: about,
    };
    setDataProps(dataProps);
    e.preventDefault();
  };
  return (
    <div>
      <h2>Question 4:</h2>
      <h3>Sample Form Container</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name <br />
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleChangeName}
          />
        </label>
        <br />
        <label>
          Age <br />
          <input
            type="number"
            placeholder="Enter your age"
            onChange={handleChangeAge}
          />
        </label>
        <br />
        <label>
          Gender <br></br>
          <select onChange={handleChangeGender}>
            <option disabled>Select your gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>
        <br></br>
        <label>
          Skills <br></br>
          <label>
            <input
              type="checkbox"
              onChange={handleChangeSkill}
              value="Programming"
            />
            Programming
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChangeSkill}
              value="Development"
            />
            Development
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChangeSkill}
              value="Design"
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChangeSkill}
              value="Testing"
            />
            Testing
          </label>
        </label>
        <br></br>
        <label>
          About you <br />
          <textarea
            placeholder="Describe your past experience and skills"
            cols="70"
            rows="10"
            onChange={handleChangeAbout}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <input type="reset" value="Clear" />
      </form>
      <Render dataProps={dataProps} />
    </div>
  );
}
function Render(props) {
  return (
    <div style={{ display: props.dataProps.display }}>
      <p>Full name: {props.dataProps.name}</p>
      <p>Age: {props.dataProps.age}</p>
      <p>Gender: {props.dataProps.gender}</p>
      <p>
        Skills:{" "}
        {props.dataProps.skills.map((skill) => {
          return <span>{skill + ",  "} </span>;
        })}
      </p>
      <p>About you: {props.dataProps.aboutYou}</p>
    </div>
  );
}
// Render.defaultProps = {
//   style: "none",
// };
