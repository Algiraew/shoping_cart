import styled from 'styled-components';

const StyledInput = styled.input`
    width: 250px;
    font-size: 20px;
    border: none;
    margin-top: 10px;
`;

const Input = ({ type, placeholder, onChange, value }) => (
    <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

export default Input;
