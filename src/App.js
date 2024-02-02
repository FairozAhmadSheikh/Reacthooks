
import { useEffect, useRef, useState } from 'react';
import './App.css';

// function App() {
//   const [restype, setrestype] = useState("posts");
//   const [res,setRes]=useState([]);
//   const [windowwidth,setwindowwidth]=useState(window.innerWidth)
  
//   function handleResize(){
//     setwindowwidth(window.innerWidth)
//   }

//  useEffect(()=>{window.addEventListener('resize',handleResize)},[])

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${restype}/`)
//       .then(response => response.json())
//       .then(json => setRes(json))
//   },[restype])
//   return (   
//  <>
// <button onClick={()=>setrestype('posts')} >Posts </button>
// <button onClick={()=>setrestype('users')} >Users</button>
// <button onClick={()=>setrestype('comments')} >Comments</button>

// <div className='vi'>
//   <h1>{restype} {windowwidth} </h1>
//   {
//     res.map(item=>{
//       return <pre> {JSON.stringify(item)}</pre>
//     })
//   }
// </div>
//  </>
//   );
// }

/* Defination:  UseMemo()    is used incase of slow functions so that the 
slow function does not re-render, what it does is that it stores the things
inside calculations inside cache memory so that it does not take time to render
NOTE : Use UseMemo only when required else you will  casuse memory inefficeny
in rendering 
*/




            //  Use Ref

const App = () => {

  const [name,setName]=useState("")
  const focuselement=useRef();
  const pre=useRef("");


  // Code for Copying and Selecting whole 
  function handlecopy(){
    focuselement.current.select();
    window.navigator.clipboard.writeText(name)
  }
  // Store Previos Names Here using useEffec()

  useEffect(()=>{pre.current=name;},[name])
  
 
  return (
    
    <div className='yum'>
      <input ref={focuselement}  type='password'  placeholder="Name here It will be encrpted"  onChange={e=>setName(e.target.value)}/>
        <div>
          <h2>My Current name is {name} and previously it was {pre.current}</h2>
        </div>
      <button onClick={()=>{focuselement.current.focus()}} >This will Focus</button>
      <button onClick={handlecopy}>This will Copy</button>
    </div>
  )
}



export default App;
