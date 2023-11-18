import { create } from "zustand";
import _uniq from "lodash/uniq";

type TTagHandle = {
  handleSetTag: (tag: string) => void;
};

type TDeleteTagHandle = {
  handleDeleteTag: (tag: string) => void;
};

type TSelectTag = {
  selectTag: string[];
};

export type TTagStore = TSelectTag & TTagHandle & TDeleteTagHandle;

export const useTagStore = create<TTagStore>((set) => ({
  selectTag: [],
  handleSetTag: (tag) =>
    set((state) => ({
      selectTag: _uniq([...state.selectTag, tag]),
    })),
  handleDeleteTag: (tag) =>
    set((state) => ({
      selectTag: state.selectTag.filter((el) => el !== tag),
    })),
}));
