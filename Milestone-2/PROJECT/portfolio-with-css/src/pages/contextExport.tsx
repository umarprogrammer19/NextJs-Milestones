import { createContext } from "react";
import { Location } from "react-router-dom";

type union = string | React.Dispatch<React.SetStateAction<string>>
export const menuChangingContext = createContext<Array<union> | null>(null);

type union2 = Location | React.Dispatch<React.SetStateAction<Location<unknown>>>
export const transitionContext = createContext<Array<union2> | null>(null);