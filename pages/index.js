import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Plate from "../components/Plate"
import BarbellButton from "../components/BarbellButton"
import PlateOnBarbell from "../components/PlateOnBarbell"
import Container from "../components/Container"

export default function Calculator() {
    // data
    const lbBarbells = [45, 35, 15]

    const kgBarbells = [20, 15, 6.8]

    const lbSmallPlates = [
        {
            weight: 5,
            size: "small",
            color: "black",
        },
        {
            weight: 1,
            size: "small",
            color: "black",
        },
        {
            weight: 0.75,
            size: "small",
            color: "black",
        },
        {
            weight: 0.5,
            size: "small",
            color: "black",
        },
        {
            weight: 0.25,
            size: "small",
            color: "black",
        },
    ]

    const kgSmallPlates = [
        {
            weight: 5,
            size: "small",
            color: "black",
        },
        {
            weight: 2.5,
            size: "small",
            color: "black",
        },
        {
            weight: 2,
            size: "small",
            color: "black",
        },
        {
            weight: 1.5,
            size: "small",
            color: "black",
        },
        {
            weight: 1,
            size: "small",
            color: "black",
        },
        {
            weight: 0.5,
            size: "small",
            color: "black",
        },
    ]

    const lbLargePlates = [
        {
            weight: 55,
            size: "large",
            color: "red",
        },
        {
            weight: 45,
            size: "large",
            color: "blue",
        },
        {
            weight: 35,
            size: "large",
            color: "yellow",
        },
        {
            weight: 25,
            size: "large",
            color: "green",
        },
        {
            weight: 15,
            size: "large",
            color: "black",
        },
        {
            weight: 10,
            size: "large",
            color: "black",
        },
    ]

    const kgLargePlates = [
        {
            weight: 25,
            size: "large",
            color: "red",
        },
        {
            weight: 20,
            size: "large",
            color: "blue",
        },
        {
            weight: 15,
            size: "large",
            color: "yellow",
        },
        {
            weight: 10,
            size: "large",
            color: "green",
        },
    ]

    // State

    // add up the total weight
    const [weight, setWeight] = useState(0)

    // set kg or lb
    const [isPounds, setIsPounds] = useState(true)

    // store clicked plates in a state array

    // make this an array of objects with the plate.weight and plate.color?
    const [platesOnBarbellRight, setPlatesOnBarbellRight] = useState([])

    const [platesOnBarbellLeft, setPlatesOnBarbellLeft] = useState([])

    // state of barbells - disable after barbell is selected - false by default
    const [barbell, setBarbell] = useState(false)

    // reset button
    const [reset, setReset] = useState(false)

    // functions
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
    }

    const resetEverything = () => {
        setReset(true)
        setWeight(0)
        setBarbell(false)
        setPlatesOnBarbellRight([])
        setPlatesOnBarbellLeft([])
    }

    const switchUnits = (boolean) => {
        resetEverything()
        setIsPounds(boolean)
    }

    return (
        <div className="app-container">
            <Header resetEverything={resetEverything} />

            <main>
                <section className="total-weight-section text-center">
                    <Container>
                        <h2>
                            {weight}
                            <small>{isPounds ? "lb" : "kg"}</small>
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
                                <h2>Units</h2>
                                <input
                                    type="radio"
                                    value="lb"
                                    id="lb"
                                    name="unit"
                                    defaultChecked
                                    onClick={() => switchUnits(true)}
                                />
                                <label htmlFor="lb">LB</label>

                                <input
                                    type="radio"
                                    value="kg"
                                    id="kg"
                                    name="unit"
                                    onClick={() => switchUnits(false)}
                                />
                                <label htmlFor="kg">KG</label>
                            </div>

                            <div className="column">
                                <h2>Barbells</h2>

                                {isPounds
                                    ? lbBarbells.map((barbellWeight, index) => (
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
                                      ))
                                    : kgBarbells.map((barbellWeight, index) => (
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
                                      ))}
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="plates-section">
                    <Container>
                        <h2>Plates</h2>

                        <div className="large-plates">
                            {isPounds
                                ? lbLargePlates.map((plate, index) => (
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
                                  ))
                                : kgLargePlates.map((plate, index) => (
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
                                  ))}
                        </div>

                        <div className="small-plates">
                            {isPounds
                                ? lbSmallPlates.map((plate, index) => (
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
                                  ))
                                : kgSmallPlates.map((plate, index) => (
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
                                  ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    )
}
