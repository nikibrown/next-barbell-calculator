import React, { useState } from "react";


// add bootstrap css 
import "bootstrap/dist/css/bootstrap.css"



export default function Barbell() {

	const [weight, setWeight] = useState(0)

	const [isClicked, setIsClicked] = useState(false);

	const addWeight = (weightPlate) => {
		// weightPlate * 2 as we load the barbell evenly
		setWeight(weight + (weightPlate * 2 ))
		setIsClicked(true)
	}

	const addBarbell35 = () => {
		setWeight(weight  + 35)
	}

	const addBarbell45 = () => {
		setWeight(weight  + 45)
	}

	const reset = () =>{
		setWeight(0)
	}

	return (
		<div className="app">

			<h1>{weight}</h1>

			<button 
				onClick={addBarbell35}
			>
        		+ 35 Barbell
      		</button>

			<button onClick={addBarbell45}>
        		+ 45 Barbell
      		</button>
			
			<button 
				onClick={() => addWeight(5)}
				className={isClicked ? "active" : null}
			>
        		+ 5
      		</button>

			<button onClick={() => addWeight(10)}>
        		+ 10
      		</button>

			  <button onClick={() => addWeight(15)}>
        		+ 15
      		</button>

			<button onClick={() => addWeight(25)}>
        		+ 25
      		</button>

			<button onClick={() => addWeight(35)}>
        		+ 35
      		</button>

			<button onClick={() => addWeight(45)}>
        		+ 45
      		</button>

			<button onClick={() => addWeight(55)}>
        		+ 55
      		</button>

			<button className="reset" onClick={reset}>Reset</button>

			



		</div>
	)
}
