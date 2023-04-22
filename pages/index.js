import { useState } from "react"
import Plate from "../components/Plate"
import Barbell from "../components/Barbell"
import PlateOnBarbell from "../components/PlateOnBarbell"

export default function Calculator() {
    // data to map through
    const barbells = [45, 35, 15]

    const smallPlates = [
        {
            weight: 5,
            styles: "btn-dark weight-sm",
        },
        {
            weight: 1,
            styles: "btn-dark weight-sm",
        },
        {
            weight: 0.75,
            styles: "btn-dark weight-sm",
        },
        {
            weight: 0.5,
            styles: "btn-dark weight-sm",
        },
        {
            weight: 0.25,
            styles: "btn-dark weight-sm",
        },
    ]

    const largePlates = [
        {
            weight: 55,
            styles: "btn-danger weight-lg",
        },
        {
            weight: 45,
            styles: "btn-primary weight-lg",
        },
        {
            weight: 35,
            styles: "btn-warning weight-lg",
        },
        {
            weight: 25,
            styles: "btn-success weight-lg",
        },
        {
            weight: 15,
            styles: "btn-dark weight-lg",
        },

        {
            weight: 10,
            styles: "btn-dark weight-lg",
        },
    ]

    // add up the total weight
    const [weight, setWeight] = useState(0)

    // store clicked plates in a state array
    const [platesOnBarbell, setPlatesOnBarbell] = useState([])

    const [platesOnBarbellReversed, setPlatesOnBarbellReversed] = useState([])

    // const [showClips, setShowClips] = useState(false)

    // state of barbells - disable after barbell is selected - false by default
    const [barbell, setBarbell] = useState(false)

    // reset button
    const [reset, setReset] = useState(false)

    // undo button?
    // remove last number from setPlatesOnBarBell, first num from setPlatesOnBarbellReversed? and then subtract from setWeight?
    // or should setWeight be an array that gets reduced?

    const addWeight = (weightPlate) => {
        setWeight(weight + weightPlate * 2)
        // adds the clicked weightPlate to the end of the platesOnBarbell array
        setPlatesOnBarbell((current) => [...current, weightPlate])
        // adds the clicked weightPlate to the beginning of the platesOnBarbell array
        setPlatesOnBarbellReversed((current) => [weightPlate, ...current])
        // setShowClips(true)
    }

    const addBarbellWeight = (barbellWeight) => {
        setWeight(weight + barbellWeight)
        setBarbell(true)
    }

    const resetEverything = () => {
        setReset(true)
        setWeight(0)
        setBarbell(false)
        setPlatesOnBarbell([])
        setPlatesOnBarbellReversed([])
        // setShowClips(false)
    }

    return (
        <div className="app text-center position-relative">
            <button
                className="reset btn btn-small btn-danger position-absolute top-0 end-0"
                onClick={() => resetEverything()}
            >
                Reset
            </button>

            <h1>
                {weight}
                <small>lb</small>
            </h1>

            <div className="barbell-weights">
                <div className="left-weights weights">
                    {platesOnBarbellReversed.map((weightNum, index) => (
                        <PlateOnBarbell weightNum={weightNum} key={index} />
                    ))}
                </div>
                <div className="right-weights weights">
                    {platesOnBarbell.map((weightNum, index) => (
                        <PlateOnBarbell weightNum={weightNum} key={index} />
                    ))}
                </div>
            </div>

            <h2>Barbells</h2>

            {barbells.map((barbellWeight, index) => (
                <Barbell
                    weightNum={barbellWeight}
                    onPress={() => {
                        addBarbellWeight(barbellWeight)
                    }}
                    disableBarbell={barbell}
                    reset={reset}
                    setReset={setReset}
                    key={index}
                />
            ))}

            <h2>Plates</h2>

            <div>
                {largePlates.map((plate, index) => (
                    <Plate
                        classNames={`btn btn-plate position-relative ${plate.styles}`}
                        weightNum={plate.weight}
                        onPress={() => addWeight(plate.weight)}
                        reset={reset}
                        setReset={setReset}
                        key={index}
                    />
                ))}
            </div>

            <div>
                {smallPlates.map((plate, index) => (
                    <Plate
                        classNames={`btn btn-plate position-relative ${plate.styles}`}
                        weightNum={plate.weight}
                        onPress={() => addWeight(plate.weight)}
                        reset={reset}
                        setReset={setReset}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}
