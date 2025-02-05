import { useState } from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";

const App = () => {
  const [num, setNum] = useState<number>(0)
  
  return (
    <div className="bg-red-300">
      <UserCard name="Rahul" age={25} email="rahulpratik1212@gmail.com"/>
      <Counter count={num} inc={setNum} />

    </div>
  )
}

export default App;