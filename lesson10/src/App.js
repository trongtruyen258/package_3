import "./App.css";
import FetchPosts from "./component/exerciseUseEffect/FetchPosts";
import RandomGift from "./component/exerciseUseState/exercise1/RandomGift";
import FormComponent from "./component/exerciseUseState/exercise2/FormComponent";
import FromRadio from "./component/exerciseUseState/exercise3/FormRadio";
import FormCheckbox from "./component/exerciseUseState/exercise4/FormCheckbox";
import Clock from "./component/question1/Clock";
import LifeCycleDemo from "./component/question2/LifeCycleDemo";
import Container from "./component/question3/Container";
import RandomNumber from "./component/question4/RandomNumber";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Question 1:</h1>
        <Clock />
      </div>
      <div>
        <h1>Question 2:</h1>
        <LifeCycleDemo />
      </div>
      <div>
        <h1>Question 3:</h1>
        <Container />
      </div>
      <div>
        <h1>Question 4:</h1>
        <RandomNumber />
      </div>
      <div>
        <h1>Exercise UseState:</h1>
        <h2>Exercise 1:</h2>
        <RandomGift />
        <h2>Exercise 2:</h2>
        <FormComponent />
        <h2>Exercise 3:</h2>
        <FromRadio />
        <h2>Exercise 4:</h2>
        <FormCheckbox />
      </div>
      <div>
        <h1>Exercise UseEffect:</h1>
        <FetchPosts />
      </div>
    </div>
  );
}

export default App;
