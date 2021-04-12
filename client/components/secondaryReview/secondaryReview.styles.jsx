// import styled from 'styled-components';

export const SecondaryReviewWrapper = styled.div`
  background-color: rgb(31, 46, 65)
  border-style: none;
  margin-bottom: 20px;
  display:grid;
  width: 340;
  grid-template-columns: 25px 130px 125px 20px
  gird-template-rows: auto auto auto auto auto;
  margin-right: 30px;
`;

export const SecondaryThumb = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

export const SecondaryUserName = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  color: #819db8;
`;

export const SecondaryTimePlayed = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  color: #8091a2;
  text-transform: uppercase;
  font-size: 10px;
  opacity: 0.5;
`;

export const SecondarySteamIcon = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
`;

export const SecondaryReviewDatePosted = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  grid-column-end: span 4;
  color: #8091a2;
    font-size: 12px;
    opacity: 0.6;
`;

export const SecondaryReviewText = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  grid-column-end: span 4;
  color: #9fb4c9;
`;

export const SecondaryHelpfulMessage = styled.div`
  grid-column-start: 1;
  grid-row-start: 4;
  grid-column-end: span 4;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
`;

export const SecondaryHelpfulButtons = styled.div`
  grid-column-start: 1;
  grid-row-start: 5;
  grid-column-end: span 4;
  display: inline-block;
  margin-right: 9px;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
`;