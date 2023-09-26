import { Container,ContainerCalculadora, Linha, BarraTopo } from "./components/BodyStyle";
import Input from './components/Input/Index'
import Button from "./components/Button/Index";

import { useState } from "react";





const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operacao, setOperacao] = useState('');


  /* Função para limpar o calculo feito */
  const limparCalculadora = () => {
    setCurrentNumber(0)
  }


  /*Função para adicionar numero na calculadora */
  const adicionarNumero = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  /* Função para somar valores*/
  const somarValores = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      limparCalculadora();
      setOperacao('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
    }
  }

  /* Função de Subtrair*/
  const subtrairValores = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      limparCalculadora();
      setOperacao('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
    }
  }

  /* Função de Dividir*/
  const dividirValores = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      limparCalculadora();
      setOperacao('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
    }
  }

  /* Função de Multiplicar*/
  const multiplicarValores = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      limparCalculadora();
      setOperacao('*');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
    }
  }



  /* Função de Igual gerar resultados*/
  const botaoDeIgual = () => {

    if(firstNumber !== '0' && operacao !== '' && currentNumber !== '0') {
      switch(operacao) {
        case '+':
          somarValores();
            break;
            case '-':
              subtrairValores();
            break;
            case '/':
              dividirValores();
            break;
            case '*':
              multiplicarValores();
            break;
          default:
            break;
      }
    }
  }






  return (
    <Container>
      <ContainerCalculadora>
        <BarraTopo />
        <Input value={currentNumber} />
        <Linha>
        <Button title='ON' />
        <Button title='AC'onClick={limparCalculadora}/>
        <Button title='C' onClick={limparCalculadora}/>
        <Button title='OFF' />
        </Linha>
        <Linha>
        <Button title='7' onClick={() => {adicionarNumero('7')}}/>
        <Button title='8' onClick={() => {adicionarNumero('8')}}/>
        <Button title='9' onClick={() => {adicionarNumero('9')}}/>
        <Button title='/' onClick={dividirValores}/>
        </Linha>
        <Linha>
        <Button title='4' onClick={() => {adicionarNumero('4')}}/>
        <Button title='5' onClick={() => {adicionarNumero('5')}}/>
        <Button title='6' onClick={() => {adicionarNumero('6')}}/>
        <Button title='*' onClick={multiplicarValores}/>
        </Linha>
        <Linha>
        <Button title='1' onClick={() => {adicionarNumero('1')}}/>
        <Button title='2' onClick={() => {adicionarNumero('2')}}/>
        <Button title='3' onClick={() => {adicionarNumero('3')}}/>
        <Button title='-' onClick={subtrairValores}/>
        </Linha>
        <Linha>
        <Button title='0' onClick={() => {adicionarNumero('0')}}/>
        <Button title='.'  onClick={() => {adicionarNumero('.')}}/>
        <Button title='=' onClick={botaoDeIgual}/>
        <Button title='+' onClick={somarValores}/>
        </Linha>
      </ContainerCalculadora>

    </Container>
  );
}

export default App;
