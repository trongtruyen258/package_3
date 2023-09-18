import "./App.css";
import EventQuestion2 from "./event/EventQuestion2";
import EventQuestion3 from "./event/EventQuestion3";
import EventQuestion4 from "./event/EventQuestion4";
import EventQuestion5 from "./event/EventQuestion5";
import EventQuestion6 from "./event/EventQuestion6";
import EventQuestion7 from "./event/EventQuestion7";
import Question1a from "./form/question1/Question1a";
import Question1b from "./form/question1/Question1b";
import Question1c from "./form/question1/Question1c";
import TwoWayBinding from "./form/question2/TwoWayBinding";
import Convert1a from "./form/question3/Convert1a";
import FormQuestion4 from "./form/question4/FormQuestion4";
import Question1 from "./fragment/Question1";
import Question2 from "./fragment/Question2";
import PropsQuestion1 from "./props/PropsQuestion1";
import PropsQuestion2 from "./props/PropsQuestion2";
import PropsQuestion3 from "./props/PropsQuestion3";
import PropsQuestion4 from "./props/question4/PropsQuestion4";
import StateQuestion1 from "./state/StateQuestion1";
import StateQuestion2 from "./state/StateQuestion2";
import StateQuestion3 from "./state/StateQuestion3";
import StateQuestion4 from "./state/StateQuestion4";
import StateQuestion5 from "./state/StateQuestion5";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Fragment:</h1>
        <Question1 />
        <Question2 />
      </div>
      <div>
        <h1>Form:</h1>
        <Question1a />
        <Question1b />
        <h2>Question 1-c:</h2>
        <Question1c />
        <TwoWayBinding />
        <Convert1a />
        <FormQuestion4 />
      </div>
      <div>
        <h1>Event:</h1>
        <h2>Question 2:</h2>
        <EventQuestion2 />
        <h2>Question 3:</h2>
        <EventQuestion3 />
        <h2>Question 4:</h2>
        <EventQuestion4 />
        <h2>Question 5:</h2>
        <EventQuestion5 />
        <h2>Question 6:</h2>
        <EventQuestion6 />
        <h2>Question 7:</h2>
        <EventQuestion7 />
      </div>
      <div>
        <h1>Props:</h1>
        <h2>Question 1: </h2>
        <PropsQuestion1 />
        <h2>Question 2:</h2>
        <PropsQuestion2 />
        <h2>Question 3:</h2>
        <PropsQuestion3 />
        <h2>Question 4:</h2>
        <PropsQuestion4 />
      </div>
      <div>
        <h1>State:</h1>
        <h2>Question 1:</h2>
        <StateQuestion1 />
        <h2>Question 2:</h2>
        <StateQuestion2 />
        <h2>Question 3:</h2>
        <StateQuestion3 />
        <h2>Question 4:</h2>
        <StateQuestion4 />
        <h2>Question 5:</h2>
        <StateQuestion5 />
      </div>
    </div>
  );
}

export default App;
