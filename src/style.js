import styled from 'styled-components'


const CorButton = styled.div`
  position: relative;
  top: 10vh;
  margin: 2%;

  width: 30px;
  height: 30px;
  border-radius: 100%;

  background-color: ${cor => cor.pintar || 'white'};

  &:hover{
    transform: scale(1.8);
  }
`

const Meutexto = styled.h1`
    background-color: ${cor => cor.MinhaCor || 'blueviolet'};
    color: white;

    text-align: center;
    margin: 0 auto;
    margin-top: 10vh;

    width: 10%;
    padding: 1%;

    border-radius: 10px;
    transition: 0.5s;
    &:hover{
      background-color: white;
      color:${cor => cor.MinhaCor || 'blueviolet'};
      border: 1px solid ${cor => cor.MinhaCor || 'blueviolet'};

    }
    &:active{
      margin-top: 15vh;
    }
`

export {
  Meutexto, 
  CorButton
}