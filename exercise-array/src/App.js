import "./App.css";
import ConcatArray from "./components/ConcatArray";
import ConcatString from "./components/ConcatString";
import CopyArrayBySlice from "./components/CopyArrayBySlice";
import DivisibleBy5 from "./components/DivisibleBy5";
import EveryAndSome from "./components/EveryAndSome";
import EveryNumber from "./components/EveryNumber";
import EveryString from "./components/EveryString";
import FilterEven from "./components/FIlterEven";
import FilterAndReduce from "./components/FilterAndReduce";
import FilterString from "./components/FilterString";
import JoinArray from "./components/JoinArray";
import MapAndJoin from "./components/MapAndJoin";
import MapArray from "./components/MapArray";
import MaxNumber from "./components/MaxNumber";
import NameStartA from "./components/NameStartA";
import OddNumber from "./components/OddNumber";
import PrintNumber from "./components/PrintNumber";
import PrintString from "./components/PrintString";
import ReduceAndFilter from "./components/ReduceAndFilter";
import RemoveElement from "./components/RemoveElement";
import SomeNumber from "./components/SomeNumber";
import SomeString from "./components/SomeString";
import SortAndSlice from "./components/SortAndSlice";
import SortByOder from "./components/SortByOder";
import SortString from "./components/SortString";
import SquareEvenNumber from "./components/SquareEvenNumber";
import SumNumber from "./components/SumNumber";
import SumSquare from "./components/SumSquare";
import Upcase from "./components/Upcase";

function App() {
  return (
    <div className="App">
      <div className="text-left">
        <h1 className="text-lg font-bold">Filter even from number array:</h1>
        <FilterEven />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Filter string has length greater than 5:
        </h1>
        <FilterString />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Multiply all numbers in the integer array by 2:
        </h1>
        <MapArray />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">Change string in array to upcase:</h1>
        <Upcase />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">The first element divisible by 5:</h1>
        <DivisibleBy5 />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          First names starting with the letter "A":
        </h1>
        <NameStartA />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Calculate the sum of all numbers in the array:
        </h1>
        <SumNumber />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Concatenates all strings in the array into a single string:
        </h1>
        <ConcatString />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Print element in the integer array:
        </h1>
        <PrintNumber />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Print element in the string array:
        </h1>
        <PrintString />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Sort the integer array in ascending order:
        </h1>
        <SortByOder />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Sort the array of names alphabetically:
        </h1>
        <SortString />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Checks if all numbers in the integer array are greater than 10:
        </h1>
        <EveryNumber />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Checks if all strings in the array have length greater than 3:
        </h1>
        <EveryString />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Checks if there are any even numbers in the integer array:
        </h1>
        <SomeNumber />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Check if there are any names in the name array that start with the
          letter "B":
        </h1>
        <SomeString />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Copy part of the integer array from positions 2 to 4:
        </h1>
        <CopyArrayBySlice />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Remove the 3rd element from the integer array:
        </h1>
        <RemoveElement />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Combine two integer arrays into a new array:
        </h1>
        <ConcatArray />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Converts an array of strings into a single string, separated by
          commas:
        </h1>
        <JoinArray />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Creates a new array containing the squares of all even numbers in the
          original integer array:
        </h1>
        <SquareEvenNumber />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Calculate the sum of the squares of all numbers in the integer array:
        </h1>
        <SumSquare />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Filter out all odd numbers from the integer array and then multiply
          them by 3:
        </h1>
        <OddNumber />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Find the largest element in the integer array and then filter out all
          numbers equal to or greater than it:
        </h1>
        <MaxNumber />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Sort the integer array in descending order and then take the first 3
          elements:
        </h1>
        <SortAndSlice />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Check if all the numbers in the integer array are prime and see if
          there are any even numbers:
        </h1>
        <EveryAndSome />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Filter out all numbers divisible by 3 from the integer array and then
          calculate their sum:
        </h1>
        <FilterAndReduce />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Converts the string array into a single string, each element separated
          by a newline:
        </h1>
        <MapAndJoin />
      </div>
      <div className="text-left">
        <h1 className="text-lg font-bold">
          Calculate the sum of all odd numbers in the integer array and then
          filter out numbers divisible by 5:
        </h1>
        <ReduceAndFilter />
      </div>
    </div>
  );
}

export default App;
