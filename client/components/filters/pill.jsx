

var Pill = props => {
  console.log(props)
  return (
    <div>
    <div onClick={props.filterReset}>
      {props.reviewType}  &#9447;
    </div>
    </div>
  )
}

export default Pill