import styled from 'styled-components';

export const QuizWrapper = styled.section`
  width: 650px;
  max-width: 650px;
  min-width: 650px;
  height: 85vh;
  border: 5px solid ${({theme}) => theme.colors.lightGray};
  .container {
    width: 100%;
    height: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 70px 10px;
    .container-content {
      display: flex;
      flex-direction: column;
      .title {
        margin: 0px;
        font-family: ${({theme}) => theme.fontsFamily};
        font-size: ${({theme}) => theme.fontSizes.larg};
        color: ${({theme}) => theme.colors.mediumDark}
      }
      .category {
        margin: 4px 0;
        font-family: ${({theme}) => theme.fontsFamily};
        font-size: ${({theme}) => theme.fontSizes.small}
        color: ${({theme}) => theme.colors.lightDark}
      }
      .question {
        margin: 34px 0;
        font-family: ${({theme}) => theme.fontsFamily};
        font-size: ${({theme}) => theme.fontSizes.medium};
        color: ${({theme}) => theme.colors.mediumDark}
      }
      .optionsWrapper {
        margin: 0 0 30px;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 50px;
        grid-row-gap: 30px;
        li {
          list-style-type: none;
          .btn {
            width: 100%;
            background: ${({theme}) => theme.colors.lightGray};
            color: ${({theme}) => theme.colors.dark};
            padding: 4px 12px;
          }
          .selected {
            background: ${({theme}) => theme.colors.dark};
            color: ${({theme}) => theme.colors.white};
          }
          .correct {
            color: green;
            cursor: not-allowed;
          }
          .disabled {
            background: ${({theme}) => theme.colors.lightWhite};
            color: ${({theme}) => theme.colors.tinyDark};
            border: 1px solid ${({theme}) => theme.colors.lightGray};
            cursor: not-allowed;
          }
        }
      }
      .result {
        text-align: center;
        font-family: ${({theme}) => theme.fontsFamily};
        font-size: ${({theme}) => theme.fontSizes.medium};
        margin: 0 0 12px;
      }
      .next-question-btn {
        width: 165px;
        background: ${({theme}) => theme.colors.lightGray};
        color: ${({theme}) => theme.colors.dark};
        margin: 0 auto;
      }
    }
  }
`