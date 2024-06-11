import { toggle } from "global/sidebar/sidebar.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useAppBar = () => {
  const dispatch = useDispatch();
  const toggleSidebar = useCallback(() => dispatch(toggle()), [dispatch]);

  return { toggleSidebar };
};
