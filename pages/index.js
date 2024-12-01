import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Plate from "../components/Plate"
import BarbellButton from "../components/BarbellButton"
import PlateOnBarbell from "../components/PlateOnBarbell"
import Container from "../components/Container"
import { weightData } from "../data/weightData.js"
import { GoogleAnalytics } from "@next/third-parties/google"

export default function Calculator() {
    // State

    // add up the total weight
    const [weight, setWeight] = useState(0)

    // set kg or lb
    const [isPounds, setIsPounds] = useState(true)

    // make this an array of objects with the plate.weight and plate.color?
    const [platesOnBarbellRight, setPlatesOnBarbellRight] = useState([])

    const [platesOnBarbellLeft, setPlatesOnBarbellLeft] = useState([])

    // state of barbells - disable after barbell is selected - false by default
    const [barbell, setBarbell] = useState(false)

    // reset button
    const [reset, setReset] = useState(false)

    // track last plate added
    const [lastPlateAdded, setLastPlateAdded] = useState(null)

    // Undo button
    const [undo, setUndo] = useState(false)

    // functions
    const addWeight = (plate) => {
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
    }

    // Add undo btn functionality:
    // Clicking the undo button removes the last pair of weights added to the barbell

    const undoLastPlate = () => {
        setUndo(true)
        // ✅ check if we have plates on the barbell
        if (platesOnBarbellRight.length) {
            // ✅ add undo button component

            // ✅ get last plate added - can i get this from platesOnBarbellRight?
            const lastPlate =
                platesOnBarbellRight[platesOnBarbellRight.length - 1]

            setLastPlateAdded(lastPlate)

            // ✅ subtract double the plate weight
            setWeight(weight - lastPlate.weightNum * 2)

            // ✅ removes the last weightPlate from the end of the platesOnBarbellRight array
            setPlatesOnBarbellRight((existingPlates) =>
                existingPlates.slice(0, -1)
            )

            // ✅ removes the last weightPlate from the beginning of the platesOnBarbellLeft array
            setPlatesOnBarbellLeft((existingPlates) => existingPlates.slice(1))
        } else {
            alert("no plates on barbell to remove!")
        }
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
            <Header
                undoLastPlate={undoLastPlate}
                resetEverything={resetEverything}
            />

            <main>
                <section className="total-weight-section text-center">
                    <Container>
                        <h2>
                            {weight}
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
                        </div>
                    </Container>
                </section>

                <section className="plates-section">
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
                                              undo={undo}
                                              setUndo={setUndo}
                                              lastPlateAdded={lastPlateAdded}
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
                                              undo={undo}
                                              setUndo={setUndo}
                                              lastPlateAdded={lastPlateAdded}
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
                                              undo={undo}
                                              setUndo={setUndo}
                                              lastPlateAdded={lastPlateAdded}
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
                                              undo={undo}
                                              setUndo={setUndo}
                                              lastPlateAdded={lastPlateAdded}
                                              key={index}
                                              type={plate.type}
                                              unit={"kg"}
                                          />
                                      )
                                  )}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
            <GoogleAnalytics gaId="G-PKWXFSGSLF" />
        </div>
    )
}
