import styled from 'styled-components';

export const StyledTransactionTable = styled.table`
  tbody {
    margin-top: 60px;
    width: 100%;
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 150px;
    border-top: none;

    &::-webkit-scrollbar {
      width: 6.26px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 10px #f5f6fb;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff751d;
      border-radius: 2px;
    }

    tr {
      justify-content: center;
      display: flex;
      &:not(:last-child) {
        border-bottom: 2px solid #f5f6fb;
      }

      td {
        position: relative;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow-x: hidden;
        display: flex;
        height: 40px;
        overflow: hidden;

        &:nth-child(1) {
          /* Pierwsza kolumna */
          flex: 1 0 50%;
          justify-content: flex-start;
          //   font-weight: 700;

          //   padding-right: 20px;
        }
        &:nth-child(2) {
          /* Druga kolumna */
          //   display: flex;
          justify-content: flex-end;
          //   font-weight: 700;
          //   padding-left: 25px;
        }
        &:nth-child(3) {
          /* Trzecia kolumna */
          flex: 1 0 5px;

          justify-content: flex-end;
          //   padding-left: 6.8px;
        }
      }
    }
  }
`;

export const DescriptionAndDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 3px;
`;

export const DateAndCategoryWrapper = styled.div`
  display: flex;
  font-size: 8px;
  justify-content: space-between;
  gap: 20px;
  margin-top: 3px;
`;

// export const AmoutWrapper = styled.div`
//   //   display: flex;
//   justify-content: flex-end;
// `;

// export const DeleteWrapper = styled.div`
//   //   display: flex;
//   justify-content: center;
// `;

// &:nth-child(4) {
//   /* Czwarta kolumna */
//   flex: 1 0 107px;
//   padding-left: 1.2px;
//   justify-content: flex-end;
//   font-weight: 700;
// }
// &:nth-child(5) {
//   /* Piąta kolumna */
//   flex: 1 0 82px;
//   padding-left: 32px;
// }

//  white-space: nowrap; /* Zapobieganie zawijaniu tekstu */
//           overflow: hidden; /* Ukrywanie tekstu, który nie zmieści się w kontenerze */
//           text-overflow: ellipsis; /* Pokazywanie "..." dla tekstu, który jest zbyt długi, aby się zmieścić */
