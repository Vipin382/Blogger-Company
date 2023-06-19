"use client";
import { SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";

interface ICreateContext {
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderWrapper = createContext<ICreateContext>({
  loader: false,
  setLoader: (value: SetStateAction<boolean>) => {},
});
const Flaseloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => setLoader(true), 1500);
    }
  }, []);

  useEffect(() => {
    console.log(loader);
  }, [loader]);
  return (
    <LoaderWrapper.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderWrapper.Provider>
  );
};
export default Flaseloader;
