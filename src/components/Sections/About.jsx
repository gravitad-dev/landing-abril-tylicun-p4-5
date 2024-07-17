import data from "../../data.json";

function About() {
  return (
    <section id="about">
      <div className="flex justify-center pt-10">
        <p className="text-2xl sm:text-3xl  font-bold" style={{}}>
          {data["section-about"].title}
          <img
            src={data["section-about"].emoji.url}
            alt={data["section-about"].emoji.alt}
            className="inline ml-2 "
          />
        </p>
      </div>
      <div className="flex items-center w-full px-4 my-20 justify-center">
        <img
          src={data["section-about"].image.url}
          alt={data["section-about"].image.alt}
          className="w-[40%] hidden lg:block rounded-md shadow-black shadow-md"
        />
        <div className="flex flex-col justify-center items-start text-text-primary space-y-2 px-4">
          <div className="p-6 shadow-xl lg:w-5/6 space-y-2 rounded-xl">
            <p className="font-semibold">
              {data["section-about"]["title-paragraph"]}
            </p>
            <p className="text-[14px] leading-8">
              {data["section-about"].paragraph}
            </p>
          </div>
          <div className="p-6 shadow-xl lg:w-5/6 space-y-2 rounded-xl">
            <p className="font-semibold">Estrategias de venta social:</p>
            <p className="text-[14px] leading-8">
              aumente sus ventas con nuestras estrategias de venta social
              personalizadas, aprovechando el poder de las redes sociales para
              llegar e involucrar a su público objetivo.
            </p>
          </div>
          <div className="p-6 shadow-xl lg:w-5/6 space-y-2 rounded-xl">
            <p className="font-semibold">Análisis y visualización de datos:</p>
            <p className="text-[14px] leading-8">
              obtenga una comprensión más profunda del desempeño de su negocio
              con nuestros servicios integrales de visualización y análisis de
              datos.
            </p>
          </div>
          <div className="p-6 shadow-xl lg:w-5/6 space-y-2 rounded-xl">
            <p className="font-semibold">
              Investigación y análisis de mercado:
            </p>
            <p className="text-[14px] leading-8">
              manténgase por delante de la competencia con nuestra investigación
              y análisis de mercado en profundidad, que le brinda la información
              necesaria para tomar decisiones informadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
