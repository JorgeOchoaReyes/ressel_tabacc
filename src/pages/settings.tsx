import { ArrowLeft, } from "lucide-react";
import router from "next/router";
import { FadeInSlide } from "~/components/animation/FadeInSlide"; 
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { Tabs } from "~/components/tabs";
import { Button } from "~/components/ui/button";
import { Background_Lobby } from "~/components/layout/Background_Lobby";

export default function Home(){   
  return (
    <DashboardLayout title="Settings"> 
      <Background_Lobby />
      <div className="overflow-hidden">
        <FadeInSlide>
          <Button className="fixed top-5 left-5" variant={"ghost"} onClick={async () => {
            await router.push("/lobby");
          }}>
            <ArrowLeft size={64} />
          </Button>
          <div className="flex w-[100vw] h-[100vh] items-center justify-center content-center overflow">  
            <div className="flex flex-col gap-4 p-4 w-fit h-[600px] items-centers justify-start rounded-lg bg-gray-900/80">   
              <Tabs tabs={["Find game", "Create game", "Search Lobby"]} />

            </div>
          </div>
        </FadeInSlide>
      </div>
    </DashboardLayout>
  );
}; 