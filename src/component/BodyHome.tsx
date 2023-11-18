import BodyHomeLeft from "./BodyHomeLeft";
import BodyHomeRight from "./BodyHomeRight";

const BodyHome = () => {
  return (
    <div className="flex px-5 w-[100%] h-[700px] bg-gray-600">
      <div className="w-4/6 h-full ">
        <BodyHomeLeft></BodyHomeLeft>
      </div>
      <div className="w-2/6 h-full ">
        <BodyHomeRight></BodyHomeRight>
      </div>
    </div>
  );
};

export default BodyHome;
