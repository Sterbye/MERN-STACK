import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error(
      "useWorkoutsContext musst be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
