interface Props {
  img: string;
  h1: string;
  p: string;
}

const CardWork = ({ img, h1, p }: Props) => {
  function adaptiveWidth() {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      return "calc(100vw/1.5)";
    }
    return "calc(100vw/4)";
  }

  return (
    <div
      className="h-[400px] shadow-cust1 rounded-3xl flex flex-col items-center justify-evenly"
      style={{ width: adaptiveWidth() }}
    >
      <img src={img} className="w-24 h-24" alt="" />
      <h1 className="text-center text-2xl font-bold">{h1}</h1>
      <p className="w-[280x] text-center mb-10 text-cast-gray text-paragraph">
        {p}
      </p>
    </div>
  );
};

export default CardWork;
