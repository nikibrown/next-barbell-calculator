import { useState } from "react";


// add bootstrap css 
import "bootstrap/dist/css/bootstrap.css"

//  Counter is a state initialized to 0
const [counter, setCounter] = useState(0)

const handleClick = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }


export default function Home() {
	return (
		<div className="app">
			<button onClick={handleClick}>
        		 {counter}
      		</button>


			<header>
				<nav className="navbar navbar-expand-lg bg-light">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">🏋️💪 NextJS Barbell Calculator</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">About</a>
								</li>
							</ul>

						</div>
					</div>
				</nav>
			</header>

			<main>
				<form>
					<div className="form-group">

						{/* <h3 className="total">
							Weight Total: 0
						</h3>
						<button className="btn btn-danger btn-sm start-over">Oops! Start over!</button> */}


						<div className="total-weight">
							<div className="justify-content-between">
								<nav className="navbar navbar-dark bg-dark navbar-total-weight">
									<h1> 0 <span className="total-weight-pounds">lb</span>
									<span className="total-weight-kilos">kg</span></h1>
									<button className="btn btn-secondary btn-danger btn-sm"><i className="fas fa-undo" aria-hidden="true"></i></button>
								</nav>
							</div>
						</div>




						<h3>Pick your barbell</h3>
						<div data-toggle="buttons">
							<label className="btn btn-barbell btn-dark btn-lg btn-barbell-45" data-weight="45">
								<input type="radio" name="options" id="option1" autoComplete="off" /> 45
								<span className="badge badge-pill badge-danger barbell-badge"></span>
							</label>
							<label className="btn btn-barbell btn-dark btn-lg btn-barbell-35" data-weight="35">
								<input type="radio" name="options" id="option2" autoComplete="off" /> 35
								<span className="badge badge-pill badge-danger barbell-badge"></span>
							</label>
							<label className="btn btn-barbell btn-dark btn-lg btn-barbell-15" data-weight="15">
								<input type="radio" name="options" id="option3" autoComplete="off" /> 15
								<span className="badge badge-pill badge-danger barbell-badge"></span>
							</label>
						</div>

						<div className="form-group" id="weights-on-bar">
							<h3>Pick your plates</h3>
							<p>Only count weight on one side of the bar, we do the math! (x 2)</p>
						</div>

						<div className="form-group">
							<button className="btn btn-plate btn-circle btn-danger weight-lg plate-blue" data-weight="55">55
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-primary weight-lg plate-blue" data-weight="45">45
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-warning weight-lg plate-yellow" data-weight="35">35
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-success weight-lg plate-green" data-weight="25">25
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-dark weight-lg plate-black" data-weight="15">15
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-dark weight-lg plate-black" data-weight="10">10
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
						</div>
						<div className="form-group">
							<button className="btn btn-plate btn-circle btn-dark weight-sm plate-black" data-weight="5">5
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-dark weight-sm plate-black" data-weight="2.5">2.5
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-dark weight-sm plate-black" data-weight="1">1
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-dark weight-sm plate-black" data-weight=".75">.75
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-dark weight-sm plate-black" data-weight=".5">.5
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
							<button className="btn btn-plate btn-circle btn-dark weight-sm plate-black" data-weight=".25">.25
								<span className="badge badge-pill badge-danger plate-quantity" data-quantity="0"></span>
							</button>
						</div>

					</div>
				</form>

			</main>

			<footer>

			</footer>



		</div>
	)
}
