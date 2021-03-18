import styled from 'styled-components';
import React from 'react';

const FeedBackOrganizer = styled.div`
  display: flex;
`;

const FeedBackOrganizerChild = styled.div`
display: flex;
`;

var FeedbackCollectorComponent = props => {


  return (
    <FeedBackOrganizer>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/thumb+up.png" />
        <div>Yes</div>
      </FeedBackOrganizerChild>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/thmb+down.png" />
        <div>No</div>
      </FeedBackOrganizerChild>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/funny.png" />
        <div>Funny</div>
      </FeedBackOrganizerChild>
      <FeedBackOrganizerChild>
        <img src="https://gifbucket.s3-us-west-1.amazonaws.com/award.svg" />
        <div>Award</div>
      </FeedBackOrganizerChild>
    </FeedBackOrganizer>
  )
}

export default FeedbackCollectorComponent