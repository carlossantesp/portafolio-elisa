import Hero from "../components/Hero";
import Information from "../components/Information";
import Layout from "../components/Layout";
import Listaproyectos from "../components/Listaproyectos";
import { data } from "../data/info";

export default function Home() {
  return (
    <Layout>
      <Hero
        name={data.name}
        description={data.description}
        phone={data.phone}
        email={data.email}
        imageMe={data.image}
      />
      <Information info={data.info} />
      <Listaproyectos proyectos={data.proyectos} />
    </Layout>
  );
}
