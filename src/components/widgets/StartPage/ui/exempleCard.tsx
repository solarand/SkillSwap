import rotate from "./../../../../assets/png/start-page/rotate.png";
import type { Example } from "./../../../../utils/startPageUtils";

interface Props {
  obj: Example;
}

//w-[400px]

const ExempleCard = ({ obj }: Props) => {
  return (
    <div className="w-start-page-exemple-card h-[450px] rounded-3xl flex flex-col items-center justify-between max-[991px]:w-start-page-exemple-card-900 max-[600px]:w-[300px]">
      <div className="relative">
        <img
          src={obj.img1}
          alt=""
          className="w-start-page-exemple-card h-[200px] rounded-t-3xl rounded-tr-3xl brightness-50 max-[991px]:w-start-page-exemple-card-900 max-[600px]:w-[300px]"
        />
        <h1 className="absolute bottom-4 left-4 text-paragraph text-white">
          {obj.h1}
        </h1>
      </div>
      <img src={rotate} alt="" className="h-8 w-8" />
      <div className="relative">
        <img
          src={obj.img2}
          alt=""
          className="w-start-page-exemple-card h-[200px] rounded-b-3xl rounded-br-3xl brightness-50 max-[991px]:w-start-page-exemple-card-900 max-[600px]:w-[300px]"
        />
        <h1 className="absolute bottom-4 left-4 text-paragraph text-white">
          {obj.h2}
        </h1>
      </div>
    </div>
  );
};

export default ExempleCard;
