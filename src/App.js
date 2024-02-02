
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [restype, setrestype] = useState("posts");
  const [res,setRes]=useState([]);
  const [windowwidth,setwindowwidth]=useState(window.innerWidth)
  
  function handleResize(){
    setwindowwidth(window.innerWidth)
  }

 useEffect(()=>{window.addEventListener('resize',handleResize)},[])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${restype}/`)
      .then(response => response.json())
      .then(json => setRes(json))
  },[restype])
  return (   
 <>
<button onClick={()=>setrestype('posts')} >Posts </button>
<button onClick={()=>setrestype('users')} >Users</button>
<button onClick={()=>setrestype('comments')} >Comments</button>

<div className='vi'>
  <h1>{restype} {windowwidth} </h1>
  {
    res.map(item=>{
      return <pre> {JSON.stringify(item)}</pre>
    })
  }
</div>
 </>
  );
}

export default App;
