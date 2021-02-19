import Proyecto from "../Proyecto";

export default function Listaproyectos({ proyectos }) {
  return (
    <div id="proyectos">
      {proyectos.map((proyecto, index) => (
        <Proyecto key={index} proyecto={proyecto} />
      ))}
    </div>
  );
}
