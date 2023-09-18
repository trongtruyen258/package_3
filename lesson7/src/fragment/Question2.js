import TableColumns from "./TableColumns";
import TableHeader from "./TableHeader";

export default function Question2() {
  return (
    <>
      <h2>Question 2:</h2>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <tr>
            <TableColumns name="Tran Anh Duc" birth="03/08/1993" sex="Nam" />
          </tr>
          <tr>
            <TableColumns name="Tran Anh Duc" birth="03/08/1993" sex="Nam" />
          </tr>
          <tr>
            <TableColumns name="Tran Anh Duc" birth="03/08/1993" sex="Nam" />
          </tr>
        </tbody>
      </table>
    </>
  );
}
