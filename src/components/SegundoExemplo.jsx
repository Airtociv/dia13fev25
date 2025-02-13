import "./SegundoExemplo.css";

const SegundoExemplo = () => {
  const isAdministrador = false;

  return (
    <div>
      <h1
        style={
          isAdministrador
            ? { color: "chartreuse", backgroundColor: "blue" }
            : { color: "cyan", backgroundColor: "darkred" }
        }
      >
        condições temporarias
      </h1>
      <img
        src="https://www.comparaonline.com.br/blog-statics/br/uploads/2014/12/rsz_nevoeiro.jpg"
        alt="caminho"
      />
      <h3>comentario vago</h3>
      <p id="menos">não está</p>
      <p id="mais">está sim</p>
      <p style={{ color: "yellow", fontSize: "30px", backgroundColor: "grey" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        tempore rem aperiam veritatis culpa optio beatae doloremque ipsum
        officia modi excepturi enim tenetur, ut expedita accusantium illo quod
        minima voluptate!
      </p>
    </div>
  );
};

export default SegundoExemplo;
