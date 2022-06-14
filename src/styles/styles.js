import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
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
    span {
        background-color: black;
        color: white;
        padding: 3px 5px;
        border-radius: 5px;
    }
`;

export const ListadoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    @media (max-width: 950px) {
        flex-wrap: wrap;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: 30%;
    @media (max-width: 950px) {
        width: 40%;
    }
    @media (max-width: 700px) {
        width: 90%;
    }
    h3 {
        text-align: center;
        font-size: 1.2rem;
    }
    p {
        font-size: 1rem;
    }
    h5 {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        span {
            background-color: rgb(255, 178, 178);
            padding: 3px;
            font-weight: lighter;
            color: rgb(155, 0, 0);
            border-radius: 3px;
        }
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
        background-color: #e5e5e5;
        cursor: not-allowed;
    }
`;




