import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Plate from "../components/Plate"
import BarbellButton from "../components/BarbellButton"
import PlateOnBarbell from "../components/PlateOnBarbell"
import Container from "../components/Container"

export default function Calculator() {
    // data
    const barbells = [45, 35, 15]

    const smallPlates = [
        {
            weight: 5,
            type: "small",
        },
        {
            weight: 1,
            type: "small",
        },
        {
            weight: 0.75,
            type: "small",
        },
        {
            weight: 0.5,
            type: "small",
        },
        {
            weight: 0.25,
            type: "small",
        },
    ]

    const largePlates = [
        {
            weight: 55,
            type: "large",
        },
        {
            weight: 45,
            type: "large",
        },
        {
            weight: 35,
            type: "large",
        },
        {
            weight: 25,
            type: "large",
        },
        {
            weight: 15,
            type: "large",
        },
        {
            weight: 10,
            type: "large",
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
            <Header resetEverything={resetEverything} />
            <main>
                <section className="total-weight-section text-center">
                    <Container>
                        <h2>
                            {weight}
                            <small>lb</small>
                        </h2>

                        {/* <ResetButton
                            onPress={() => resetEverything()}
                            aria-label="Reset Barbell"
                        /> */}

                        <section className="plates-on-barbell-section">
                            <div className="barbell-container">
                                <div className="plates-on-barbell left-plates">
                                    {platesOnBarbellLeft.map(
                                        (weightNum, index) => (
                                            <PlateOnBarbell
                                                plateType={"plate" + weightNum}
                                                weightNum={weightNum}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="plates-on-barbell right-plates">
                                    {platesOnBarbellRight.map(
                                        (weightNum, index) => (
                                            <PlateOnBarbell
                                                plateType={"plate" + weightNum}
                                                weightNum={weightNum}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </section>
                    </Container>
                </section>

                <section className="barbells-section">
                    <Container>
                        <h2>Barbells</h2>

                        {barbells.map((barbellWeight, index) => (
                            <BarbellButton
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
                    </Container>
                </section>

                <section className="plates-section">
                    <Container>
                        <h2>Plates</h2>

                        <div className="large-plates">
                            {largePlates.map((plate, index) => (
                                <Plate
                                    plateType={"plate" + plate.weight}
                                    weightNum={plate.weight}
                                    onPress={() => addWeight(plate.weight)}
                                    reset={reset}
                                    setReset={setReset}
                                    key={index}
                                    type={plate.type}
                                />
                            ))}
                        </div>

                        <div className="small-plates">
                            {smallPlates.map((plate, index) => (
                                <Plate
                                    plateType={"plate" + plate.weight}
                                    weightNum={plate.weight}
                                    onPress={() => addWeight(plate.weight)}
                                    reset={reset}
                                    setReset={setReset}
                                    key={index}
                                    type={plate.type}
                                />
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    )
}
