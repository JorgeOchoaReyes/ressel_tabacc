import { Joystick, LogOut, Settings, Trophy } from "lucide-react";
import { CrypticButton } from "~/components/button/CrypticButton";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { useRouter } from "next/router";
import { FadeInSlide } from "~/components/animation/FadeInSlide";

export default function Home(){   
  const router = useRouter();

  return (
    <DashboardLayout title="Lobby"> 
      <video autoPlay muted loop style={{
        "objectFit": "cover",   
        "width": "100",
        "height": "100",
        "position": "fixed", 
        "zIndex": "-1",
      }}>         
        <source src="./lobby-background.mp4" type="video/mp4"/>       
      </video> 
      <FadeInSlide>
        <div className="flex flex-col gap-4 p-4 w-fit h-[300px] items-start fixed top-[250px] ml-[13%] rounded-lg bg-gray-900/70">   
          <hr />
          <CrypticButton 
            _text="Play" 
            _onClick={async () => {
              await router.push("/play");
            }} 
            _icon={<Joystick />}
          /> 
          <CrypticButton 
            _text="Leaderboard" 
            _onClick={() => {
              alert("Create Game");
            }}
            _icon={<Trophy />}
          />
           
          <CrypticButton 
            _text="Settings" 
            _onClick={() => {
              alert("Create Game");
            }}
            _icon={<Settings />}
          />
          <CrypticButton 
            _text="Sign Out" 
            _onClick={() => {
              alert("Create Game");
            }}
            _icon={<LogOut />}
          /> 
        </div>
      </FadeInSlide>
    </DashboardLayout>
  );
}; 