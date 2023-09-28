import "./App.css";
import GrandFatherClass from "./context/question1/classComponent/GrandFatherClass";
import GrandFatherFunc from "./context/question1/functionalComponent/GrandFatherFunc";
import GrandParentComponent from "./context/question2/GrandParentComponent";
import Lesson9Extra from "./lesson9_extra/Lesson9Extra";
import Calculator from "./lifting_state_up/question1/Calculator";
import ParentComponent from "./lifting_state_up/question2/ParentComponent";
import ConvertTemperature from "./lifting_state_up/question3/question3a/ConvertTemperature";
import ConvertMoney from "./lifting_state_up/question3/question3b/ConvertMoney";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Lifting state up:</h1>
        <h2>Question 1:</h2>
        <Calculator />
        <h2>Question 2:</h2>
        <ParentComponent />
        <h2>Question 3a:</h2>
        <ConvertTemperature />
        <h2>Question 3b:</h2>
        <ConvertMoney />
      </div>
      <div>
        <h1>Context: </h1>
        <h2>Question 1:</h2>
        <h3>Functional Component:</h3>
        <GrandFatherFunc />
        <h3>Class Component:</h3>
        <GrandFatherClass />
        <h2>Question 2:</h2>
        <GrandParentComponent />
      </div>
      <div>
        <h1>Lesson 9 Extra:</h1>
        <div>
          <Lesson9Extra />
        </div>
      </div>
    </div>
  );
}

export default App;
