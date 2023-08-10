import styled from 'styled-components';


export default function PetCard({ pet }) {
    const { petName, image, about, phone } = pet;

    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={image} alt={petName} />
            </ImageContainer>
            <InfoContainer>
                <Name>{petName}</Name>
                <Description>{about}</Description>
                <Phone>{phone}</Phone>
            </InfoContainer>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 8px;
    background-color: #F4F0EB;
    font-family: 'Poppins', sans-serif;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const CardImage = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border-radius: 8px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 16px;
`;

const Name = styled.div`
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 8px;
    color: #f3b65b;
    text-shadow: 2px 2px 2px #000000;
`;

const Description = styled.div`
    font-size: 12px;
    margin-bottom: 8px;
`;

const Phone = styled.div`
    font-size: 14px;
    color: #555;
`;

const LoadingMessage = styled.div`
    text-align: center;
    font-size: 18px;
    color: #888;
    padding: 16px;
`;
