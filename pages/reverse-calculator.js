import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BarbellButton from "../components/BarbellButton"
import PlateOnBarbell from "../components/PlateOnBarbell"
import Container from "../components/Container"
import { weightData } from "../data/weightData.js"
import { GoogleAnalytics } from "@next/third-parties/google"

export default function ReverseCalculator() {
    // State

    // add up the total weight
    const [weight, setWeight] = useState(0)

    // set totalWeight from user input?
    const [totalWeight, setTotalWeight] = useState("")

    // after first plate calculation reset on second button click
    const [calculateBtnClicked, setCalculateBtnClicked] = useState(false)

    // store clicked plates in a state array
    const [platesOnBarbellRight, setPlatesOnBarbellRight] = useState([])
    const [platesOnBarbellLeft, setPlatesOnBarbellLeft] = useState([])

    // state of barbells - disable after barbell is selected - false by default
    const [barbell, setBarbell] = useState(false)

    // set barbellWeight for reverse calculator
    const [barbellWeight, setBarbellWeight] = useState(0)

    // reset button
    const [reset, setReset] = useState(false)

    const [displayWeight, setDisplayWeight] = useState("")

    // functions
    const handleWeightInputChange = (e) => {
        setTotalWeight(e.target.value) // updates state with current value of input
    }

    const reverseCalculateBarbellWeights = (totalWeight) => {
        if (calculateBtnClicked) {
            setWeight(0)
            // setTotalWeight("")
            setPlatesOnBarbellRight([])
            setPlatesOnBarbellLeft([])
        }

        setDisplayWeight(totalWeight)

        // subtract barbell weight
        totalWeight = totalWeight - barbellWeight

        // TODO: use data/weightData.js
        let plates = [
            // { weight: 55, plateCount: 0 }, // who actually has 55# plates????
            { weight: 45, plateCount: 0, size: "large", color: "blue" },
            { weight: 35, plateCount: 0, size: "large", color: "yellow" },
            { weight: 25, plateCount: 0, size: "large", color: "green" },
            { weight: 15, plateCount: 0, size: "large", color: "black" },
            { weight: 10, plateCount: 0, size: "large", color: "black" },
            { weight: 5, plateCount: 0, size: "small", color: "black" },
            { weight: 2.5, plateCount: 0, size: "small", color: "black" },
            { weight: 1, plateCount: 0, size: "small", color: "black" },
            { weight: 0.75, plateCount: 0, size: "small", color: "black" },
            { weight: 0.5, plateCount: 0, size: "small", color: "black" },
            { weight: 0.25, plateCount: 0, size: "small", color: "black" },
        ]

        // while loop - iterate through until we run out of weight
        while (totalWeight > 0) {
            plates.forEach((plate) => {
                if (totalWeight / plate.weight >= 2) {
                    // set plateCount and round down
                    plate.plateCount = Math.floor(totalWeight / plate.weight)

                    // if plateCount is odd we probably dont want that...
                    if (plate.plateCount % 2 !== 0) {
                        // odd plateCount - lets get rid of one of them
                        plate.plateCount = plate.plateCount - 1
                    }

                    // subtract plateCount from totalWeight
                    totalWeight = totalWeight - plate.plateCount * plate.weight
                }

                // add weights to barbell
                if (plate.plateCount) {
                    // addWeight plateCount / 2 number of times (each side)
                    for (let i = 0; i < plate.plateCount / 2; i++) {
                        addWeightToBarbell(plate)
                    }
                }
            })
        }

        // ios centers the page when you tap on an input so scroll back up to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth", // This makes the scroll smooth
        })

        // setCalculateBtnClicked after this runs for the first time. Then we clear the barbell before we calculate additional times
        setCalculateBtnClicked(true)
    }

    const addWeightToBarbell = (plate) => {
        setWeight(weight + plate.weight * 2)
        // adds the clicked weightPlate to the end of the platesOnBarbell array
        setPlatesOnBarbellRight((current) => [
            ...current,
            {
                weightNum: plate.weight,
                plateColor: plate.color,
                plateSize: plate.size,
            },
        ])
        // adds the clicked weightPlate to the beginning of the platesOnBarbell array
        setPlatesOnBarbellLeft((current) => [
            {
                weightNum: plate.weight,
                plateColor: plate.color,
                plateSize: plate.size,
            },
            ...current,
        ])
    }

    const addBarbellWeight = (barbellWeight) => {
        setWeight(weight + barbellWeight)
        setBarbell(true)
        setBarbellWeight(barbellWeight)
    }

    const resetEverything = () => {
        setReset(true)
        setWeight(0)
        setTotalWeight("")
        setDisplayWeight("")
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
                            {displayWeight ? (
                                <>
                                    {displayWeight}
                                    <small> lb</small>
                                </>
                            ) : (
                                <>&nbsp;</>
                            )}
                        </h2>
                        <section className="plates-on-barbell-section">
                            <div className="barbell-container">
                                <div className="plates-on-barbell left-plates">
                                    {platesOnBarbellLeft.map((plate, index) => (
                                        <PlateOnBarbell
                                            plateSize={plate.plateSize}
                                            plateColor={plate.plateColor}
                                            weightNum={plate.weightNum}
                                            key={index}
                                        />
                                    ))}
                                </div>
                                <div className="plates-on-barbell right-plates">
                                    {platesOnBarbellRight.map(
                                        (plate, index) => (
                                            <PlateOnBarbell
                                                plateSize={plate.plateSize}
                                                plateColor={plate.plateColor}
                                                weightNum={plate.weightNum}
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
                        <div className="flex-container">
                            <div className="column">
                                <div className="barbell-selection">
                                    <h2>Select Barbell</h2>
                                    {weightData.barbells.lbBarbells.map(
                                        (barbellWeight, index) => (
                                            <BarbellButton
                                                weightNum={barbellWeight}
                                                onPress={() => {
                                                    addBarbellWeight(
                                                        barbellWeight
                                                    )
                                                }}
                                                disableBarbell={barbell}
                                                reset={reset}
                                                setReset={setReset}
                                                key={index}
                                                unit={"lb"}
                                            />
                                        )
                                    )}
                                </div>
                                <div className="weight-input">
                                    <h2>Enter Weight</h2>
                                    <div>
                                        <input
                                            type="number"
                                            onChange={handleWeightInputChange}
                                            value={totalWeight}
                                        />
                                    </div>

                                    <input
                                        className="btn btn-primary"
                                        type="submit"
                                        value="Calculate Plates 💪"
                                        onClick={() => {
                                            reverseCalculateBarbellWeights(
                                                totalWeight
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
            <GoogleAnalytics gaId="G-PKWXFSGSLF" />
        </div>
    )
}
