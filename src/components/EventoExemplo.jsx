const EventoExemplo = () => {
  const teste = (e) => {
    console.log(e);
    console.log("Função externa ativada");
    
  };

  return (
    <div>
      <button onClick={teste}>Ativa função externa</button>
      <button onClick={() => console.log("Ativa função interna")}>
        Ativa função interna
      </button>
    </div>
  );
};

export default EventoExemplo;
