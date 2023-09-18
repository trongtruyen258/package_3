import { useState } from "react";

export default function StateQuestion5() {
  const data = [
    { id: 1, name: "Nguyen Ngoc Duy" },
    { id: 2, name: "Tong Quang Anh" },
    { id: 3, name: "Dinh Thu Loan" },
    { id: 4, name: "Ha Van Tien" },
    { id: 5, name: "Nguyen Hai Dang" },
    { id: 6, name: "Nguyen Tien Quang" },
    { id: 7, name: "Nguyen Van Chien" },
  ];

  const [students, setStudents] = useState(data);
  const handleClick = (id) => {
    let studentsUpdate = students.filter((student) => {
      return student.id !== id;
    });
    setStudents(studentsUpdate);
  };
  return (
    <div style={{ width: "500px", margin: "0 auto", textAlign: "start" }}>
      <h3>DANH SÁCH LỚP HỌC</h3>
      <ol>
        {students.map((student) => {
          return (
            <li key={student.id} onClick={() => handleClick(student.id)}>
              {student.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
