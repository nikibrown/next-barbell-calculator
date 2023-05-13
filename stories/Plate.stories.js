import Plate from "../components/Plate"

export default {
    title: "Components/Plates",
    component: Plate,
    tags: ["autodocs"],
    argTypes: { onClick: { action: "foo" } },
}

const Template = (args) => <Plate {...args} />

export const LargePlate55 = Template.bind({})
LargePlate55.args = {
    weightNum: 55,
    classNames: "btn btn-plate position-relative btn-danger weight-lg",
}

export const LargePlate45 = Template.bind({})
LargePlate45.args = {
    weightNum: 45,
    classNames: "btn btn-plate position-relative btn-primary weight-lg",
}

export const LargePlate35 = Template.bind({})
LargePlate35.args = {
    weightNum: 35,
    classNames: "btn btn-plate position-relative btn-warning weight-lg",
}

export const LargePlate25 = Template.bind({})
LargePlate25.args = {
    weightNum: 25,
    classNames: "btn btn-plate position-relative btn-success weight-lg",
}

export const LargePlate15 = Template.bind({})
LargePlate15.args = {
    weightNum: 15,
    classNames: "btn btn-plate position-relative btn-dark weight-lg",
}

export const LargePlate10 = Template.bind({})
LargePlate10.args = {
    weightNum: 10,
    classNames: "btn btn-plate position-relative btn-dark weight-lg",
}

export const SmallPlate5 = Template.bind({})
SmallPlate5.args = {
    weightNum: 5,
    classNames: "btn btn-plate position-relative btn-dark weight-sm",
}

export const SmallPlate1 = Template.bind({})
SmallPlate1.args = {
    weightNum: 1,
    classNames: "btn btn-plate position-relative btn-dark weight-sm",
}

export const SmallPlate05 = Template.bind({})
SmallPlate05.args = {
    weightNum: 0.5,
    classNames: "btn btn-plate position-relative btn-dark weight-sm",
}

export const SmallPlate025 = Template.bind({})
SmallPlate025.args = {
    weightNum: 0.25,
    classNames: "btn btn-plate position-relative btn-dark weight-sm",
}
