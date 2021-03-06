import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    /* background: red; */
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

interface Props {
    toggleTheme(): void;
}

export default function Header({toggleTheme}: Props) {
    const { colors, title } = useContext(ThemeContext);
    // console.log('c: '+colors.background);
    // console.log('ti: '+title);

    return (
        <Container>
            Hello world

            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                // checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.1, colors.primary)}
                onColor={colors.secundary}
                
            />
        </Container>
    );
  }