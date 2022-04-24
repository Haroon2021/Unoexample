import {Card } from 'Card'

const number = 3;

export const Hand = () => {
    
    return ( 
        <div> 
            <Card />
            <Card />
            <Card />
            </div>
     );
  }


////////////////////////

//   https://www.codegrepper.com/code-examples/javascript/how+to+render+a+component+multiple+times+in+react

// const n = 8;

// [...Array(n)].map((elementInArray, index) => ( 
//     <div className="" key={i}> {Card} </div> 
//     ) 
// )