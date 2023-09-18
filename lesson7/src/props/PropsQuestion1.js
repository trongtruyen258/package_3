import PersonQ1 from "./PersonQ1";

export default function PropsQuestion1() {
  return (
    <div style={{ display: "flex" }}>
      <PersonQ1 fullName="Nguyen Van A" age={25} />
      <PersonQ1 fullName="Nguyen Van B" age={26} />
      <PersonQ1 fullName="Nguyen Van C" age={27} />
    </div>
  );
}
