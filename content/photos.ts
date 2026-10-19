import type { Lang } from "@/lib/routes";

export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: { en: string; th: string };
};

/** Property photographs supplied for the site. */
export const photos: Photo[] = [
  {
    id: "hills-day",
    src: "/photos/hills-day.jpg",
    width: 1024,
    height: 768,
    alt: {
      en: "Rolling forested hills and distant peaks under a bright sky near Chestnut Hill",
      th: "เนินเขาป่าและยอดเขาไกลใต้ท้องฟ้าแจ่มใสใกล้เชสท์นัท ฮิลล์",
    },
  },
  {
    id: "terrace-view",
    src: "/photos/terrace-view.jpg",
    width: 1066,
    height: 800,
    alt: {
      en: "Wooden terrace seating looking out to the forested hills",
      th: "ระเบียงไม้พร้อมที่นั่ง มองออกไปยังเนินเขาที่ปกคลุมด้วยป่า",
    },
  },
  {
    id: "thatched-pavilion",
    src: "/photos/thatched-pavilion.jpg",
    width: 819,
    height: 1024,
    alt: {
      en: "Thatched open pavilion with concrete tables and hanging lamps among the trees",
      th: "ศาลาหลังคาหญ้าเปิดโล่ง มีโต๊ะคอนกรีตและโคมไฟแขวนท่ามกลางต้นไม้",
    },
  },
  {
    id: "forest-cafe",
    src: "/photos/forest-cafe.jpg",
    width: 1024,
    height: 817,
    alt: {
      en: "Wooden outdoor seating under umbrellas in the forest cafe",
      th: "ที่นั่งไม้กลางแจ้งใต้ร่ม ในคาเฟ่กลางป่า",
    },
  },
  {
    id: "forest-lounge",
    src: "/photos/forest-lounge.jpg",
    width: 960,
    height: 720,
    alt: {
      en: "Open forest lounge with wooden tables, a hammock, and cottages among the trees",
      th: "พื้นที่พักผ่อนกลางป่า มีโต๊ะไม้ เปลญวน และกระท่อมในดงไม้",
    },
  },
  {
    id: "balcony-day",
    src: "/photos/balcony-day.jpg",
    width: 1024,
    height: 478,
    alt: {
      en: "Daytime mountain view from a cottage balcony railing",
      th: "วิวภูเขาตอนกลางวันจากระเบียงกระท่อม",
    },
  },
  {
    id: "valley-palm",
    src: "/photos/valley-palm.jpg",
    width: 1024,
    height: 478,
    alt: {
      en: "Wide valley of green hills framed by palm fronds and forest",
      th: "หุบเขาเขียวกว้าง กรอบด้วยใบปาล์มและป่า",
    },
  },
  {
    id: "canopy-up",
    src: "/photos/canopy-up.jpg",
    width: 1024,
    height: 768,
    alt: {
      en: "Looking up through the forest canopy to a bright sky",
      th: "มองขึ้นผ่านเรือนยอดป่าสู่ท้องฟ้าสว่าง",
    },
  },
  {
    id: "sky-through-trees",
    src: "/photos/sky-through-trees.jpg",
    width: 1024,
    height: 768,
    alt: {
      en: "Clear blue sky framed by green treetops on the hillside",
      th: "ท้องฟ้าสีฟ้าใส กรอบด้วยยอดไม้เขียวบนไหล่เขา",
    },
  },
  {
    id: "cottages-path",
    src: "/photos/cottages-path.jpg",
    width: 482,
    height: 352,
    alt: {
      en: "Stone path leading to wooden cottages among the trees",
      th: "ทางเดินหินมุ่งไปยังกระท่อมไม้ท่ามกลางต้นไม้",
    },
  },
  {
    id: "lae-pa-cafe",
    src: "/photos/lae-pa-cafe.jpg",
    width: 1066,
    height: 800,
    alt: {
      en: "Lae Pa Cafe building and outdoor seating in the forest",
      th: "อาคารแลผาคาเฟ่และที่นั่งกลางแจ้งในป่า",
    },
  },
  {
    id: "deck-valley",
    src: "/photos/deck-valley.jpg",
    width: 940,
    height: 788,
    alt: {
      en: "Deck with a hammock overlooking the valley and distant mountains",
      th: "ระเบียงพร้อมเปลญวน มองหุบเขาและภูเขาไกล",
    },
  },
  {
    id: "sunset-viewpoint",
    src: "/photos/sunset-viewpoint.png",
    width: 851,
    height: 315,
    alt: {
      en: "Sunset over the hills from a thatched viewpoint at Chestnut Hill Eco Resort",
      th: "พระอาทิตย์ตกเหนือเนินเขา จากจุดชมวิวหลังคาหญ้าที่เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท",
    },
  },
  {
    id: "yellow-flower",
    src: "/photos/yellow-flower.jpg",
    width: 1024,
    height: 768,
    alt: {
      en: "Small yellow wildflower among green leaves on the forest floor",
      th: "ดอกไม้ป่าสีเหลืองเล็กๆ ท่ามกลางใบเขียวบนพื้นป่า",
    },
  },
  {
    id: "balcony-sunrise",
    src: "/photos/balcony-sunrise.jpg",
    width: 1024,
    height: 1024,
    alt: {
      en: "Sunrise over the mountains from a wooden cottage balcony with coffee",
      th: "พระอาทิตย์ขึ้นเหนือภูเขา จากระเบียงกระท่อมไม้พร้อมกาแฟ",
    },
  },
];

const byId = Object.fromEntries(photos.map((photo) => [photo.id, photo])) as Record<string, Photo>;

export const heroPhoto = byId["hills-day"];

/** Six varied shots for the home page strip. */
export const homePreviewPhotos = [
  byId["terrace-view"],
  byId["thatched-pavilion"],
  byId["forest-cafe"],
  byId["balcony-day"],
  byId["canopy-up"],
  byId["valley-palm"],
];

export const storyMoodPhoto = byId["canopy-up"];
export const experiencesMoodPhoto = byId["thatched-pavilion"];
export const contactMoodPhoto = byId["balcony-day"];

export function photoAlt(lang: Lang, photo: Photo) {
  return photo.alt[lang];
}

export function galleryImages(lang: Lang) {
  return photos.map((photo) => ({
    src: photo.src,
    alt: photoAlt(lang, photo),
    width: photo.width,
    height: photo.height,
  }));
}
