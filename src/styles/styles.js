import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 50px 75px 0;
  border: 1px solid grey;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const CabeceraContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  border: 1px solid #e5e5e5;
  padding: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 842px) {
    text-align: center;
  }

  span {
    background-color: black;
    color: white;
    padding: 3px 5px;
    border-radius: 5px;
  }
`;

export const ListadoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 842px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ddd;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 1rem;
  h3 {
    text-align: center;
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.2rem;
    text-align: center;
    margin: 7px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const Stock = styled.h5`
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin: 7px;
    span {
      background-color: rgb(255, 178, 178);
      padding: 3px;
      font-weight: lighter;
      color: rgb(155, 0, 0);
      border-radius: 3px;
    }
`;
    


export const ProductButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  text-transform: uppercase;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  &:disabled {
    background-color: rgb(255, 178, 178);
    cursor: not-allowed;
  }
`;
