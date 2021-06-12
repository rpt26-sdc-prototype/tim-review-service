import styled from 'styled-components';

const PillContainer = styled.div`
  background-color: rgb(88, 98, 111);
  padding: 5px;
  margin-right: 10px;
  font-family: Arial, Helvetica, sans-serif;
    color: #c6d4df;
    font-size: 12px;
    cursor: pointer;
`;

var Pill = props => {
  console.log(props)
  return (
    <PillContainer onClick={props.filterReset}>
      {props.filterType}  &#9447;
    </PillContainer>
  )
}

export default Pill