import React, { useState } from "react"
import HeaderNoBanner from "../components/HeaderNoBanner"
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

    // weight at the top of the app
    const [displayWeight, setDisplayWeight] = useState("0")

    // after first plate calculation reset on second button click
    const [calculateBtnClicked, setCalculateBtnClicked] = useState(false)

    // store clicked plates in a state array
    const [platesOnBarbellRight, setPlatesOnBarbellRight] = useState([])
    const [platesOnBarbellLeft, setPlatesOnBarbellLeft] = useState([])

    // TODO: Rename. state of barbells - disable after barbell is selected - false by default
    const [barbell, setBarbell] = useState(false)

    // set barbellWeight for reverse calculator
    const [barbellWeight, setBarbellWeight] = useState(0)

    // reset button
    const [reset, setReset] = useState(false)

    // set kg or lb
    const [isPounds, setIsPounds] = useState(true)

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
        let plates = {
            // { weight: 55, plateCount: 0 }, // who actually has 55# plates????
            pounds: [
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
            ],
            kilos: [
                { weight: 20, plateCount: 0, size: "large", color: "blue" },
                { weight: 15, plateCount: 0, size: "large", color: "yellow" },
                { weight: 10, plateCount: 0, size: "large", color: "green" },
                { weight: 5, plateCount: 0, size: "small", color: "black" },
                { weight: 2.5, plateCount: 0, size: "small", color: "black" },
                { weight: 2, plateCount: 0, size: "small", color: "black" },
                { weight: 1.5, plateCount: 0, size: "small", color: "black" },
                { weight: 1, plateCount: 0, size: "small", color: "black" },
                { weight: 0.5, plateCount: 0, size: "small", color: "black" },
            ],
        }

        // while loop - iterate through until we run out of weight
        while (totalWeight > 0) {
            // need if here for pounds / kilos

            let selectedPlates

            isPounds
                ? (selectedPlates = plates.pounds)
                : (selectedPlates = plates.kilos)

            selectedPlates.forEach((plate) => {
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
        setPlatesOnBarbellRight((existingPlates) => [
            ...existingPlates,
            {
                weightNum: plate.weight,
                plateColor: plate.color,
                plateSize: plate.size,
            },
        ])
        // adds the clicked weightPlate to the beginning of the platesOnBarbell array
        setPlatesOnBarbellLeft((existingPlates) => [
            {
                weightNum: plate.weight,
                plateColor: plate.color,
                plateSize: plate.size,
            },
            ...existingPlates,
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

    const switchUnits = (boolean) => {
        resetEverything()
        setIsPounds(boolean)
    }

    return (
        <div className="app-container reverse-calculator">
            <HeaderNoBanner resetEverything={resetEverything} />

            <main>
                <section className="total-weight-section text-center">
                    <Container>
                        <h2>
                            {displayWeight ? <>{displayWeight}</> : <>&nbsp;</>}

                            <small>{isPounds ? "lb" : "kg"}</small>
                        </h2>
                        <section className="plates-on-barbell-section">
                            <div
                                className={
                                    barbell
                                        ? "barbell-container barbell-selected"
                                        : "barbell-container"
                                }
                            >
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
                        <div className="grid-container">
                            <div className="column weight-input">
                                <h3>Enter Weight</h3>
                                <input
                                    type="number"
                                    onChange={handleWeightInputChange}
                                    value={totalWeight}
                                    inputMode="decimal"
                                />
                            </div>
                            <div className="column weight-units">
                                <h3>Select Units</h3>

                                <div className="weight-units-container">
                                    <div className="weight-unit">
                                        <input
                                            type="radio"
                                            value="lb"
                                            id="lb"
                                            name="unit"
                                            defaultChecked
                                            onClick={() => switchUnits(true)}
                                        />
                                        <label htmlFor="lb">LB</label>
                                    </div>

                                    <div className="weight-unit">
                                        <input
                                            type="radio"
                                            value="kg"
                                            id="kg"
                                            name="unit"
                                            onClick={() => switchUnits(false)}
                                        />
                                        <label htmlFor="kg">KG</label>
                                    </div>
                                </div>
                            </div>

                            <div className="column barbell">
                                <h3>Select Barbell</h3>

                                {isPounds
                                    ? weightData.barbells.lbBarbells.map(
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
                                      )
                                    : weightData.barbells.kgBarbells.map(
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
                                                  unit={"kg"}
                                              />
                                          )
                                      )}
                            </div>

                            <div className="column calculate-button">
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="💪 Calculate Plates"
                                    onClick={() => {
                                        reverseCalculateBarbellWeights(
                                            totalWeight
                                        )
                                    }}
                                />
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
