import React, { useState } from 'react';

function Click {
const [toogle, setToogle] = React.useState(true);
  const [cor, setCor] = React.useState('#c3c3c3');
  React.useEffect(() => {
    setCor((state) => toogle ? '#c3c3c3': '#446677');
  }, [toogle]);
  
  
  return (
    <div>
      <button
          onClick={e => 
            setToogle(state => !state)}
       >Alterar</button>
       <br /><br />
       <div style={{
          height: '200px', 
          width: '200px', 
          backgroundColor:cor,
        }}>      
       </div>
    </div>
  )
}

export default Click;