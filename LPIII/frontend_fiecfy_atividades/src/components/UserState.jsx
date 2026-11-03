import { useState } from "react";

const UserState = () => {
const [Num, setNum] = useState(10)
  return (
    <div>
        <p>Numero atual: {Num}</p>
        <button onClick={() => setNum(20)}>Alterar valor</button>
    </div>
  )
}

export default UserState
