import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthModal, InputDiv, StyledButton, TextP, FormStyled } from './styled';
import Input from '../Input';
import { registration } from '../../../../features/auth.slice';

const RegistrationModal = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleReg = (e) => {
        e.preventDefault();
        dispatch(registration({ email, password }));
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
                <StyledButton onClick={handleReg}>
                    Зарегистрироваться
                </StyledButton>
            </FormStyled>

            <TextP>
                Если вы уже авторизованы
                <Link to="/login">Войти</Link>
            </TextP>
        </AuthModal>
    );
};

export default RegistrationModal;
