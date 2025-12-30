'use client';
import YearComponent from "@/components/atoms/YearComponent";
import TVComponent from "@/components/atoms/TVComponent";
import { BorderContext } from "@/providers/border-provider";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Dispatch, SetStateAction, useContext, useEffect, useMemo } from "react";
import NeonButton from "@/components/atoms/NeonButton";
import { languageContext } from "@/providers/language-provider";
import { Languages } from "@/enums";

export default function App() {
  const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };
  const lanContext = useContext(languageContext) as { language: Languages, setLanguage: Dispatch<SetStateAction<Languages>> };
  const languageArray = Object.keys(Languages).map(language => language)

  useEffect(() => {
    setZoom(false)
  }, [])

  return <>
    <TVComponent>
      <div className="flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-10">
          <p>&copy;</p>
          <YearComponent />
          <span>
            <Image src="/dev.png" alt="rafonso.dev" width={80} height={0} />
          </span>
        </div>
        <Image src="/rafonsodev.png" alt="logo" width={350} height={0}
          className="
          animate-[blink_.2s_infinite]
          mx-auto
          my-10
        "
        />
        <div className="flex flex-col items-center justify-center mb-5">
          <NeonButton
            styleAdd="font-(Press Start 2P) text-2xl text-center cursor-pointer text-shadow-current hover:text-shadow-[0_0_10px_current] active:duration-75 active:opacity-0 active:scale-125"
            onClick={() => {
              redirect('/home')
            }}
          >
            PRESS ENTER
          </NeonButton>
        </div>
        <NeonButton
          styleAdd="font-(Press Start 2P) text-sm text-center cursor-pointer text-shadow-current hover:text-shadow-[0_0_10px_current] active:duration-75 active:opacity-0 active:scale-125"
          onClick={() => {
            const currentIndex = languageArray.indexOf(lanContext.language)
            const languagesLength = languageArray.length - 1
            const nextIndex = currentIndex === languagesLength ? 0 : currentIndex + 1
            lanContext.setLanguage(Languages[languageArray[nextIndex] as keyof typeof Languages]);
          }}
        >
          LANGUAGE: {Languages[lanContext.language as keyof typeof Languages].toUpperCase()}
        </NeonButton>
      </div>
    </TVComponent>
  </>;
}
