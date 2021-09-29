import { useState } from 'react';
import { images } from './images';
import { StyledSlider, Item, Button } from './slider.styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Slider() {
    const [currSlide, setCurrSlide] = useState(0);
    const length = images.length;

    const next = () => {
        currSlide < length - 1 ? setCurrSlide(currSlide + 1) : setCurrSlide(0);
    };

    const prev = () => {
        currSlide === 0
            ? setCurrSlide(length - 1)
            : setCurrSlide(currSlide - 1);
    };

    return (
        <div>
            <StyledSlider>
                <Button onClick={prev} left children={<FaArrowLeft />} />
                <Button onClick={next} right children={<FaArrowRight />} />

                {images.map((image, index) => (
                    <Item
                        key={index}
                        src={image.url}
                        isActive={currSlide === index && true}
                    />
                ))}
            </StyledSlider>
        </div>
    );
}
