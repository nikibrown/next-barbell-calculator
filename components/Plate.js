import { useState, useEffect } from "react";

export default function Plate({weightNum, onPress, classNames, reset, setReset }) {
	const [plateCount, setPlateCount] = useState(0)
	let noZeroWeightNum = weightNum.toString()
	noZeroWeightNum = noZeroWeightNum.replace("0.",".")

	const updatePlate = () => {
		setPlateCount(plateCount + 2)
	}

	useEffect(() => {
        if(reset){
            setPlateCount(0)
			setReset(false)
        }
      }, [reset]);


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
				{noZeroWeightNum}

								
				{ plateCount > 0 ? 
					<span className="text-dark position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light border border-dark">
						{plateCount}
					</span> 
				: null }	
				
	  		</button>
		</span>
	)
}