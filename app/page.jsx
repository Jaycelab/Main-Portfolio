import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Links from "@/components/ui/Links";

const page = () => {
  return (
    <section className="h-full">
      {/*Hero Container*/}
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/*Hero Heading*/}
          <div className="text-center xl:text-left">
            <span className="text-xl">header?</span>
            <h1 className="h1 mb-6">
              Lorem ipsum <br />
              <span className="text-accent"> Magni</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              error temporibus, deleniti nostrum itaque minima pariatur officia
              mollitia placeat dolor!
            </p>

            {/*buttons, links*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Links
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-al duration-800 "
                />
              </div>
            </div>
          </div>

          {/*Hero Image*/}
          <div>right col</div>
        </div>
      </div>
    </section>
  );
};

export default page;
