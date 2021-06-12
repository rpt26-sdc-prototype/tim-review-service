import styled from 'styled-components';

export const DownArrow = styled.span`
font-size: 13px;
padding-left: 8px;
color: #66c0f4;
`;

export const TypeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  opacity: 0;
  cursor: default;
  right: 14px;
  top: 8px;
  height: 60x;
  width: 115.516px;
  padding: 10px;
  visibility: hidden;
  z-index: 1;
`;

export const FlyoutMenuText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
  font-size: 12px;
  line-height: 20px;
  color: #596b76;
  text-transform: none;
  margin-left: 3px;
`;

export const ReviewTypeContainer = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 86px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .reviewDownArrow {
    color: black;
  }
  &:hover .reviewTypeMenu {
    opacity: 1;
    visibility: visible;
  }
`;

export const PurchaseTypeContainer = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 95px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .reviewDownArrow {
    color: black;
  }
  &:hover .purchaseTypeMenu {
    opacity: 1;
    visibility: visible;
  }
`;

export const FlyoutMenuStat = styled.span`
  color: #7193a6;
  font-size: 12px;
  white-space: nowrap;
  line-height: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: none;
  margin-left: 3px;
  margin-right: 3px;
`;

export const PurchaseTypeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  opacity: 0;
  cursor: default;
  right: 14px;
  top: 8px;
  height: 60px;
  width: 180px;
  padding: 10px;
  padding-bottom: 15px;
  visibility: hidden;
  line-height: 20px;
  z-index: 1;
`;

export const LanguageTypeContainer = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 95px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .reviewDownArrow {
    color: black;
  }
  &:hover .languageTypeMenu {
    opacity: 1;
    visibility: visible;
  }
`;

export const LanguageTypeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  opacity: 0;
  cursor: default;
  right: 14px;
  top: 8px;
  height: 60px;
  width: 180px;
  padding: 10px;
  padding-bottom: 15px;
  visibility: hidden;
  line-height: 20px;
  z-index: 1;
`;