import React from 'react';
import {
  DownArrow,
  PurchaseTypeFlyoutMenu,
  FlyoutMenuText,
  PurchaseTypeContainer,
  FlyoutMenuStat
} from '../filterStyles.jsx'

var PurchaseTypeFilter = props => {
  return (
    <div>
      <PurchaseTypeContainer>PURCHASE TYPE
        <DownArrow className='reviewDownArrow'>&#9662;</DownArrow>
        <PurchaseTypeFlyoutMenu className='purchaseTypeMenu'>
          <form>
            <input type='radio' value='All' name='purchaseType' defaultChecked onChange={e => { props.reviewFilterChange(e.target.value, 'purchaseType') }} />
            <FlyoutMenuText>All</FlyoutMenuText>
            <br></br>
            <input type='radio' value='Steam Purchases' name='purchaseType' onChange={e => { props.reviewFilterChange(e.target.value, 'purchaseType') }} />
            <FlyoutMenuText>Steam Purchases</FlyoutMenuText>
            <br></br>
            <input type='radio' value='Other' name='purchaseType' onChange={e => { props.reviewFilterChange(e.target.value, 'purchaseType') }} />
            <FlyoutMenuText>Other</FlyoutMenuText>
          </form>
        </PurchaseTypeFlyoutMenu>
      </PurchaseTypeContainer>
    </div>
  )
}

export default PurchaseTypeFilter