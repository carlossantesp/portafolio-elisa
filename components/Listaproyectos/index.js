import Proyecto from "../Proyecto";

export default function Listaproyectos({ proyectos }) {
  return (
    <section id="proyectos">
      {proyectos.map((proyecto, index) => (
        <Proyecto key={index} proyecto={proyecto} />
      ))}
    </section>
  );
}
