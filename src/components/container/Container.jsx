import { StyledContainer, Title } from './container.styled';

export default function Container({ children }) {
    return (
        <StyledContainer>
            <Title>Neon Slider</Title>
            {children}
        </StyledContainer>
    );
}
