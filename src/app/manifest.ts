import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Big Dragons Gym",
    short_name: "Big Dragons",
    description:
      "24/7 gym, personal training, and nutrition advice in Blaenau Ffestiniog, LL41 3AL.",
    start_url: "/",
    display: "standalone",
    background_color: "#4a1212",
    theme_color: "#4a1212",
    icons: [
      {
        src: "/media/logo-crest.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
