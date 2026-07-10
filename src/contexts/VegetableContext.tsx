import { createContext, useState } from "react";
import type { PropsWithChildren } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Vegetables } from "../types";

type VegetableContextType = {
  vegetableContextData: Vegetables[];
  setVegetableContextData: Dispatch<SetStateAction<Vegetables[]>>;
};

export const VegetableContext = createContext<VegetableContextType | null>(null);

function VegetableContextProvider({ children }: PropsWithChildren) {

  const [vegetableContextData, setVegetableContextData] = useState<Vegetables[]>([]);

  return (
    <VegetableContext.Provider
      value={{
        vegetableContextData,
        setVegetableContextData,
      }}
    >
      {children}
    </VegetableContext.Provider>
  );
}
export default VegetableContextProvider;