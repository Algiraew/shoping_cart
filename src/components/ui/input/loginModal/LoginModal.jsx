import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthModal, InputDiv, StyledButton, FormStyled } from './styled';
import Input from '../Input';
import { login } from '../../../../features/auth.slice';
import { TextP } from '../registrationModal/styled';

const LoginModal = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLog = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };
    return (
        <AuthModal>
            <FormStyled>
                <InputDiv>
                    <Input
                        type="text"
                        placeholder="Ваш Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputDiv>
                <InputDiv>
                    <Input
                        type="password"
                        placeholder="Введите ваш Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputDiv>
                <StyledButton onClick={handleLog}>Войти</StyledButton>
            </FormStyled>

            <TextP>
                Если вы еще не зарегистрированы?
                <Link to="/registration">зарегистрироваться</Link>
            </TextP>
        </AuthModal>
    );
};
export default LoginModal;
