import "./App.css";
import { DotsGroup } from "./lib/simple-headless-carousel";
import { CarouselProvider } from "./lib/simple-headless-carousel/CarouselProvider";
import { Carousel } from "./lib/simple-headless-carousel/components/Carousel";
import { Dot } from "./lib/simple-headless-carousel/components/Dot";
import { NextButton } from "./lib/simple-headless-carousel/components/NextButton";
import { PrevButton } from "./lib/simple-headless-carousel/components/PrevButton";
import { Slide } from "./lib/simple-headless-carousel/components/Slide";
import { useState } from "react";

const Box = ({ index }: { index: number }) => {
  return (
    <div className="h-full flex justify-center items-center bg-gray-800 border-4 border-gray-900">
      {index}
    </div>
  );
};

function App() {
  const [total, setTotal] = useState(4);

  return (
    <div className="w-[500px]">
      <button onClick={() => setTotal(total + 1)}>Add slide</button>

      <CarouselProvider
        autoPlayDelay={2000}
        autoPlay={false}
        slidesVisible={2}
        step={2}
        total={4}
      >
        <Carousel>
          <Slide index={0}>
            <Box index={0} />
          </Slide>
          <Slide index={1}>
            <Box index={1} />
          </Slide>
          <Slide index={2}>
            <Box index={2} />
          </Slide>
          <Slide index={3}>
            <Box index={3} />
          </Slide>
        </Carousel>

        <div className="flex justify-center mt-4">
          <DotsGroup />
        </div>

        <PrevButton />
        <NextButton />
      </CarouselProvider>
    </div>
  );
}

export default App;
