import { useState, useEffect } from "react";
import { getDataToShow } from "./getDataToShow";
import errorImage from "../assets/errorImage.png";
import { debounce } from "../utils/debounce";
const eventsError = [
  {
    id: "error",
    title: "An error occurred please try again",
    image: errorImage,
  },
];

export const useSearch = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [events]);

  const handleInputChange = async (event) => {
    if (event.target.value !== "") {
      setIsLoading(true);
      const response = await fetch(
        `https://mobile-staging.gametime.co/v1/search?q=${event.target.value}`
      );
      if (response?.ok) {
        const data = await response.json();
        const dataToShow = getDataToShow(data);
        setEvents(dataToShow);
      } else {
        setEvents(eventsError);
      }
    } else {
      setEvents("");
    }
  };

  const handleOnChange = debounce(handleInputChange, 1000);

  return {
    events,
    handleOnChange,
    isLoading,
  };
};
