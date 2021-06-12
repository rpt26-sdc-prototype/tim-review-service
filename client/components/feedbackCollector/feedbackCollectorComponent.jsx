import React from 'react';
import {
  FeedBackOrganizer,
  FeedBackOrganizerChild
} from './feedbackCollectorComponent.styles.jsx'

var FeedbackCollectorComponent = props => {

  return (
    <FeedBackOrganizer>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/thumb+up.png" width="20" height="20"/>
        <div>Yes </div>
      </FeedBackOrganizerChild>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/thmb+down.png"  width="20" height="20"/>
        <div>No </div>
      </FeedBackOrganizerChild>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/funny.png"  width="15" height="15"/>
        <div>Funny </div>
      </FeedBackOrganizerChild>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/award.svg"  width="20" height="20"/>
        <div>Award </div>
      </FeedBackOrganizerChild>
    </FeedBackOrganizer>
  )
}

export default FeedbackCollectorComponent