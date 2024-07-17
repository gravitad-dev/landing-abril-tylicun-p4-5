import data from "../../data.json";
import Card from "../utils/Card";
import { useMediaQuery } from "react-responsive";

export default function Testimonials() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <section id="testimonials">
      <div className=" py-12 px-4 w-full">
        <div className="flex justify-evenly items-center ">
          {data["section-testimonials"].clients
            ?.slice(0, isMobile ? 2 : undefined)
            .map((client, index) => (
              <Card
                key={client.id + index}
                paragraph={client.paragraph}
                url={client.image}
                alt={client.alt}
                role={client.role}
                name={client.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
