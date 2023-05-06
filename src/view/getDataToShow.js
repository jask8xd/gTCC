export const getDataToShow = (data) => {
  const events = data?.events.slice(0, 3).map((event) => ({
    id: event?.event?.id,
    image: event?.performers?.[0]?.hero_image_url,
    title: event?.event?.name,
    subtitle: event?.venue?.name,
  }));
  const performers = data?.performers.slice(0, 3).map((performer) => ({
    id: performer?.id,
    image: performer?.hero_image_url,
    title: performer?.name,
    subtitle: performer?.category.toUpperCase(),
  }));
  const venues = data?.venues.slice(0, 3).map((venues) => ({
    id: venues?.id,
    image: venues?.image_url,
    title: venues?.name,
    subtitle: venues?.city,
  }));
  return events.concat(performers, venues);
};
