import { Fragment, useState } from "react";

export default function FormCheckbox() {
  const courseList = [
    { id: 1, name: "HTML, CSS" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "ReactJs" },
  ];
  const [courseChecked, setCourseChecked] = useState({ id: "", name: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setIsSubmit(false);
    setCourseChecked({ id: id, name: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {courseList.map((course, index) => {
          return (
            <Fragment key={index}>
              <input
                type="checkbox"
                id={course.id}
                value={course.name}
                onChange={handleChange}
                checked={course.id === +courseChecked.id}
              />
              <label>{course.name}</label> <br />
            </Fragment>
          );
        })}
        <input type="submit" value={"Submit Course"} />
      </form>
      {isSubmit && (
        <div>
          <p>Information input:</p>
          <p>Id: {courseChecked.id}</p>
          <p>Name: {courseChecked.name}</p>
        </div>
      )}
    </div>
  );
}
