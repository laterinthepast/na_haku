import React from 'react'
import img1 from '../images/download/1 (1).jpg'
import img2 from '../images/download/1 (2).jpg'
import img3 from '../images/download/1 (3).jpg'
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';

const NewItemsSection = styled.div`
    padding: 4rem;
    @media screen and (max-width: 990px) {
    padding: 1rem;
  }
`
const NewHeader = styled.div`
    font-size: 4rem;
    @media screen and (max-width: 990px) {
    font-size: 2rem;
    text-align: center;
  }
`

const NewSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const NewSectionText = styled.div`
    display: flex;
    h3 {
        font-size: 2rem;
        transform: rotate(-90deg);
    }
`
const NewSectionImages = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    width: 70%;
    
    img {
        width: 80%;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius:40px;
        transition: all 0.2s ease-in-out;
        &:hover {
        transform: scale(1.01);
        box-shadow: rgba(100, 100, 111, 0.2) 10px 10px 29px 10px;
    }
    }
    .fimg, .timg {
        margin-top:2rem;
    }
`

const NewButton = styled.div`

`

const ProductsOne = () => {
    return (<SRLWrapper>
        <NewItemsSection>
            <NewHeader>
                <h1>produkty</h1>
            </NewHeader>
            <NewSection>
                <NewSectionText>
                    <h3>nowa kolekcja</h3>
                </NewSectionText>

                <NewSectionImages>

                    <img src={img1} className="fimg" alt="image1" />
                    <img src={img2} className="simg" alt="image1" />
                    <img src={img3} className="timg" alt="image1" />

                </NewSectionImages>

            </NewSection>
            <NewButton>
            </NewButton>
        </NewItemsSection>
    </SRLWrapper>
    )
}

export default ProductsOne
