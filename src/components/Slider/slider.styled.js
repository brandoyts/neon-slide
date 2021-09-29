import styled from 'styled-components';

export const StyledSlider = styled.div`
    margin: 0 auto;
    min-width: 300px;
    min-height: 600px;
    max-width: 1000px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
`;

export const Item = styled.img`
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.2s ease;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0.90)')};
    z-index: 1;
`;

export const Button = styled.button`
    z-index: 2;
    outline: none;
    padding: 12px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 100%;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
`;
