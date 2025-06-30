// Redux
import { useDispatch, useSelector } from "react-redux";
// Store
import type { RootState, AppDispatch } from "./store.redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
