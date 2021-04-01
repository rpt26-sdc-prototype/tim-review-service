export const ReviewAppContainer = styled.div`
  border-style: none;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 960px;
  grid-template-columns: 620px 340px
  gird-template-rows: auto auto auto auto auto auto auto auto auto;
`;

export const Title = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
`;

export const OverallReviews = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  background-color: rgb(42, 71, 94);
  font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
    font-size: 15px;
    margin-bottom: 5px;
    color: #e5e5e5;
`;

export const ReviewStatistics = styled.div`
  display: flex;
`;

export const Rating = styled.div`
  color: #66C0F4;
  font-family: "Motiva Sans", Sans-serif;
    font-weight: bold;
    font-size: 17px;
    line-height: 9px;
`;

export const ReviewCount = styled.div`
  color: #8ba6b6;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Graph = styled.div`
  grid-column-start: 1;
  grid-row-start: 4;
  grid-column-end: span 2;
`;

export const FilteringOptions = styled.div`
  grid-column-start: 1;
  grid-row-start: 5;
  grid-column-end: span 2;
  display: flex;
  background-color: rgb(31, 47, 66)
  text-transform: uppercase;
  font-size: 10px;
  color: #4582a5;
  padding: 10px;
  padding-right: 20px;
  cursor: pointer;
`;

export const ReviewType = styled.div`

`;

export const PurchaseType = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const LanguageType = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const DateRange = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const PlayTime = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const DisplayAsType = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const SummaryDropDown = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const ShowGraph = styled.div`

`;

export const CurrentFilters = styled.div`
  grid-column-start: 1;
  grid-row-start: 6;
  grid-column-end: span 2;

  font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
    text-transform: none;
    font-size: 15px;
    color: #c6d4df;
    padding-bottom: 5px;
    display: inline-block;
    margin-right: 5px;
`;

export const RestulCount = styled.div`
  grid-column-start: 1;
  grid-row-start: 7;
  color: #c6d4df;
`;

export const PrimaryFilterResults = styled.div`
  grid-column-start: 1;
  grid-row-start: 8;
  font-family: "Motiva Sans", Sans-serif;
    font-size: 14px;
    color: #ffffff;
    text-transform: uppercase;
    padding-bottom: 5px;
    letter-spacing: 2px;
`;

export const PrimaryReviewContainer = styled.div`
  grid-column-start: 1;
  grid-row-start: 9;
  justify-self: start;
`;

export const RecentReviews = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  padding-left: 5px;
  background-color: rgb(64, 100, 126);
  font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
    font-size: 15px;
    margin-bottom: 5px;
    color: #e5e5e5;
`;

export const RecentStatistics = styled.div`
  display: flex;
`;

export const RecentRating = styled.div`
color: #66C0F4;
  font-family: "Motiva Sans", Sans-serif;
    font-weight: bold;
    font-size: 17px;
    line-height: 9px;

`;

export const RecentReviewCount = styled.div`
  color: #8ba6b6;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const SecondaryReviewResults = styled.div`
  grid-column-start: 2;
  grid-row-start: 8;
  padding-left: 5px;
  font-family: "Motiva Sans", Sans-serif;
    font-size: 14px;
    color: #ffffff;
    text-transform: uppercase;
    padding-bottom: 5px;
    letter-spacing: 2px;
`;

export const SecondaryReviewContainer = styled.div`
  grid-column-start: 2;
  grid-row-start: 9;
  justify-self: end;
`;