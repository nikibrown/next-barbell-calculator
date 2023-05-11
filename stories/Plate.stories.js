import Plate from "../components/Plate"

export default {
    title: "Plates",
    component: Plate,
}

const Template = (args) => <Plate {...args} />

export const Plate55 = Template.bind({})
Plate55.args = {
    weight: "55",
    weightNum: 55,
}

export const SmallPlate = Template.bind({})
SmallPlate.args = {
    weight: "5",
    weightNum: 5,
}

// export const Platee = () => (
//     <Plate
//         weightNum={55}
//         classNames="btn btn-plate position-relative btn-danger weight-lg"
//     />
// )

// export const Plate45 = () => (
//     <Plate
//         weightNum={45}
//         classNames="btn btn-plate position-relative btn-primary weight-lg"
//     />
// )

// export const Plate35 = () => (
//     <Plate
//         weightNum={35}
//         classNames="btn btn-plate position-relative btn-warning weight-lg"
//     />
// )

// export const Plate25 = () => (
//     <Plate
//         weightNum={25}
//         classNames="btn btn-plate position-relative btn-success weight-lg"
//     />
// )

// export const Plate15 = () => (
//     <Plate
//         weightNum={15}
//         classNames="btn btn-plate position-relative btn-dark weight-lg"
//     />
// )

// export const Plate10 = () => (
//     <Plate
//         weightNum={10}
//         classNames="btn btn-plate position-relative btn-dark weight-lg"
//     />
// )
