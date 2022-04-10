import React, { useReducer} from "react";

const colourChoices = ['Red', 'Green', 'Yellow', 'Blue'];

const reducer = (state, action) => {
    switch (action.type) {
      case "DRAWCARD":
        // increment should not change the value of showtext hence the state remains the same
        // Increment should increase th ecount state by 1
        return {color: state.color = colourChoices[Math.floor(Math.random() * colourChoices.length)], 
            number:Math.floor(Math.random() * 10)}

        default:
          return state;
    }
  }

export const Card = () => {

    const [state, dispatch] = useReducer(reducer, {color: '', number: ''})

    return ( 
        <div> 

      <button
        onClick ={ () => {
          dispatch({type: "DRAWCARD"});
        }}
        >
          Draw a card
      </button>
      { <p> {state.color} {state.number} </p>}


        <img src="Assets/Blue_0.png" className="blue card" alt="" /> */}

            </div>
     );
  }