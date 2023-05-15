import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Plate from "../components/Plate"
import Barbell from "../components/Barbell"
import PlateOnBarbell from "../components/PlateOnBarbell"

export default function Calculator() {
    // data
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

    // State

    // add up the total weight
    const [weight, setWeight] = useState(0)

    // store clicked plates in a state array
    const [platesOnBarbellRight, setPlatesOnBarbellRight] = useState([])

    const [platesOnBarbellLeft, setPlatesOnBarbellLeft] = useState([])

    // state of barbells - disable after barbell is selected - false by default
    const [barbell, setBarbell] = useState(false)

    // reset button
    const [reset, setReset] = useState(false)

    // functions
    const addWeight = (weightPlate) => {
        setWeight(weight + weightPlate * 2)
        // adds the clicked weightPlate to the end of the platesOnBarbell array
        setPlatesOnBarbellRight((current) => [...current, weightPlate])
        // adds the clicked weightPlate to the beginning of the platesOnBarbell array
        setPlatesOnBarbellLeft((current) => [weightPlate, ...current])
    }

    const addBarbellWeight = (barbellWeight) => {
        setWeight(weight + barbellWeight)
        setBarbell(true)
    }

    const resetEverything = () => {
        setReset(true)
        setWeight(0)
        setBarbell(false)
        setPlatesOnBarbellRight([])
        setPlatesOnBarbellLeft([])
    }

    return (
        <div className="app-container">
            <Header />
            <main>
                <section className="total-weight">
                    <div className="container text-center position-relative">
                        <h1>
                            {weight}
                            <small>lb</small>
                        </h1>
                        <button
                            className="reset btn btn-small btn-danger position-absolute top-0 end-0"
                            onClick={() => resetEverything()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"
                                />
                            </svg>
                        </button>
                    </div>
                </section>

                <section className="weights-on-barbell">
                    <div className="container">
                        <div className="barbell-weights-container">
                            <div className="weights left-weights">
                                {platesOnBarbellLeft.map((weightNum, index) => (
                                    <PlateOnBarbell
                                        weightNum={weightNum}
                                        key={index}
                                    />
                                ))}
                            </div>
                            <div className="weights right-weights">
                                {platesOnBarbellRight.map(
                                    (weightNum, index) => (
                                        <PlateOnBarbell
                                            weightNum={weightNum}
                                            key={index}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="barbells">
                    <div className="container">
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
                    </div>
                </section>

                <section className="plates">
                    <div className="container">
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
                </section>
            </main>
            <Footer />
        </div>
    )
}
