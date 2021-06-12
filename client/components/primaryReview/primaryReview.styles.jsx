import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  padding-left: 5px;
  background-color: rgb(21, 32, 45);
  border-style: none;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 0px;
  margin-bottom: 20px;
  display: grid;
  width: 600px;
  grid-template-columns: 30px 180px 30px 320px 40px;
  gird-template-rows: 20px 20px auto auto auto auto auto auto auto;
  padding-bottom: 15px;
`;

export const UserName = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  color: #c1dbf4;
  font-size: 13px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: bold;
  padding-left: 10px;
`;

export const ProfilePicture = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 2;
`;

export const ProductCount = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  font-size: 11px;
  padding-left: 10px;
  color: #c1dbf4;
`;

export const ReviewCount = styled.div`
  grid-column-start: 1;
  grid-row-start: 3;
  grid-column-end: span 2;
  font-size: 11px;
  padding-left: 5px;
  color: #c1dbf4;
`;

export const ThumbsContainer = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: span 2;
`;

export const Recommendation = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  padding-left: 10px;
  font-size: 16px;
  color: #d6d7d8;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  line-height: 19px;
  background-color: rgb(17, 25, 36);
`;

export const SteamIcon = styled.div`
  grid-column-start: 5;
  grid-row-start: 1;
  grid-row-end: span 2;
  padding-top: 5px;
  justify-self: end;
  background-color: rgb(17, 25, 36);
  padding-left: 23px;
`;

export const TimePlayed = styled.div`
  grid-column-start: 4;
  grid-row-start: 2;
  padding-left: 10px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  font-size: 11px;
  line-height: 15px;
  color: #8091a2;
  opacity: 1;
  background-color: rgb(17, 25, 36);
`;

export const ReviewText = styled.div`
  grid-column-start: 3;
  grid-row-start: 5;
  grid-column-end: span 3;
  margin-right: 8px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #acb2b8;
  overflow-wrap: break-word;
  overflow: hidden;
  padding-bottom: 10px;
  border-bottom: solid 1px #8091a2;


`;

export const PrimaryReviewDatePosted = styled.div`
  grid-column-start: 3;
  grid-row-start: 4;
  grid-column-end: span 3;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
  padding-bottom: 5px;

`;

export const HelpfulMessage = styled.div`
  grid-column-start: 3;
  grid-row-start: 6;
  grid-column-end: span 2;
  display: inline-block;
  margin-right: 9px;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
  padding-top: 5px;
`;

export const HelpfulButtons = styled.div`
  grid-column-start: 3;
  grid-row-start: 7;
  grid-column-end: span 2;
  display: inline-block;
  margin-right: 9px;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
  padding: 5px;
`;

export const HelpfulCounts = styled.div`
  grid-column-start: 3;
  grid-row-start: 8;
  grid-column-end: span 2;
  display: inline-block;
  margin-right: 9px;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
`;

export const FunnyCount = styled.div`
  grid-column-start: 3;
  grid-row-start: 9;
  grid-column-end: span 2;
  display: inline-block;
  margin-right: 9px;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
`;

export const CommentCount = styled.div`
  grid-column-start: 5;
  grid-row-start: 8;
`;

export const CommentContainer = styled.div`
  display: flex;
  float-right: 5px;
`;
