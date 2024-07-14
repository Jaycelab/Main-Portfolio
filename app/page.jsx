import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

{
  /*Components*/
}
import Links from "@/components/ui/Links";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TextLoop from "@/components/TextLoop";

const Home = () => {
  return (
    <section className="h-full">
      {/*Hero Container*/}
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Hero Heading*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TextLoop />
            {/*<span className="text-xl">Hello </span>
            <span className="text-xl text-animation">World! </span>*/}

            {/*"<span className="text-xl">🌎</span>"*/}
            <h1 className="h1 mb-6">
              Lorem ipsum <br />
              <span className="text-accent">Jayce</span>
            </h1>

            {/*"animate roles using array (5)"*/}
            <p className="max-w-[500px] mb-9 text-white/80">
              a self-taught developer, chartist, chef, photographer, music
              producer and overall curious learner that loves to experiment and
              try new things
            </p>

            {/*buttons, links*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-white hover:bg-accent/90 hover:text-white hover:transition-all duration-500"
              >
                <span>Download</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                {/*buttons, links*/}
                <Links
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center text-accent/90 text-base  hover:bg-accent/90 hover:text-white hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>

          {/*Hero Image*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/*Stats*/}
      <Stats />
    </section>
  );
};

export default Home;
