import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import { useState } from "react";

export const RangeFilter = ({ onRangeChange }) => {
  const [range, setRange] = useState([0, 10000]); // Rango inicial

  const handleRangeChange = (value) => {
    setRange(value);
    onRangeChange(value); // Pasamos el valor seleccionado en tiempo real
  };

  return (
    <>
      <Text>Price Range: ${range[0]} - ${range[1]}</Text>
      <RangeSlider
        aria-label={['min', 'max']}
        defaultValue={[0, 10000]}
        min={0}
        max={10000}
        step={10}
        value={range}
        onChange={handleRangeChange} // Usamos onChange para actualizar en tiempo real
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
};
