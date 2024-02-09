import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul >
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <div>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.Altura}m <br></br> Peso: {jugador.Peso}</p>
                </div>
                <div className={styles.imgL}>
                  <img className={styles.imgPlayer} src={jugador.Imagen}></img>
                </div>

              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74Kg", "Imagen": "IMGs/edenH.jpg" },
        { "id": 2, "nombre": "Gonzalo García", "Altura": "1.82", "Peso": "74Kg", "Imagen": "IMGs/gonzaloG.jpg" },
        { "id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81Kg", "Imagen": "IMGs/karinB.jpg" },
        { "id": 4, "nombre": "Cristiano Ronaldo", "Altura": "1.90", "Peso": "75Kg", "Imagen": "IMGs/cr7.jpg" }
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
        { "id": 1, "nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74Kg", "Imagen": "IMGs/marcT.jpg" },
        { "id": 2, "nombre": "Iñigo Martinez", "Altura": "1.82", "Peso": "74Kg", "Imagen": "IMGs/iñigoM.jpeg" },
        { "id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81Kg", "Imagen": "IMGs/gavi.jpg" },
        { "id": 4, "nombre": "Messirve", "Altura": "1.60", "Peso": "65Kg", "Imagen": "IMGs/messi.jpg" }
      ]
    }
    // ... agregar otros equipos
  ];
  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
