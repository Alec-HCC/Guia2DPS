"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [clean] = useState('');

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  //ALL RD GOES HERE
  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado('');
  }

  const multiplicar = () => {
    const resultadoMulti = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMulti}`);
  }

  const dividir = () => {
    if(parseFloat(numero2) == 0){
      alert("No se puede dividir entre 0!!");
      setResultado('');
    }else{
      const resultadoDivis = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadoDivis}`);
    }
  }

  const potenciar = () => {
    /*for(const i = 0; i >= parseFloat(numero2); i++){
      const resultadoPot = parseFloat(numero1) * parseFloat(numero1); 
    }*/
    const resultadoPot = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPot}`);
  }

  const raiz = () => {
    const resultadoR1 = Math.sqrt(parseFloat(numero1));
    const resultadoR2 = Math.sqrt(parseFloat(numero2));
    setResultado(`Resultado Raíz cuadrada de numero 1: ${resultadoR1.toFixed(2)} Resultado Raíz cuadrada de numero 2: ${resultadoR2.toFixed(2)}`);
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Calculadora</h1>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number"
            value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text} >Número 2:</label>
          <input className={styles.inputnum} type="number"
            value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>
          <button className={styles.button}onClick={sumar}>Sumar</button>
          <button className={styles.button}onClick={restar}>Restar</button>
          <hr></hr><br></br>
          <button className={styles.button}onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button}onClick={dividir}>Dividir</button>
          <hr></hr><br></br>
          <button className={styles.button}onClick={potenciar}>Potenciar</button>
          <button className={styles.button}onClick={raiz}>R2</button>
          <hr></hr><br></br>
          <button className={styles.buttoncls}onClick={limpiar}>Limpiar</button>
        </div>
        {resultado && <div
          className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}