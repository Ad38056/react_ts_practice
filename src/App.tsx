
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
 

type GreetingProps = {
  name: string;
  age: number;
};
function Greeting({ name, age }: GreetingProps) {
  return (
    <p>
      Hello, {name}. You are {age} years old.
    </p>
  );

  return <Greeting name="Sara" age={25} />;

}