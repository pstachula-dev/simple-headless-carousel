import { memo, useContext } from "react";
import { CarouselContext } from "../context/CarouselContext";
import { SliderButton } from "./SliderButton";

export const NextButton = memo(({ onClick }: { onClick?: () => void }) => {
  const { dispatch } = useContext(CarouselContext);

  return (
    <SliderButton
      action={() => dispatch({ action: "next" })}
      title="Next"
      onClick={onClick}
    />
  );
});
