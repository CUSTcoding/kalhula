import Headers from "@/components/layout/header";
import HeroPage from "@/components/layout/heroPage";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Headers/>
      <HeroPage/>
    </>

  );
}
