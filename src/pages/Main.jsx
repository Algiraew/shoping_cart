import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;

    height: 70px;
    box-sizing: border-box;
    background-color: red;
    padding: 10px;
`;

const Main = () => (
    <StyledHeader>
        <h1>Logo</h1>
    </StyledHeader>
);

export default Main;
