export const getDataToShow = (data) => {
  const order = data?.display_groups.filter(
    (d) => d.display_name !== "Top Result"
  );
  let events = [];
  for (let i = 0; i < order.length; i++) {
    const e = data?.[order[i].slug].slice(0, 3).map((event) => ({
      id: event?.event?.id || event?.id,
      image:
        event?.performers?.[0]?.hero_image_url ||
        event?.hero_image_url ||
        event?.image_url,
      title: event?.event?.name || event?.name,
      subtitle:
        event?.venue?.name || event?.category?.toUpperCase() || event?.city,
    }));
    events = events.concat(e);
  }

  return events;
};
