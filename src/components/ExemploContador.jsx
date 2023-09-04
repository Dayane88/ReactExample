import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

return (
   <>
   <div>
    <p>Clique aqui {count} vezes</p>
    <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>  
    </>
);
}

export default Contador;