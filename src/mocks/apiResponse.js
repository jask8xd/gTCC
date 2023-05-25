export const apiResponse = {
  display_groups: [
    { display_name: "Top Result", slug: "top_pick", sort_order: 0 },
    { display_name: "Performers", slug: "performers", sort_order: 1 },
    { display_name: "Venues", slug: "venues", sort_order: 2 },
    { display_name: "Events", slug: "events", sort_order: 3 },
  ],
  events: [
    {
      event: { id: 1, name: "Event 1" },
      performers: [{ hero_image_url: "image1.png" }],
      venue: { name: "Venue 1" },
    },
    {
      event: { id: 2, name: "Event 2" },
      performers: [{ hero_image_url: "image2.png" }],
      venue: { name: "Venue 2" },
    },
    {
      event: { id: 3, name: "Event 3" },
      performers: [{ hero_image_url: "image3.png" }],
      venue: { name: "Venue 3" },
    },
  ],
  performers: [
    {
      id: 4,
      name: "Performer 1",
      hero_image_url: "image1.png",
      category: "Category 1",
    },
    {
      id: 5,
      name: "Performer 2",
      hero_image_url: "image2.png",
      category: "Category 2",
    },
    {
      id: 6,
      name: "Performer 3",
      hero_image_url: "image3.png",
      category: "Category 3",
    },
  ],
  venues: [
    { id: 7, name: "Venue 1", city: "City 1", image_url: "image1.png" },
    { id: 8, name: "Venue 2", city: "City 2", image_url: "image2.png" },
    { id: 9, name: "Venue 3", city: "City 3", image_url: "image3.png" },
  ],
};
