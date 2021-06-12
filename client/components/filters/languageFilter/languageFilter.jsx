import React from 'react';
import {
  DownArrow,
  LanguageTypeFlyoutMenu,
  FlyoutMenuText,
  LanguageTypeContainer,
  FlyoutMenuStat
} from '../filterStyles.jsx'

var LanguageTypeFilter = props => {

  return (
    <div>
      <LanguageTypeContainer>LANGUAGE
        <DownArrow className='reviewDownArrow'>&#9662;</DownArrow>
        <LanguageTypeFlyoutMenu className='languageTypeMenu'>
          <form>
            <input type='radio' value='All' name='language' defaultChecked onChange={ e => {props.reviewFilterChange(e.target.value, 'language')}}/>
            <FlyoutMenuText>All</FlyoutMenuText>
            <br></br>
            <input type='radio' value='English' name='language' onChange={ e => {props.reviewFilterChange(e.target.value, 'language')}}/>
            <FlyoutMenuText>English</FlyoutMenuText>
            <br></br>
            <input type='radio' value='Other' name='language' onChange={ e => {props.reviewFilterChange(e.target.value, 'language')}}/>
            <FlyoutMenuText>Your Language</FlyoutMenuText>
          </form>
        </LanguageTypeFlyoutMenu>
      </LanguageTypeContainer>
    </div>
  )
}

export default LanguageTypeFilter