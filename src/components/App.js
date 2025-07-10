import React, {Component, useState} from "react";
import '../styles/App.css';

const obj ={
    1:"Friends",
    2:"Love",
    3:"Affection",
    4:"Marrige",
    5:"Enemy",
    0:"Siblings",


}
 const App = () => {
    
  
    
        const[relation,setRelation]  = useState("");
        const[name1,setName1] =useState("");
        const[name2,setName2] =useState("");
        const[flag,setflag] = useState(false);
        function handleRelation() {
          
          let Name = name1+name2;
          const unilength = new Set(Name).size;
          
          setRelation(obj[unilength%6]);
          setflag(true);
        }
        function handleClear(){
            setName1("");
            setName2("");
           setflag(false);
             
        }

        return(
            <div id="main">
                
             <input type="text" placeholder="Enter first name" data-testid="input1" name="name1"  value={name1} onChange={(e)=> (setName1(e.target.value),setflag(false))}></input>
             <input type="text" placeholder="Enter second name" data-testid="input2" name="name2" value={name2}  onChange={(e)=>(setName2(e.target.value),setflag(false))}></input>
             <button data-testid="calculate-relationship" name="calculate-relationship" type="button" onClick={handleRelation}>Calculate Relationship Future</button>
             <button type="button" data-testid="clear" name="clear" onClick={handleClear}>Clear</button>
             
             {flag ? ((name1.length===0 || name2.length===0)?(<h3 data-testid="answer">Please Enter valid input</h3>):(<h3 data-testid="answer">{relation}</h3>)):(<h3></h3>)}
            </div>
        )
    
}


export default App;
