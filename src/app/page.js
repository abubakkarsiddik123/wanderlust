import Banner from "@/components/Banner";
import ChooseWanderlust from "@/components/ChooseWanderlust";
import HomePage from "@/components/HomePage";
import TravelSay from "@/components/TravelSay";


export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const destinations = await res.json();
  return (
    <>
      <Banner />
      <HomePage destinations={destinations}/>
      <ChooseWanderlust/>
      <TravelSay/>
     
    </>
  );
}
