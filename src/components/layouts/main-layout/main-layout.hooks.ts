import { setOpen } from "global/sidebar/sidebar.slice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

export const useMainLayoutComponent = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.open);
  const onCloseSidebar = useCallback(
    () => dispatch(setOpen(false)),
    [dispatch]
  );

  return { sidebarOpen, onCloseSidebar };
};
