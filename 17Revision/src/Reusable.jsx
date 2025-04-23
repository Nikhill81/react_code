function Reusable () {
    let RandomNumber = Math.random() * 100

    return <h1 style={{'background-color': '#234'}}>Reusable Component {Math.round (RandomNumber)}</h1>
}

export default Reusable;