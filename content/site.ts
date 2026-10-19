import type { Lang, PageKey } from "@/lib/routes";

export const site = {
  domain: "https://www.chestnuthilleco.com",
  name: { en: "Chestnut Hill Eco Resort", th: "เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท" },
  legalName: { en: "Chestnut Hill Eco Co., Ltd.", th: "บริษัท เชสท์นัท ฮิลล์ อีโค่ จำกัด" },
  email: "chestnuthilleco@gmail.com",
  bookingUrl:
    "https://ibe.hoteliers.guru/ibe/en/Chestnut-Hill-Eco-Resort-Songkhal-Songkhla-TH",
  facebook: "https://www.facebook.com/chestnuthilleco",
  tripadvisor:
    "https://www.tripadvisor.com/Hotel_Review-g297921-d3733432-Reviews-Chestnut_Hill_Eco_Resort-Hat_Yai_Hat_Yai_District_Songkhla_Province.html",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.239560692052!2d100.53986069999999!3d6.861867599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051bff3f4bc2b6f%3A0xd7f615799d38d86f!2sChestnut%20Hill%20Eco%20Resort!5e0!3m2!1sen!2sth!4v1791539181127!5m2!1sen!2sth",
  geo: { latitude: 6.8618676, longitude: 100.5398607 },
  phones: [
    { display: "074 800 315", tel: "+6674800315" },
    { display: "081 957 4407", tel: "+66819574407" },
    { display: "081 822 2110", tel: "+66818222110" },
    { display: "081 328 7132", tel: "+66813287132" },
  ],
  address: {
    en: ["174/3 Moo 5, Ban Thung Chang", "Tambon Phatong, Hat Yai", "Songkhla 90230, Thailand"],
    th: ["174/3 หมู่ 5 บ้านทุ่งจัง", "ต.พะตง อ.หาดใหญ่", "จ.สงขลา 90230"],
  },
  postal: {
    streetAddress: "174/3 Moo 5, Ban Thung Chang, Tambon Phatong",
    addressLocality: "Hat Yai",
    addressRegion: "Songkhla",
    postalCode: "90230",
    addressCountry: "TH",
  },
  mapsQuery:
    "Chestnut Hill Eco Resort, 174/3 Moo 5, Ban Thung Chang, Tambon Phatong, Hat Yai, Songkhla 90230, Thailand",
  checkIn: "14:00",
  checkOut: "12:00",
} as const;

export const navItems: { key: PageKey; path: string }[] = [
  { key: "home", path: "/" },
  { key: "story", path: "/story" },
  { key: "accommodation", path: "/accommodation" },
  { key: "experiences", path: "/experiences" },
  { key: "gallery", path: "/gallery" },
  { key: "contact", path: "/contact" },
];

const en = {
  nav: {
    home: "Home",
    story: "Our Story",
    accommodation: "Accommodation",
    experiences: "Nature & Experiences",
    gallery: "Gallery",
    contact: "Location & Contact",
    archive: "Events",
  },
  skip: "Skip to content",
  menu: "Menu",
  close: "Close",
  langAria: "Language",
  navAria: "Primary",
  stayCta: "Book a stay",
  bookOnline: "Book online",
  ctaNote: "Check-in 14:00–18:00 · breakfast included",
  readMore: "Read more",
  photosTitle: "From the hillside",
  photosLead: "Terraces, forest cafe, cottages, canopies, and the long view over the hills.",
  photosCta: "Open the gallery",
  footerEvents: "Events",
  footerRights: "Chestnut Hill Eco Co., Ltd.",
  emptyBody: "Details for this page will be added soon.",
  groups: {
    here: "On the property",
    published: "Get involved",
    publishedLead: "Ways to join the hillside community.",
  },
  seo: {
    home: {
      title: "Chestnut Hill Eco Resort | Hat Yai, Songkhla",
      description:
        "An eco-friendly resort for nature lovers in Hat Yai, Thailand. Quiet stays, organic food, rock pools, treks, and a setting for workshops and group programs.",
    },
    story: {
      title: "Our Story",
      description:
        "From a children’s forest camp in 1996 to Chestnut Hill Eco Resort — a social-enterprise eco resort near Hat Yai, rooted in a simpler life with nature.",
    },
    accommodation: {
      title: "Accommodation",
      description:
        "Six hillside houses at Chestnut Hill Eco Resort near Hat Yai: Ban Tonsala, Tonsai, Shawmuwang, Romgaw, Nakbud, and Tonsom Dormitory. Breakfast included.",
    },
    experiences: {
      title: "Nature & Experiences",
      description:
        "Forest walks, Thai cooking class, organic garden, Lae Pa Cafe, and programs at Chestnut Hill Eco Resort near Hat Yai, Songkhla.",
    },
    gallery: {
      title: "Gallery",
      description:
        "Photos of Chestnut Hill Eco Resort near Hat Yai: hills, terraces, forest cafe, cottages, and hillside views about 26 km from the city.",
    },
    contact: {
      title: "Location & Contact",
      description:
        "174/3 Moo 5, Ban Thung Chang, Tambon Phatong, Hat Yai, Songkhla 90230. About 26 km from Hat Yai city and Hat Yai International Airport.",
    },
    archive: {
      title: "Events",
      description: "Courses, programs, and gatherings hosted at Chestnut Hill Eco Resort near Hat Yai, Songkhla.",
    },
  },
  home: {
    eyebrow: "Hat Yai · Songkhla · Thailand",
    title: "Rebalance Your Life,\nReunite with Nature",
    lede: "Away from the hustle and bustle of city life, the tranquility and natural beauty of Chestnut Hill Eco Resort make it a unique destination for conferences, seminars, and workshops.",
    panel: "An eco-friendly resort for nature lovers in Thailand.",
    introTitle: "Chestnut Hill — An Eco-Friendly Resort for Nature Lovers in Thailand",
    paragraphs: [
      "Away from the hustle and bustle of city life, the tranquility and natural beauty of Chestnut Hill Eco Resort make it a unique destination for conferences, seminars, and workshops.",
      "Our simple, clean accommodation, home-grown organic food and spacious facilities are available at affordable prices.",
      "Visitors from around the world can experience this magical jewel in Hat Yai. Some come to work, paint or write, while others simply take a break and enjoy the serenity. Activities include dips in the natural rock pools, traditional Thai healing treatments, massages and guided treks. Groups can also use our facilities to host their own programs.",
      "Families with children can enjoy weekend hikes along the forest trails.",
    ],
    facts: [
      { label: "From Hat Yai", value: "About 26 km" },
      { label: "Check-in", value: "14:00–18:00" },
      { label: "Breakfast", value: "Included" },
    ],
    waysTitle: "Ways to be here",
    waysLead: "Programs, a working kitchen, forest rooms, and the road up from Hat Yai.",
    ways: [
      {
        href: "/experiences",
        title: "Activities & programs",
        text: "Spacious grounds, cottage and guest-house rooms, Thai and vegetarian cooking, and a forest setting for groups and for people joining a workshop.",
      },
      {
        href: "/accommodation",
        title: "A place to stay",
        text: "Six houses on the hillside, from a single-bed cottage to the Tonsom dormitory. The resort is open all year, with Wi-Fi in the common areas and in the rooms.",
      },
      {
        href: "/contact",
        title: "The road up",
        text: "About 26 km from Hat Yai city and the airport. Come by songthaew, a prearranged car, or your own vehicle through Thung Lung.",
      },
    ],
    closingTitle: "Request a stay",
    closingText: "Share your dates by email, or book online.",
  },
  story: {
    eyebrow: "Hat Yai · Songkhla",
    title: "Our Story",
    lede: "Chestnut Hill | Our story among nature",
    introTitle: "A small place that began with intention",
    introParagraphs: [
      "Chestnut Hill did not begin as a resort. It grew from a wish to create a place where people could come closer to nature, learn to live together, and find joy in a simpler way of life.",
      "The story began in 1996 (B.E. 2539), when Pook (Mrs Vanerath Sornprasit) of Thung Lung founded Stream Garden Retreat. Inspired by the teachings of Krishnamurti, she set out to make a place in the forest that could welcome people from many places.",
    ],
    sections: [
      {
        title: "It began with a children’s camp in the forest",
        subtitle: "1996 | Where It All Began",
        paragraphs: [
          "In the early years, Stream Garden Retreat was a camp for children from nearby villages and from the city — a chance for them to live, learn, and meet nature together.",
          "Those first days were not easy. There was no road into the land, and no ready system for drinking water. Still, with the intention to build a place for learning and living with nature, the site grew step by step.",
        ],
      },
      {
        title: "From Stream Garden Retreat to Chestnut Hill",
        subtitle: "2016 | A New Chapter",
        paragraphs: [
          "Twenty years later, on 30 July 2016 (B.E. 2559), Stream Garden Retreat took the name Chestnut Hill — another important step in the life of this place.",
          "In the same year, Chestnut Hill began operating as a social enterprise under Chestnut Hill Eco Co., Ltd., with a fund to support rural communities in education, social work, and the environment, and to support local administration.",
          "That idea reflects a wish for the resort’s growth to help the community and the land around it.",
        ],
      },
      {
        title: "The founder and her inspiration",
        subtitle: "Our Founder | Pook",
        paragraphs: [
          "Pook (Mrs Vanerath Sornprasit) started the idea and laid the foundation of this place, believing in learning, a simple life, and the bond between people and nature.",
          "Today she no longer runs the day-to-day work of the resort, though she still divides her time between Chestnut Hill, Bangkok, India, and Europe.",
          "She also founded the Anveekshana Foundation, a non-profit that is not tied to any religion.",
        ],
      },
      {
        title: "Step away from the rush, and come closer to nature",
        subtitle: "Our Philosophy | A Simpler Way to Stay",
        paragraphs: [
          "At Chestnut Hill we believe a good rest does not need endless amenities. Sometimes time with nature is already a simple, meaningful kind of happiness.",
          "Our rooms have no telephone or television, so guests can leave the noise of daily life and be present with the setting around them.",
          "Among the trees, guests hear birdsong, wind, and the quiet of the forest, and can walk the grounds where signs name trees, birds, and other tropical wildlife found here.",
          "We hope every stay becomes a chance to rest, to learn, and to reunite with nature.",
        ],
      },
      {
        title: "Growing with the community",
        subtitle: "Our Community | Growing Together",
        paragraphs: [
          "Alongside care for nature, Chestnut Hill values people in the community, and opens work for young people from the area so they can be part of the resort.",
          "We believe good travel is not only a memorable experience for visitors — it should also create value and opportunity for people who live here.",
        ],
      },
      {
        title: "Find quiet in the Chestnut Hill way",
        subtitle: "A Stay Close to Nature Awaits",
        paragraphs: [
          "Chestnut Hill sits about 30 minutes from Hat Yai city, in a calm natural setting for anyone who wants to leave the rush and spend time alone or with people who matter.",
          "From a small children’s camp in the forest in 1996 to a place to stay today, Chestnut Hill still holds its first intention: a place where people, nature, and community can live together and support one another.",
        ],
      },
    ],
    closingLead: "Come Closer to Nature. Discover a Simpler Way of Living.",
    closingText: "Come closer to nature, and discover the joy of a simpler life.",
    ecoTitle: "Living with the hillside",
    ecoLead: "How Chestnut Hill works with the forest, the garden, and everyday care of the land.",
  },
  stayHero: {
    eyebrow: "Hat Yai · Songkhla",
    title: "Accommodation",
    lede: "Six houses on the hillside. Ask the resort for current rates.",
  },
  roomsTitle: "The houses",
  roomsLead: "Six houses on the hillside. Ask the resort for current rates.",
  rooms: [
    {
      id: "tonsala",
      name: "Ban Tonsala",
      paragraphs: [
        "A wooden cottage on the upper hillside, just below the sunrise viewpoint. The window faces west toward the mountains. One single bed, a shower and bathroom, and a large balcony for walking and yoga.",
      ],
    },
    {
      id: "tonsai",
      name: "Ban Tonsai",
      paragraphs: [
        "A wooden cottage on the upper hillside, with a wide deck for reading or resting. Two single beds in one room, with a shower and bathroom.",
      ],
    },
    {
      id: "shawmuwang",
      name: "Ban Shawmuwang",
      paragraphs: [
        "An elevated wooden cottage on the lower hillside. Upstairs, rooms 1 and 2 each have a single bed, a private shower and bathroom, and a small balcony. The ground floor has a hammock and a place to read.",
      ],
    },
    {
      id: "romgaw",
      name: "Ban Romgaw",
      paragraphs: ["The largest lodging: five twin rooms and two small dormitories."],
      points: [
        "Room 7, ground floor: two large windows toward the mountains, two single beds, one bathroom and shower.",
        "Rooms 1 and 4, middle floor: a large window with a mountain view, two single beds each, private bathroom and shower.",
        "Rooms 2 and 3, middle floor: a large window without the mountain view, two single beds each, private bathroom and shower.",
        "Rooms 5 and 6, dormitory style: six single beds each, two bathrooms and showers, east-facing windows toward the mountains, and a large balcony connecting the two rooms.",
      ],
    },
    {
      id: "nakbud",
      name: "Ban Nakbud",
      paragraphs: [
        "On the western forest slope, the longest view on the property. Two adjacent twin rooms, sandstone-tiled walls, slate floors, high ceilings, and sliding screened windows. The beds face a large window, with sunset and the night sky. Each room has an en suite with hot and cold water. This is the only cottage with air-conditioning.",
      ],
    },
    {
      id: "tonsom",
      name: "Tonsom Dormitory",
      paragraphs: [
        "A large room with up to 19 single beds. Four showers and bathrooms sit just outside the room. Windows face west toward the mountains. The dormitory is on the ground floor beneath the Activity Hall.",
      ],
    },
  ],
  policiesTitle: "Stay policies",
  policies: [
    {
      title: "Hours",
      text: "Check-in 14:00–18:00. Check-out 08:00–12:00, with late check-out until 13:00. The room rate includes breakfast. Lunch and dinner are not included.",
    },
    {
      title: "Deposit and cancellation",
      text: "A 50% deposit confirms a stay. Group bookings are non-refundable if cancelled within 30 days of arrival. An individual booking can be cancelled 7 days ahead. If a guest does not cancel, postpone, or arrive, the cancellation charge is 100%.",
    },
    {
      title: "Children and extra beds",
      text: "Children are welcome. One child under 5 stays free when using an existing bed. An extra bed is 500 baht per person per night, including breakfast.",
    },
    {
      title: "Key deposit",
      text: "A key deposit of 500 baht is paid on arrival.",
    },
    {
      title: "Cards and extras",
      text: "Visa, MasterCard, JCB, and UnionPay are accepted. Extra services requested on site may be charged separately during the stay.",
    },
    {
      title: "House rules",
      text: "Smoking is at the entrance only, not in rooms or shared indoor spaces. Alcohol is not brought in, except wine, which has a corkage charge. Pets are not allowed.",
    },
  ],
  bankTitle: "Bank transfer",
  bankLead: "A 50% deposit is paid before arrival.",
  bank: [
    "Chestnut Hill Eco Co., Ltd.",
    "Bangkok Bank PCL, Central Festival Hat Yai",
    "Account 641 7 07562 6 (savings)",
    "Swift BKKBTHBK",
  ],
  ratesNote: "Rates may change. Please ask the resort for the current rate card.",
  facilitiesTitle: "Kitchen, cafe, and practical things",
  facilities: [
    "Open all year, with Wi-Fi in the common areas and in the rooms. Please avoid large downloads or streaming so the connection stays usable for everyone.",
    "Cliff Terrace kitchen: breakfast 8:00–9:30, all-day restaurant 10:00–19:00. Thai and international dishes, vegetarian-friendly, with a juice bar. Day visitors can arrange meals if they ask ahead.",
    "Drinking water is collected as rainwater and passed through a sand filter.",
    "Lae Pa Cafe looks over the hills and is known for organic espresso. Open daily 10:00–17:00.",
    "Most rooms have no air-conditioning. Air-conditioning is in Ban Nakbud, which faces the afternoon sun, and in the Activity Hall for large groups.",
    "The hall can be hired for workshops, seminars, meetings, and camps: up to 150 people for a day program, and up to 60 overnight.",
    "For stays longer than 3 nights, sheets are changed. Housekeeping is about 10:00–15:00. There is a towel-reuse and bottle-recycling practice.",
    "Lockers can be requested at reception. Important documents can be left in the central safe. Bags may be stored free for up to 30 days; please lock them. The resort does not accept liability for loss or damage.",
    "Soap and shampoo are in the room. There is no telephone or television in the room. Ask reception for the Thai and international menus.",
  ],
  ratesTitle: "Extra charges",
  rates: [
    ["Bottled water", "15 baht / bottle"],
    ["Coconut water", "40 baht / fruit"],
    ["Yoga mat hire", "40 baht / day"],
    ["Towel hire", "40 baht / day"],
    ["Private locker", "50 baht / day"],
    ["A4 black-and-white print", "5 baht / page"],
    ["Computer use", "40 baht / hour"],
    ["Laundry, no ironing", "60 baht / kg (2 days)"],
    ["Laundry with ironing", "90 baht / kg (2 days)"],
    ["Express laundry", "40 baht / kg extra (1 day)"],
  ],
  form: {
    title: "Request a stay",
    lead: "Share your dates and the house you prefer. The resort replies by email.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    arrival: "Arrival",
    departure: "Departure",
    guests: "Guests",
    room: "House",
    roomAny: "Not sure yet",
    message: "Note",
    submit: "Send stay request",
    hint: "This opens your email app, addressed to the resort.",
    need: "Add your name, email, and a short note so we can reply.",
    sent: "Opening your email app with this enquiry.",
    subject: "Stay enquiry from Chestnut Hill website",
  },
  cookingFact: "950 baht per person, minimum 2 people. 9:30–12:00 or 14:30–17:00.",
  contact: {
    eyebrow: "Hat Yai · Songkhla",
    title: "Location & Contact",
    lede: "Hat Yai, above Ban Thung Chang. Give this address to a taxi driver on arrival in Hat Yai.",
    detailsTitle: "Address & phone",
    localName: "Locally the resort is called สวนสายน้ำ (Stream Garden).",
    distanceTitle: "Distances",
    distances: [
      "About 26 km from the centre of Hat Yai and from Hat Yai International Airport.",
      "About 18 km from Hat Yai to Thung Lung.",
      "About 8 km from Thung Lung to the resort.",
    ],
    arriveTitle: "From Hat Yai to the resort",
    options: [
      {
        title: "Prearranged car",
        text: "By arrangement only. Pick-up or drop-off from the airport, railway station, or in town: 700 baht, suitable for about 3 adults.",
      },
      {
        title: "Songthaew, then a motorbike taxi",
        text: "From the clock-tower bus station in central Hat Yai, take a maroon songthaew or the bus toward Sadao and get off at Thung Lung (about 20 baht). A motorbike taxi continues to the resort via Ban Thung Chang (about 130 baht).",
      },
      {
        title: "Driving",
        text: "From Hat Yai, follow Kanchanavanich Road toward Sadao and the Malaysian border. At Thung Lung, about 18 km, turn left into Ban Thung Chang at Thung Lung police station (near the Suzuki garage) and follow the signs for about 8 km.",
      },
    ],
    map: "Open in Google Maps",
    mapTitle: "Map & directions",
    mapIframeTitle: "Map of Chestnut Hill Eco Resort in Hat Yai, Songkhla",
  },
  gallery: {
    eyebrow: "Hat Yai · Songkhla",
    title: "Gallery",
    lede: "The hillside in photographs: terrace seating, the forest lounge, cottages among the trees, Lae Pa Cafe, and the valley at dusk — about 26 km from Hat Yai.",
  },
  experiences: {
    eyebrow: "Hat Yai · Songkhla",
    title: "Nature & Experiences",
    lede: "Forest, kitchen, and a long view. Walks, a half-day Thai cooking class, the garden and orchard, and programs on the property.",
  },
  archive: {
    eyebrow: "Hat Yai · Songkhla",
    title: "Events",
    lede: "Courses, programs, and gatherings at Chestnut Hill Eco Resort.",
  },
};

const th = {
  nav: {
    home: "หน้าแรก",
    story: "เรื่องราว",
    accommodation: "ที่พัก",
    experiences: "ธรรมชาติและกิจกรรม",
    gallery: "แกลเลอรี",
    contact: "ที่ตั้งและติดต่อ",
    archive: "กิจกรรม",
  },
  skip: "ข้ามไปเนื้อหา",
  menu: "เมนู",
  close: "ปิด",
  langAria: "ภาษา",
  navAria: "เมนูหลัก",
  stayCta: "จองที่พัก",
  bookOnline: "จองออนไลน์",
  ctaNote: "เช็กอิน 14:00–18:00 น. · รวมอาหารเช้า",
  readMore: "อ่านเพิ่มเติม",
  photosTitle: "จากไหล่เขา",
  photosLead: "ระเบียง คาเฟ่กลางป่า กระท่อม เรือนยอดไม้ และวิวกว้างเหนือเนินเขา",
  photosCta: "เปิดแกลเลอรี",
  footerEvents: "กิจกรรม",
  footerRights: "บริษัท เชสท์นัท ฮิลล์ อีโค่ จำกัด",
  emptyBody: "รายละเอียดของหน้านี้จะเพิ่มในภายหลัง",
  groups: {
    here: "บนพื้นที่รีสอร์ท",
    published: "ร่วมกับเรา",
    publishedLead: "ช่องทางร่วมงานและเป็นส่วนหนึ่งของชุมชนบนไหล่เขา",
  },
  seo: {
    home: {
      title: "เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท | หาดใหญ่ สงขลา",
      description:
        "อีโค่รีสอร์ทสำหรับคนรักธรรมชาติในหาดใหญ่ ที่พักเงียบ อาหารออร์แกนิก สระหิน เดินป่า และพื้นที่สำหรับเวิร์กช็อปกับโปรแกรมกลุ่ม",
    },
    story: {
      title: "เรื่องราว",
      description:
        "จากค่ายเด็กกลางป่าปี 2539 สู่เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท — กิจการเพื่อสังคมใกล้หาดใหญ่ ที่เชื่อในชีวิตเรียบง่ายกับธรรมชาติ",
    },
    accommodation: {
      title: "ที่พัก",
      description:
        "บ้านพักหกหลังบนไหล่เขาใกล้หาดใหญ่ ต้นศาลา ต้นไทร ชะมวง ร่มกาว นาคบุตร และหอพักต้นส้ม รวมอาหารเช้า",
    },
    experiences: {
      title: "ธรรมชาติและกิจกรรม",
      description: "เดินป่า คลาสทำอาหารไทย สวนออร์แกนิก คาเฟ่แลผา และโปรแกรมที่อีโค่รีสอร์ทใกล้หาดใหญ่ สงขลา",
    },
    gallery: {
      title: "แกลเลอรี",
      description: "ภาพถ่ายเนินเขา ระเบียง คาเฟ่กลางป่า กระท่อม และวิวไหล่เขา ห่างจากหาดใหญ่ประมาณ 26 กม.",
    },
    contact: {
      title: "ที่ตั้งและติดต่อ",
      description: "174/3 หมู่ 5 บ้านทุ่งจัง ต.พะตง อ.หาดใหญ่ จ.สงขลา 90230 ห่างจากหาดใหญ่และสนามบินประมาณ 26 กม.",
    },
    archive: {
      title: "กิจกรรม",
      description: "หลักสูตร โปรแกรม และการชุมนุมที่เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท หาดใหญ่",
    },
  },
  home: {
    eyebrow: "หาดใหญ่ · สงขลา · ประเทศไทย",
    title: "ปรับสมดุลชีวิต\nกลับสู่ธรรมชาติ",
    lede: "ห่างจากความวุ่นวายของเมือง ความสงบและธรรมชาติของเชสท์นัท ฮิลล์ อีโค่ รีสอร์ท ทำให้ที่นี่เป็นจุดหมายพิเศษสำหรับการประชุม สัมมนา และเวิร์กช็อป",
    panel: "อีโค่รีสอร์ทสำหรับคนรักธรรมชาติในประเทศไทย",
    introTitle: "เชสท์นัท ฮิลล์ — อีโค่รีสอร์ทสำหรับคนรักธรรมชาติในประเทศไทย",
    paragraphs: [
      "ห่างจากความวุ่นวายของเมือง ความสงบและธรรมชาติของเชสท์นัท ฮิลล์ อีโค่ รีสอร์ท ทำให้ที่นี่เป็นจุดหมายพิเศษสำหรับการประชุม สัมมนา และเวิร์กช็อป",
      "ที่พักเรียบง่ายสะอาด อาหารออร์แกนิกจากสวน และพื้นที่ใช้สอยกว้าง ในราคาที่เข้าถึงได้",
      "ผู้มาเยือนจากทั่วโลกได้สัมผัสอัญมณีแห่งนี้ในหาดใหญ่ บางคนมาทำงาน วาดภาพ หรือเขียนหนังสือ บางคนมาพักผ่อนและเพลิดเพลินกับความสงบ กิจกรรมรวมถึงแช่น้ำในสระหินธรรมชาติ การรักษาแบบไทยดั้งเดิม นวด และเดินป่าพร้อมไกด์ กลุ่มยังใช้พื้นที่ของเราจัดโปรแกรมของตนเองได้",
      "ครอบครัวที่มีเด็กสามารถสนุกกับการเดินป่าสุดสัปดาห์ตามเส้นทางในป่า",
    ],
    facts: [
      { label: "จากหาดใหญ่", value: "ประมาณ 26 กม." },
      { label: "เช็กอิน", value: "14:00–18:00 น." },
      { label: "อาหารเช้า", value: "รวมแล้ว" },
    ],
    waysTitle: "มาอยู่ที่นี่ได้หลายแบบ",
    waysLead: "โปรแกรม ครัวของรีสอร์ท ห้องพักในป่า และทางขึ้นจากหาดใหญ่",
    ways: [
      {
        href: "/experiences",
        title: "กิจกรรมและโปรแกรม",
        text: "พื้นที่กว้าง ห้องพักกระท่อมและเกสต์เฮาส์ อาหารไทยและมังสวิรัติ และป่าธรรมชาติ เหมาะกับกลุ่มและผู้ที่ต้องการเข้าร่วมเวิร์กช็อป",
      },
      {
        href: "/accommodation",
        title: "ที่พัก",
        text: "บ้านพักหกหลังบนไหล่เขา ตั้งแต่กระท่อมเตียงเดียวถึงหอพักต้นส้ม เปิดตลอดปี มีไวไฟในพื้นที่ส่วนกลางและในห้องพัก",
      },
      {
        href: "/contact",
        title: "ทางขึ้น",
        text: "ห่างจากตัวเมืองหาดใหญ่และสนามบินประมาณ 26 กิโลเมตร มาได้ด้วยสองแถว รถที่นัดไว้ หรือขับรถเองผ่านทุ่งลุง",
      },
    ],
    closingTitle: "ขอจองที่พัก",
    closingText: "เขียนถึงรีสอร์ทพร้อมวันที่เข้าพัก หรือจองออนไลน์",
  },
  story: {
    eyebrow: "หาดใหญ่ · สงขลา",
    title: "เรื่องราว",
    lede: "เชสท์นัท ฮิลล์ | เรื่องราวของเราท่ามกลางธรรมชาติ",
    introTitle: "พื้นที่เล็ก ๆ ที่เริ่มต้นจากความตั้งใจ",
    introParagraphs: [
      "เชสท์นัท ฮิลล์ (Chestnut Hill) ไม่ได้เริ่มต้นจากการเป็นรีสอร์ท แต่เกิดจากความตั้งใจที่จะสร้างพื้นที่ให้ผู้คนได้ใกล้ชิดธรรมชาติ เรียนรู้การอยู่ร่วมกัน และค้นพบความสุขจากวิถีชีวิตที่เรียบง่าย",
      "เรื่องราวเริ่มต้นขึ้นในปี พ.ศ. 2539 เมื่อคุณปุก (Mrs. Vanerath Sornprasit) ชาวทุ่งลุง ได้ก่อตั้ง Stream Garden Retreat โดยได้รับแรงบันดาลใจจากคำสอนของกฤษณมูรติ และมีความตั้งใจที่จะสร้างสถานที่ท่ามกลางผืนป่าที่เปิดต้อนรับผู้คนจากหลากหลายถิ่นฐาน",
    ],
    sections: [
      {
        title: "จุดเริ่มต้นจากค่ายเด็กกลางป่า",
        subtitle: "พ.ศ. 2539 | Where It All Began",
        paragraphs: [
          "ในช่วงแรก Stream Garden Retreat เป็นค่ายสำหรับเด็ก ๆ จากทั้งหมู่บ้านใกล้เคียงและในเมือง เปิดโอกาสให้พวกเขาได้มาใช้ชีวิต เรียนรู้ และสัมผัสธรรมชาติร่วมกัน",
          "การเริ่มต้นในวันนั้นไม่ใช่เรื่องง่าย เพราะพื้นที่ยังไม่มีถนนเข้าถึง และไม่มีระบบน้ำดื่มที่พร้อมใช้งาน แต่ด้วยความตั้งใจที่จะสร้างพื้นที่แห่งการเรียนรู้และการอยู่ร่วมกับธรรมชาติ สถานที่แห่งนี้จึงค่อย ๆ เติบโตขึ้นทีละก้าว",
        ],
      },
      {
        title: "จาก Stream Garden Retreat สู่ Chestnut Hill",
        subtitle: "พ.ศ. 2559 | A New Chapter",
        paragraphs: [
          "หลังจากผ่านไป 20 ปี วันที่ 30 กรกฎาคม พ.ศ. 2559 Stream Garden Retreat ได้เปลี่ยนชื่อเป็น เชสท์นัท ฮิลล์ (Chestnut Hill) นับเป็นอีกก้าวสำคัญของการพัฒนาสถานที่แห่งนี้",
          "ในปีเดียวกัน เชสท์นัท ฮิลล์ เริ่มดำเนินงานในรูปแบบกิจการเพื่อสังคม ภายใต้ชื่อ บริษัท เชสท์นัท ฮิลล์ อีโค่ จำกัด โดยมีกองทุนสนับสนุนชุมชนชนบทในด้านการศึกษา สังคม และสิ่งแวดล้อม รวมถึงให้การสนับสนุนองค์กรปกครองส่วนท้องถิ่น",
          "แนวคิดนี้สะท้อนถึงความตั้งใจที่อยากให้การเติบโตของรีสอร์ทมีส่วนช่วยสร้างประโยชน์ให้แก่ชุมชนและสิ่งแวดล้อมโดยรอบ",
        ],
      },
      {
        title: "ผู้ก่อตั้งและแรงบันดาลใจ",
        subtitle: "Our Founder | คุณปุก",
        paragraphs: [
          "คุณปุก (Mrs. Vanerath Sornprasit) คือผู้ริเริ่มแนวคิดและวางรากฐานของสถานที่แห่งนี้ ด้วยความเชื่อในคุณค่าของการเรียนรู้ การใช้ชีวิตอย่างเรียบง่าย และความสัมพันธ์ระหว่างมนุษย์กับธรรมชาติ",
          "ปัจจุบัน แม้คุณปุกจะไม่ได้ดูแลการดำเนินงานประจำวันของรีสอร์ทโดยตรง แต่ยังคงใช้ชีวิตสลับระหว่างเชสท์นัท ฮิลล์ กรุงเทพฯ อินเดีย และยุโรป",
          "นอกจากนี้ คุณปุกยังเป็นผู้ก่อตั้งมูลนิธิ Anveekshana ซึ่งเป็นองค์กรไม่แสวงหาผลกำไรและไม่ยึดโยงกับศาสนาใด",
        ],
      },
      {
        title: "พักจากความวุ่นวาย แล้วกลับมาใกล้ชิดธรรมชาติ",
        subtitle: "Our Philosophy | A Simpler Way to Stay",
        paragraphs: [
          "ที่เชสท์นัท ฮิลล์ เราเชื่อว่าการพักผ่อนที่ดีไม่จำเป็นต้องเต็มไปด้วยสิ่งอำนวยความสะดวกมากมาย บางครั้งเพียงได้ใช้เวลาอยู่กับธรรมชาติ ก็เป็นความสุขที่เรียบง่ายและมีความหมาย",
          "ห้องพักของเราจึงไม่มีโทรศัพท์หรือโทรทัศน์ เพื่อให้ผู้เข้าพักได้พักจากความวุ่นวายในชีวิตประจำวัน และใช้เวลากับบรรยากาศรอบตัวอย่างเต็มที่",
          "ท่ามกลางความร่มรื่นของต้นไม้ ผู้เข้าพักจะได้สัมผัสเสียงนกร้อง เสียงลม และความสงบของผืนป่า พร้อมเดินสำรวจธรรมชาติรอบรีสอร์ท ซึ่งมีป้ายบอกชื่อและข้อมูลของต้นไม้ นก และสัตว์ป่าเขตร้อนที่พบในพื้นที่",
          "เราอยากให้ทุกช่วงเวลาที่นี่เป็นโอกาสในการพักผ่อน เรียนรู้ และกลับมาเชื่อมโยงกับธรรมชาติอีกครั้ง",
        ],
      },
      {
        title: "เติบโตไปพร้อมกับชุมชน",
        subtitle: "Our Community | Growing Together",
        paragraphs: [
          "นอกจากการดูแลธรรมชาติ เชสท์นัท ฮิลล์ ยังให้ความสำคัญกับผู้คนในชุมชน โดยเปิดโอกาสให้คนหนุ่มสาวในท้องถิ่นได้เข้ามาทำงานและเป็นส่วนหนึ่งของรีสอร์ท",
          "เราเชื่อว่าการท่องเที่ยวที่ดีไม่ใช่เพียงการสร้างประสบการณ์ที่น่าประทับใจให้แก่ผู้มาเยือน แต่ยังควรสร้างคุณค่าและโอกาสให้กับผู้คนในพื้นที่ด้วย",
        ],
      },
      {
        title: "สัมผัสความสงบในแบบเชสท์นัท ฮิลล์",
        subtitle: "A Stay Close to Nature Awaits",
        paragraphs: [
          "เชสท์นัท ฮิลล์ ตั้งอยู่ห่างจากตัวเมืองหาดใหญ่ประมาณ 30 นาที ท่ามกลางบรรยากาศธรรมชาติที่เงียบสงบ เหมาะสำหรับผู้ที่ต้องการหลีกหนีความเร่งรีบ และใช้เวลาอยู่กับตัวเองหรือคนสำคัญ",
          "จากค่ายเด็กเล็ก ๆ ในผืนป่าเมื่อปี พ.ศ. 2539 สู่สถานที่พักผ่อนในวันนี้ เชสท์นัท ฮิลล์ ยังคงรักษาความตั้งใจเดิมไว้ นั่นคือการเป็นพื้นที่ที่ผู้คน ธรรมชาติ และชุมชนสามารถอยู่ร่วมกันได้อย่างเกื้อกูล",
        ],
      },
    ],
    closingLead: "Come Closer to Nature. Discover a Simpler Way of Living.",
    closingText: "สัมผัสธรรมชาติอย่างใกล้ชิด และค้นพบความสุขจากการใช้ชีวิตที่เรียบง่าย",
    ecoTitle: "อยู่ร่วมกับไหล่เขา",
    ecoLead: "แนวทางของเชสท์นัท ฮิลล์ในการดูแลป่า สวน และการใช้ที่ดินในชีวิตประจำวัน",
  },
  stayHero: {
    eyebrow: "หาดใหญ่ · สงขลา",
    title: "ที่พัก",
    lede: "บ้านพักหกหลังบนไหล่เขา สอบถามอัตราค่าห้องปัจจุบันจากรีสอร์ท",
  },
  roomsTitle: "บ้านพัก",
  roomsLead: "บ้านพักหกหลังบนไหล่เขา สอบถามอัตราค่าห้องปัจจุบันจากรีสอร์ท",
  rooms: [
    {
      id: "tonsala",
      name: "บ้านต้นศาลา (Ban Tonsala)",
      paragraphs: [
        "กระท่อมไม้บนไหล่เขาด้านบน ใต้จุดชมพระอาทิตย์ขึ้น หน้าต่างหันไปทางทิศตะวันตกสู่ภูเขา เตียงเดี่ยว 1 เตียง มีห้องอาบน้ำและห้องน้ำ ระเบียงกว้างสำหรับเดินและฝึกโยคะ",
      ],
    },
    {
      id: "tonsai",
      name: "บ้านต้นไทร (Ban Tonsai)",
      paragraphs: [
        "กระท่อมไม้บนไหล่เขาด้านบน ระเบียงกว้างสำหรับอ่านหนังสือหรือพักผ่อน เตียงเดี่ยว 2 เตียงในห้องเดียว มีห้องอาบน้ำและห้องน้ำ",
      ],
    },
    {
      id: "shawmuwang",
      name: "บ้านชะมวง (Ban Shawmuwang)",
      paragraphs: [
        "กระท่อมไม้ยกพื้นบนไหล่เขาด้านล่าง ชั้นบนเป็นห้อง 1 และห้อง 2 ห้องละเตียงเดี่ยว มีห้องอาบน้ำและห้องน้ำประจำห้อง ระเบียงเล็ก ชั้นล่างมีเปลญวนและมุมอ่านหนังสือ",
      ],
    },
    {
      id: "romgaw",
      name: "บ้านร่มกาว (Ban Romgaw)",
      paragraphs: ["ที่พักหลังใหญ่ที่สุด มีห้องเตียงคู่ 5 ห้อง และหอพักเล็ก 2 ห้อง"],
      points: [
        "ห้อง 7 ชั้นล่าง หน้าต่างใหญ่สองบานหันสู่ภูเขา เตียงเดี่ยว 2 เตียง ห้องน้ำและฝักบัว 1 ชุด",
        "ห้อง 1 และ 4 ชั้นกลาง หน้าต่างใหญ่เห็นภูเขา ห้องละเตียงเดี่ยว 2 เตียง ห้องน้ำและฝักบัวประจำห้อง",
        "ห้อง 2 และ 3 ชั้นกลาง หน้าต่างใหญ่ ไม่เห็นภูเขา ห้องละเตียงเดี่ยว 2 เตียง ห้องน้ำและฝักบัวประจำห้อง",
        "ห้อง 5 และ 6 แบบหอพัก ห้องละเตียงเดี่ยว 6 เตียง ห้องน้ำและฝักบัว 2 ชุด หน้าต่างหันทิศตะวันออกสู่ภูเขา ระเบียงใหญ่เชื่อมสองห้อง",
      ],
    },
    {
      id: "nakbud",
      name: "บ้านนาคบุตร (Ban Nakbud)",
      paragraphs: [
        "อยู่บนลาดป่าด้านตะวันตก เป็นจุดที่มองวิวได้ไกลที่สุดของรีสอร์ท มีห้องเตียงคู่ติดกัน 2 ห้อง ผนังกระเบื้องหินทราย พื้นหินชนวน เพดานสูง และหน้าต่างมุ้งลวดบานเลื่อน เตียงหันออกหน้าต่างใหญ่ เห็นพระอาทิตย์ตกและท้องฟ้ายามค่ำคืน แต่ละห้องมีห้องน้ำในตัว พร้อมน้ำอุ่นและน้ำเย็น เป็นกระท่อมหลังเดียวที่มีเครื่องปรับอากาศ",
      ],
    },
    {
      id: "tonsom",
      name: "หอพักต้นส้ม (Tonsom Dormitory)",
      paragraphs: [
        "ห้องใหญ่เตียงเดี่ยว จุได้สูงสุด 19 เตียง ฝักบัวและห้องน้ำ 4 ชุดอยู่นอกห้อง ติดกับหอพัก หน้าต่างหันทิศตะวันตกสู่ภูเขา อยู่ชั้นล่างใต้หอกิจกรรม",
      ],
    },
  ],
  policiesTitle: "เงื่อนไขการเข้าพัก",
  policies: [
    {
      title: "เวลา",
      text: "เช็กอิน 14:00–18:00 น. เช็กเอาต์ 08:00–12:00 น. เช็กเอาต์ล่าช้าได้ถึง 13:00 น. ราคาห้องรวมอาหารเช้า ยังไม่รวมอาหารกลางวันและอาหารเย็น",
    },
    {
      title: "มัดจำและการยกเลิก",
      text: "ชำระ 50% เพื่อยืนยันการจองที่พัก การจองกลุ่มไม่คืนเงินหากยกเลิกภายใน 30 วันก่อนวันเข้าพัก การจองรายบุคคลยกเลิกได้ล่วงหน้า 7 วัน หากไม่ยกเลิก ไม่เลื่อน หรือไม่มาตามกำหนด จะคิดค่ายกเลิก 100%",
    },
    {
      title: "เด็กและเตียงเสริม",
      text: "ยินดีรับเด็กทุกคน เด็กอายุต่ำกว่า 5 ปี 1 คนพักฟรีเมื่อใช้เตียงที่มีอยู่ เตียงเสริม 500 บาทต่อคนต่อคืน รวมอาหารเช้า",
    },
    {
      title: "มัดจำกุญแจ",
      text: "มัดจำกุญแจ 500 บาทเมื่อมาถึง",
    },
    {
      title: "บัตรและค่าใช้จ่ายเพิ่ม",
      text: "รับบัตร Visa, MasterCard, JCB และ UnionPay บริการเสริมที่ขอเพิ่มอาจชำระแยกระหว่างเข้าพัก",
    },
    {
      title: "ข้อปฏิบัติ",
      text: "สูบบุหรี่ได้ที่ทางเข้ารีสอร์ท ไม่สูบในห้องพักและพื้นที่ส่วนกลางในอาคาร ไม่อนุญาตให้นำเครื่องดื่มแอลกอฮอล์เข้ามา ยกเว้นไวน์ และมีค่าคอร์กเกจ ไม่อนุญาตให้นำสัตว์เลี้ยงเข้าพัก",
    },
  ],
  bankTitle: "โอนเงิน",
  bankLead: "มัดจำ 50% ก่อนเข้าพัก",
  bank: [
    "บริษัท เชสท์นัท ฮิลล์ อีโค่ จำกัด",
    "ธนาคารกรุงเทพ สาขาเซ็นทรัลเฟสติวัล หาดใหญ่",
    "เลขที่บัญชี 641 7 07562 6 (ออมทรัพย์)",
    "Swift BKKBTHBK",
  ],
  ratesNote: "ราคาอาจเปลี่ยนแปลงได้ กรุณาสอบถามตารางราคาปัจจุบันจากรีสอร์ท",
  facilitiesTitle: "ครัว คาเฟ่ และเรื่องปฏิบัติ",
  facilities: [
    "เปิดตลอดปี มีไวไฟในพื้นที่ส่วนกลางและในห้องพัก ขอความร่วมมือไม่ดาวน์โหลดไฟล์ใหญ่หรือสตรีมสื่อ เพื่อให้ทุกคนใช้เน็ตได้คล่อง",
    "ครัวคลิฟเทอร์เรซ อาหารเช้า 8:00–9:30 น. ร้านอาหารทั้งวัน 10:00–19:00 น. มีอาหารไทยและนานาชาติ เป็นมิตรกับมังสวิรัติ มีบาร์น้ำผลไม้ ผู้มาแบบไปเช้าเย็นกลับจัดอาหารได้หากแจ้งล่วงหน้า",
    "น้ำดื่มเก็บจากน้ำฝน และผ่านระบบกรองทราย",
    "แลผาคาเฟ่มองภูเขา ขึ้นชื่อเรื่องกาแฟเอสเปรสโซออร์แกนิก เปิดทุกวัน 10:00–17:00 น.",
    "ห้องส่วนใหญ่ไม่มีเครื่องปรับอากาศ มีที่บ้านนาคบุตรซึ่งหันรับแดดตก และที่หอกิจกรรมสำหรับกลุ่มใหญ่",
    "หอประชุมให้เช่าสำหรับเวิร์กช็อป สัมมนา การประชุม และค่าย รองรับโปรแกรมกลางวันได้ถึง 150 คน และค้างคืนได้ถึง 60 คน",
    "พักเกิน 3 คืนจะเปลี่ยนผ้าปูที่นอน แม่บ้านทำความสะอาดประมาณ 10:00–15:00 น. มีการใช้ผ้าเช็ดตัวซ้ำและรีไซเคิลขวด",
    "ขอตู้ล็อกเกอร์ได้ที่แผนกต้อนรับ เอกสารสำคัญฝากตู้เซฟกลางได้ ฝากกระเป๋าได้ฟรีไม่เกิน 30 วัน กรุณาล็อกกระเป๋า รีสอร์ทไม่รับผิดชอบของสูญหายหรือเสียหาย",
    "ในห้องมีสบู่และแชมพู ในห้องไม่มีโทรศัพท์หรือทีวี สอบถามเมนูไทยและเมนูนานาชาติได้ที่แผนกต้อนรับ",
  ],
  ratesTitle: "ค่าบริการเสริม",
  rates: [
    ["น้ำขวด", "15 บาท/ขวด"],
    ["น้ำมะพร้าว", "40 บาท/ลูก"],
    ["เช่าเสื่อโยคะ", "40 บาท/วัน"],
    ["เช่าผ้าเช็ดตัว", "40 บาท/วัน"],
    ["ตู้ล็อกเกอร์ส่วนตัว", "50 บาท/วัน"],
    ["พิมพ์ขาวดำ A4", "5 บาท/หน้า"],
    ["ใช้คอมพิวเตอร์", "40 บาท/ชั่วโมง"],
    ["ซักผ้าไม่รีด", "60 บาท/กก. (2 วัน)"],
    ["ซักผ้าพร้อมรีด", "90 บาท/กก. (2 วัน)"],
    ["ซักด่วน", "เพิ่ม 40 บาท/กก. (1 วัน)"],
  ],
  form: {
    title: "ขอจองที่พัก",
    lead: "บอกวันที่เข้าพักและบ้านที่สนใจ รีสอร์ทจะตอบทางอีเมล",
    name: "ชื่อ",
    email: "อีเมล",
    phone: "โทรศัพท์",
    arrival: "วันเข้าพัก",
    departure: "วันออก",
    guests: "จำนวนผู้เข้าพัก",
    room: "บ้านพัก",
    roomAny: "ยังไม่แน่ใจ",
    message: "ข้อความ",
    submit: "ส่งคำขอเข้าพัก",
    hint: "ปุ่มนี้เปิดแอปอีเมล โดยจ่าหน้าถึงรีสอร์ท",
    need: "กรอกชื่อ อีเมล และข้อความสั้นๆ เพื่อให้เราตอบกลับได้",
    sent: "กำลังเปิดแอปอีเมลพร้อมคำขอนี้",
    subject: "Stay enquiry from Chestnut Hill website",
  },
  cookingFact: "950 บาทต่อคน ต้องมีอย่างน้อย 2 คน เวลา 9.30–12.00 น. หรือ 14.30–17.00 น.",
  contact: {
    eyebrow: "หาดใหญ่ · สงขลา",
    title: "ที่ตั้งและติดต่อ",
    lede: "หาดใหญ่ เหนือบ้านทุ่งจัง ให้ที่อยู่นี้กับคนขับแท็กซี่เมื่อถึงหาดใหญ่",
    detailsTitle: "ที่อยู่และโทรศัพท์",
    localName: "คนในพื้นที่เรียกรีสอร์ทว่า สวนสายน้ำ",
    distanceTitle: "ระยะทาง",
    distances: [
      "ห่างจากใจกลางหาดใหญ่และสนามบินนานาชาติหาดใหญ่ประมาณ 26 กิโลเมตร",
      "หาดใหญ่ถึงทุ่งลุงประมาณ 18 กิโลเมตร",
      "ทุ่งลุงถึงรีสอร์ทประมาณ 8 กิโลเมตร",
    ],
    arriveTitle: "จากหาดใหญ่ถึงรีสอร์ท",
    options: [
      {
        title: "รถที่นัดไว้",
        text: "นัดล่วงหน้าเท่านั้น รับหรือส่งจากสนามบิน สถานีรถไฟ หรือในเมือง 700 บาท เหมาะกับผู้ใหญ่ประมาณ 3 คน",
      },
      {
        title: "สองแถว แล้วต่อมอเตอร์ไซค์รับจ้าง",
        text: "จากสถานีรถโดยสารหอนาฬิกาใจกลางหาดใหญ่ นั่งสองแถวสีเลือดหมูหรือรถประจำทางไปสะเดา ลงที่ทุ่งลุง (ประมาณ 20 บาท) แล้วต่อมอเตอร์ไซค์รับจ้างถึงรีสอร์ททางบ้านทุ่งจัง (ประมาณ 130 บาท)",
      },
      {
        title: "ขับรถเอง",
        text: "จากหาดใหญ่ไปทางสะเดาและด่านมาเลเซีย ตามถนนกาญจนวนิช ถึงทุ่งลุงประมาณ 18 กม. เลี้ยวซ้ายเข้าบ้านทุ่งจังที่สถานีตำรวจทุ่งลุง (ใกล้อู่ซูซูกิ) แล้วตามป้ายอีกประมาณ 8 กม.",
      },
    ],
    map: "เปิดใน Google Maps",
    mapTitle: "แผนที่และเส้นทาง",
    mapIframeTitle: "แผนที่เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท หาดใหญ่ สงขลา",
  },
  gallery: {
    eyebrow: "หาดใหญ่ · สงขลา",
    title: "แกลเลอรี",
    lede: "ไหล่เขาในภาพถ่าย ระเบียง พื้นที่กลางป่า กระท่อมในดงไม้ แลผาคาเฟ่ และหุบเขาตอนเย็น ห่างจากหาดใหญ่ประมาณ 26 กิโลเมตร",
  },
  experiences: {
    eyebrow: "หาดใหญ่ · สงขลา",
    title: "ธรรมชาติและกิจกรรม",
    lede: "ป่า ครัว และวิวกว้าง ทางเดินป่า คลาสทำอาหารไทยครึ่งวัน สวนและสวนผลไม้ และโปรแกรมบนพื้นที่รีสอร์ท",
  },
  archive: {
    eyebrow: "หาดใหญ่ · สงขลา",
    title: "กิจกรรม",
    lede: "หลักสูตร โปรแกรม และการชุมนุมที่เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท",
  },
};

export const copy = { en, th } satisfies Record<Lang, typeof en>;

export const roomValues = [
  ["Ban Tonsala", "Ban Tonsala", "บ้านต้นศาลา"],
  ["Ban Tonsai", "Ban Tonsai", "บ้านต้นไทร"],
  ["Ban Shawmuwang", "Ban Shawmuwang", "บ้านชะมวง"],
  ["Ban Romgaw", "Ban Romgaw", "บ้านร่มกาว"],
  ["Ban Nakbud", "Ban Nakbud", "บ้านนาคบุตร"],
  ["Tonsom Dormitory", "Tonsom Dormitory", "หอพักต้นส้ม"],
] as const;

