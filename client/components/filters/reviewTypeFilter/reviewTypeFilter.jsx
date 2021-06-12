import React from 'react';
import {
  DownArrow,
  TypeFlyoutMenu,
  FlyoutMenuText,
  ReviewTypeContainer,
  FlyoutMenuStat
} from '../filterStyles.jsx'

var ReviewTypeFilter = props => {
  return (
    <div>
      <ReviewTypeContainer>REVIEW TYPE
        <DownArrow className='reviewDownArrow'>&#9662;</DownArrow>
        <TypeFlyoutMenu className='reviewTypeMenu'>
          <form>
            <input type='radio' value='All' name='reviewType' defaultChecked onChange={ e => {props.reviewFilterChange(e.target.value, 'reviewType')}}/>
            <FlyoutMenuText>All</FlyoutMenuText>
            <FlyoutMenuStat>{`(${props.reviewCounts.All})`}</FlyoutMenuStat>
            <br></br>
            <input type='radio' value='Positive' name='reviewType' onChange={ e => {props.reviewFilterChange(e.target.value, 'reviewType')}}/>
            <FlyoutMenuText>Positive</FlyoutMenuText>
            <FlyoutMenuStat>{`(${props.reviewCounts.Positive})`}</FlyoutMenuStat>
            <br></br>
            <input type='radio' value='Negative' name='reviewType' onChange={ e => {props.reviewFilterChange(e.target.value, 'reviewType')}}/>
            <FlyoutMenuText>Negative</FlyoutMenuText>
            <FlyoutMenuStat>{`(${props.reviewCounts.Negative})`}</FlyoutMenuStat>
          </form>
        </TypeFlyoutMenu>
      </ReviewTypeContainer>
    </div>
  )
}

export default ReviewTypeFilter;