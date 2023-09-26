import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #060643;
`

export const ContainerCalculadora = styled.div`
    width: 25%;
    min-height: 470px;
    background-color: #08088f;
    color: #fff;
    border-radius: 15px;
`

export const BarraTopo = styled.div`
    display: inline-block;
    justify-content: center;
    width: 120px;
    height: 20px;
    background-color: orange;
    margin: 10px;
    border-radius: 5px;
`

export const Linha = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`


export const Coluna = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
