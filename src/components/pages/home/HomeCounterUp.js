
import CountUp from "react-countup";

export default function HomeCounterUp() {

  const counterlist = [
    {
      id: Math.random(),
      type: "Loyal Customers",
      count: 25000,
      slide: "fade-right",
    },
    {
      id: Math.random(),
      type: "Online Orders",
      count: 50000,
      slide: "fade-left",
    },
    {
      id: Math.random(),
      type: "Visiters",
      count: 115000,
      slide: "fade-right",
    },
    {
      id: Math.random(),
      type: "Happy Customers",
      count: 43500,
      slide: "fade-left",
    },
  ];

  return (
    <div className="counter_container">
      <h2 className="title">Testimonials</h2>
      <div className="counter_content">
        {counterlist.map((count) => (
          <div className="counter_item" key={count.id} data-aos={count.slide}>
            <h2>{count.type}</h2>
            <CountUp
              start={1000}
              end={count.count}
              duration={5}
              scrollSpyDelay={10}
              separator="."
              prefix="+"
            />
          </div>
        ))}
      </div>
    </div>
  );
}