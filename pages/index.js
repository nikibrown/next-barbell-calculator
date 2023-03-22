import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"

export default function Calculator() {

	// add up the total weight
	const [weight, setWeight] = useState(0)

	// Pounds or Kilos
	const [unit, setUnits] = useState("Pounds")


	const addWeight = (weightPlate) => {
		// weightPlate * 2 as we load the barbell evenly
		setWeight(weight + (weightPlate * 2 ))
		// setIsClicked(true)
		// setPlateCount(plateCount + 2)
	}

	const addBarbellWeight = (barbellWeight) => {
		setWeight(weight + barbellWeight)
	}

	const reset = () =>{
		setWeight(0)
		setUnits(null)
		// how to reset plateCount inside of <Plate />?
	}

	return (
		<div className="app text-center position-relative">

			{/* {unit} */}

			<button className="reset btn btn-small btn-danger position-absolute top-0 end-0" onClick={reset}>Reset</button>

			<h1>
				{weight} 
				{/* <span className="pounds">lb</span><span className="kilos">kg</span> */}
			
			</h1>

			{/* <h2>Units of Measurement</h2>

			<button 
				type="button"
				className="btn btn-secondary"
				onClick={() => setUnits("Pounds")}
			>
        		Pounds
      		</button>

			  <button 
				type="button"
				className="btn btn-secondary"
				onClick={() => setUnits("Kilos")}
			>
        		Kilos
      		</button> */}

			<h2>Barbells</h2>

			<button 
				type="button"
				className="btn btn-secondary"
				onClick={() => addBarbellWeight(45)}>
        		45 Barbell
      		</button>

			<button
				type="button"
				className="btn btn-secondary"
				onClick={() => addBarbellWeight(35)}
			>
        		35 Barbell
      		</button>

			  <button
				type="button"
				className="btn btn-secondary"
				onClick={() => addBarbellWeight(15)}
			>
        		15 Barbell
      		</button>

			<h2>Plates</h2>

			<Plate
				classNames="btn btn-dark position-relative"
				weightNum={10}
				onPress={() => addWeight(10)}
			/>

			<Plate
				classNames="btn btn-success position-relative"
				weightNum={25}
				onPress={() => addWeight(25)}
			/>

			<Plate
				classNames="btn btn-primary position-relative"
				weightNum={45}
				onPress={() => addWeight(45)}
			/>

			<Plate
				classNames="btn btn-danger position-relative"
				weightNum={55}
				onPress={() => addWeight(55)}
			/>
		</div>
	)
}

export function Plate({weightNum, onPress, classNames}) {
	// count of each type of plates = how to get this per plate?
	const [plateCount, setPlateCount] = useState(0)

	const updatePlate = () => {
		setPlateCount(plateCount + 2)
	}

	return (
		<span 
			style={{display: "inline-block"}}
			onClick={updatePlate}
		>
			<button 
				type="button"
				className={classNames}
				onClick={onPress}
			>
				{weightNum}
				
				{ plateCount > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{plateCount}</span> : null }	

	  		</button>
		</span>
	)
}

{/* <button 
				className="btn btn-dark position-relative" 
				// onClick={() => addWeight(.25)}

				onClick={() => setPlateCount(plateCount + 2)}
			>
        		+ .25 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button 
				className="btn btn-dark position-relative" 
				onClick={() => addWeight(.5)}
			>
        		+ .5 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button 
				className="btn btn-dark position-relative" 
				onClick={() => addWeight(.75)}
			>
        		+ .75 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button 
				className="btn btn-dark position-relative" 
				onClick={() => addWeight(1)}
			>
        		+ 1 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>


			<button 
				className="btn btn-dark position-relative" 
				onClick={() => addWeight(2.5)}
			>
        		+ 2.5 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>


			<button 
				className={isClicked ? "active btn btn-dark position-relative " : "btn btn-dark position-relative"}
				onClick={() => addWeight(5)}
				
			>
        		+ 5 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button 
				className="btn btn-dark position-relative"
				onClick={() => addWeight(10)}>
        		+ 10 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button 
				className="btn btn-dark position-relative"
			  	onClick={() => addWeight(15)}>
        		+ 15 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button 
				className="btn btn-success position-relative"
				onClick={() => addWeight(25)}>
        		+ 25 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button 
				className="btn btn-warning position-relative"
				onClick={() => addWeight(35)}>
        		+ 35 <span className="pounds">lb</span><span className="kilos">kg</span>
      		</button>

			<button
				className="btn btn-primary position-relative"
				onClick={() => addWeight(45)}>
        		+ 45 <span className="pounds">lb</span><span className="kilos">kg</span>
				<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{plateCount}</span>
			</button> */}

			

			{/* <button 
				className="btn btn-danger position-relative"
				onClick={() => addWeight(55)}
			>
        		+ 55 <span className="pounds">lb</span><span className="kilos">kg</span>

				

      		</button> */}