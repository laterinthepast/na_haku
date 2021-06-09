import React from 'react'
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';
import im1 from '../images/download/1 (1).jpg'
import im2 from '../images/download/1 (2).jpg'
import im3 from '../images/download/1 (3).jpg'
import im4 from '../images/download/1 (4).jpg'
import im5 from '../images/download/1 (5).jpg'
import im6 from '../images/download/1 (6).jpg'
import im7 from '../images/download/1 (7).jpg'
import im8 from '../images/download/1 (8).jpg'
import im9 from '../images/download/1 (9).jpg'
import im10 from '../images/download/1 (10).jpg'
import im11 from '../images/download/1 (11).jpg'


const ImageWrapper = styled.div`

`
const ImageContainer = styled.div`

`
const Image = styled.img`
    width: 20%;
`


const Gallery = () => {
    return (
        <SRLWrapper>
            <ImageWrapper>
                <ImageContainer>
                    <Image src={im1} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im2} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im3} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im4} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im5} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im6} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im7} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im8} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im9} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im10} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im11} alt="" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={im1} alt="" />
                </ImageContainer>
            </ImageWrapper>
        </SRLWrapper>
    )
}

export default Gallery
