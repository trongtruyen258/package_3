import PersonQ2 from "./PersonQ2";

export default function PropsQuestion2() {
  return (
    <div style={{ display: "flex" }}>
      <PersonQ2 fullName="Nguyen Van A" age={25}></PersonQ2>
      <PersonQ2 fullName="Nguyen Van B" age={26}>
        Làm để tiêu
      </PersonQ2>
      <PersonQ2 fullName="Nguyen Van C" age={27}>
        Sống để ăn
      </PersonQ2>
    </div>
  );
}
