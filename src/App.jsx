import { useState } from "react";
import "./App.css";
import List from "./list";
function App() {
  const [data, setData] = useState([]);
  const [style,setStyle]= useState({style:"none",input:'block',sort:true ,value:''});
let value;
  return (
    <>
      <main>
        <div className="container">
          <div className="yellow"></div>
          <div className="content">
            <h1>To-Do List</h1>
            <button className="sort-button" onClick={()=>{
              if(style.sort){
              data.sort()
              setData([...data])
              style.sort=false
              setStyle({...style})
            }else{
              data.sort().reverse()
              setData([...data])
              style.sort=true
              setStyle({...style})
              }
            }}></button>
            <div className="list">
              <ul>
                {data.map((item, index) => {
                  return (
                    <List
                      item={item}
                      data={data}
                      setData={setData}
                      key={index}
                      index={index}
                    />
                  );
                })}
              </ul>
              <div className="input" style={{display:style.input}}>
                <input  type="text" placeholder="new" value={style.value} onChange={(e)=>{value=e.target.value
                  style.value=e.target.value
                  setStyle({...style})
                }}/>
                <button className="list-remove"></button>
              </div>
            </div>
            <div className="btn  div-add">
              <button style={{display:style.style}} onClick={()=>{
                console.log('cliked')
                style.style='none';
                style.input='block';
                setStyle({...style})
              }} >+</button>
              <span className="span-add" onClick={()=>{
                if(value){
                  data.push(value);
               setData([...data]);
               style.style='block';
               style.input='none';
               style.value='';
               setStyle({...style})
                }
              }}>Add</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
