import { DashboardLayout } from "~/components/layout/DashboardLayout"; 
import { Background_Lobby } from "~/components/layout/Background_Lobby";
import { FadeInSlide } from "~/components/animation/FadeInSlide";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Chips } from "~/components/game-ui/chip";
import { Card } from "~/components/game-ui/card";

export default function Home(){   
  const router = useRouter();
  const id = router.query.tableId;
  return (
    <DashboardLayout title="Table">
      <Background_Lobby />
      <div className="overflow-hidden">
        <FadeInSlide>
          <Button className="fixed top-5 left-5" variant={"ghost"} onClick={async () => {
            await router.push("/lobby");
          }}>
            <ArrowLeft size={64} />
          </Button>

          <div className="flex w-[100vw] h-[100vh] items-center justify-center content-center overflow ">  
            <div className="flex flex-col gap-4 p-4 w-[85vw] h-[90vh] items-center justify-start rounded-lg bg-gray-900">
              <h1 className="text-2xl font-semibold">
                Table {id}
              </h1> 


              <Chips />
              <Card />

            </div>
          </div>
        </FadeInSlide>
      </div>
    </DashboardLayout>
  );
}; 