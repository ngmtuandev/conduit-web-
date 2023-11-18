import useTags from "../hooks/Article/useTags";
import { Spinner } from "@material-tailwind/react";
import { useTagStore } from "../store/tags";

const BodyHomeRight = () => {
  const { tags, isLoadingTags } = useTags();
  const handleSelectTag = useTagStore((state) => state.handleSetTag);
  const selectTag = useTagStore((state) => state.selectTag);
  const handleDeleteTag = useTagStore((state) => state.handleDeleteTag);
  return (
    <div>
      {isLoadingTags ? (
        <div className="mt-10 ml-40">
          <Spinner className="h-12 w-12 text-white" />
        </div>
      ) : (
        <div className="text-[10px] gap-4 flex flex-wrap shadow-xl p-5 w-[95%] bg-gray-300 bg-opacity-30 rounded-xl mt-4">
          {tags &&
            tags?.map((item: string, index: number) => {
              return (
                <div
                  onClick={() => handleSelectTag(item)}
                  className="bg-gray-200 p-1 cursor-pointer hover:bg-opacity-90 shadow-xl rounded-xl px-2"
                  key={index}
                >
                  <span className="text-gray-800 text-[14px]">{item}</span>
                </div>
              );
            })}
        </div>
      )}
      <div className="mt-4">
        <h3>Tag Selected</h3>
        {selectTag.length > 0 &&
          selectTag.map((el) => {
            return (
              <div
                onClick={() => handleDeleteTag(el)}
                className="bg-gray-200 p-1 cursor-pointer w-[100px] hover:bg-opacity-90 shadow-xl rounded-xl px-2 mb-3"
              >
                <span className="text-gray-800 text-[14px]">{el}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BodyHomeRight;
