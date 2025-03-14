import { DashboardLayout } from "~/components/layout/DashboardLayout";  
import { FadeInSlide } from "~/components/animation/FadeInSlide";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Token } from "~/components/game-ui/token"; 
import { UserCards } from "~/components/game-ui/user-cards";
import { Deck } from "~/components/game-ui/deck";

export default function Home(){   
  const router = useRouter();
  const id = router.query.tableId;
  return (
    <DashboardLayout title="Table"> 
      <div className="overflow-hidden bg-gray-900 ">
        <FadeInSlide>
          <Button className="fixed top-5 left-5" variant={"ghost"} onClick={async () => {
            await router.push("/lobby");
          }}>
            <ArrowLeft size={64} />
          </Button>

          <div className="flex w-[100vw] h-[100vh] items-center justify-center content-center overflow ">  
            <div className="flex flex-col gap-4 p-4 w-[100vw] h-[100vh] items-center justify-start rounded-lg overflow-hidden">
              <h1 className="text-2xl font-semibold">
                Table {id}
              </h1> 

              <div> 
                <Deck />
              </div>

              <div className="flex flex-row gap-16 mt-auto"> 
                <UserCards />
                <div className="flex flex-row mt-auto"> 
                  <Token /> 
                </div>
              </div>

            </div>
          </div>
        </FadeInSlide>
      </div>
    </DashboardLayout>
  );
}; 