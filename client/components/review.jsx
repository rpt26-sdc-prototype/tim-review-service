import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }



  // console.log(props.review);
  // let reviewText = props.review.reviewText;
  // if (reviewText.length > 500) {
  //   reviewText = reviewText.slice(0, 499);
  // }

  render() {

    // return (
    //   <Wrapper>
    //     <Title>
    //     Hello World
    //     </Title>
    //   </Wrapper>
    // );

    let reviewText = this.props.review.reviewText;
    if (reviewText.length > 500) {
      reviewText = reviewText.slice(0, 499);
    }

    return (
      <Wrapper>
        <Title>Username: {this.props.review.userName}</Title>
        <br/>
        <div>
            ReviewText:
        </div>
        <div>{reviewText}</div>
        <br/>
      </Wrapper>
    );

  }
}

export default Review;