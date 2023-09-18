import PersonQ3 from "./PersonQ3";

export default function PropsQuestion3() {
  return (
    <div style={{ display: "flex" }}>
      <PersonQ3 fullName="Nguyen Van A" age={25}></PersonQ3>
      <PersonQ3 fullName="Nguyen Van B" age={26}>
        Làm để tiêu
      </PersonQ3>
      <PersonQ3 fullName="Nguyen Van C" age={27}>
        Sống để ăn
      </PersonQ3>
    </div>
  );
}
