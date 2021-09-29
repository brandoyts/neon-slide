import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    width: 100vw;
    height: 100vh;
    background: #8a2387; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #f27121,
        #e94057,
        #8a2387
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #f27121,
        #e94057,
        #8a2387
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 64px;
    margin-bottom: 50px;
    color: #fff;
    letter-spacing: 2px;
`;
