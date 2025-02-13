import styles from './UseProps.module.css'

const UseProps = () => {

    const imgPadrao = "https://th.bing.com/th/id/OIP.R6QCqPeQws4yCEnbpc4JowHaIW?rs=1&pid=ImgDetMain"

  return (
    <div className={styles.card}>
      <img src= {imgPadrao} className={styles.img}/>
      <h4>Título do card</h4>
      <p>Descrição do card</p>
      <button>Vizualizar</button>
    </div>
  )
}

export default UseProps
