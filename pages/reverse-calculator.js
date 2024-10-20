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

    // set kg or lb
    const [isPounds, setIsPounds] = useState(true)

    // set totalWeight from user input?
    const [totalWeight, setTotalWeight] = useState(0)

    // store clicked plates in a state array
    const [platesOnBarbellRight, setPlatesOnBarbellRight] = useState([])
    const [platesOnBarbellLeft, setPlatesOnBarbellLeft] = useState([])

    // state of barbells - disable after barbell is selected - false by default
    const [barbell, setBarbell] = useState(false)

    // set barbellWeight for reverse calculator
    const [barbellWeight, setBarbellWeight] = useState(0)

    // reset button
    const [reset, setReset] = useState(false)

    // functions

    const handleWeightInputChange = (e) => {
        setTotalWeight(e.target.value) // updates state with current value of input
    }

    const reverseCalculateBarbellWeights = (totalWeight) => {
        console.log("barbell weight: " + barbellWeight)
        // subtract barbell weight
        totalWeight = totalWeight - barbellWeight

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
                        addWeight(plate)
                    }
                }
            })
        }
        // lazy json for now
        return console.log(JSON.stringify(plates))
    }

    const addWeight = (plate) => {
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
        setBarbell(false)
        setPlatesOnBarbellRight([])
        setPlatesOnBarbellLeft([])
    }

    // const switchUnits = (boolean) => {
    //     resetEverything()
    //     setIsPounds(boolean)
    // }

    return (
        <div className="app-container">
            <Header resetEverything={resetEverything} />

            <main>
                <section className="total-weight-section text-center">
                    <Container>
                        <h2>
                            {/* {weight}
                            <small>{isPounds ? "lb" : "kg"}</small> */}
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
                                <h2>Barbells</h2>
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
                                <h2>Weight</h2>
                                <input
                                    type="number"
                                    placeholder="225"
                                    onChange={handleWeightInputChange}
                                />{" "}
                                <small>{isPounds ? "lb" : "kg"}</small>{" "}
                                <input
                                    type="submit"
                                    value="Calculate Plates 💪 "
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

                {/* <section className="plates-section">
                    <Container>
                        <h2>Plates</h2>

                        <div className="large-plates">
                            {isPounds
                                ? weightData.plates.lbLargePlates.map(
                                      (plate, index) => (
                                          <Plate
                                              plateSize={plate.size}
                                              plateColor={plate.color}
                                              weightNum={plate.weight}
                                              onPress={() => addWeight(plate)}
                                              reset={reset}
                                              setReset={setReset}
                                              key={index}
                                              type={plate.size}
                                              unit={"lb"}
                                          />
                                      )
                                  )
                                : weightData.plates.kgLargePlates.map(
                                      (plate, index) => (
                                          <Plate
                                              plateSize={plate.size}
                                              plateColor={plate.color}
                                              weightNum={plate.weight}
                                              onPress={() => addWeight(plate)}
                                              reset={reset}
                                              setReset={setReset}
                                              key={index}
                                              type={plate.type}
                                              unit={"kg"}
                                          />
                                      )
                                  )}
                        </div>

                        <div className="small-plates">
                            {isPounds
                                ? weightData.plates.lbSmallPlates.map(
                                      (plate, index) => (
                                          <Plate
                                              plateSize={plate.size}
                                              plateColor={plate.color}
                                              weightNum={plate.weight}
                                              onPress={() => addWeight(plate)}
                                              reset={reset}
                                              setReset={setReset}
                                              key={index}
                                              type={plate.type}
                                              unit={"lb"}
                                          />
                                      )
                                  )
                                : weightData.plates.kgSmallPlates.map(
                                      (plate, index) => (
                                          <Plate
                                              plateSize={plate.size}
                                              plateColor={plate.color}
                                              weightNum={plate.weight}
                                              onPress={() => addWeight(plate)}
                                              reset={reset}
                                              setReset={setReset}
                                              key={index}
                                              type={plate.type}
                                              unit={"kg"}
                                          />
                                      )
                                  )}
                        </div>
                    </Container>
                </section> */}
            </main>
            <Footer />
            <GoogleAnalytics gaId="G-PKWXFSGSLF" />
        </div>
    )
}
