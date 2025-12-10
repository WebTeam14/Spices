import { Product } from "@/types/product";

import whitePepperPowderImg from "@/assets/WhitePaperPowder.png";
import whitePepperCoarsePowderImg from "@/assets/WhitePaperCoarsePowder.png";
import blackPepperPowderImg from "@/assets/PaperPowder.png";
import blackPepperCoarsePowderImg from "@/assets/BlackPepperCoarsePowder.png";
import blackPepperCoarseImg from "@/assets/BlackPepperCoarse.png";
import superJumboCrackImg from "@/assets/SuperJumboCrack.png";
import jumboPepperCrackImg from "@/assets/JumboPepperCrack.png";
import mediumPepperCrackBikaneriImg from "@/assets/MediumPepperCrackBikaneri.png";
import mediumPepperCrackImg from "@/assets/MediumPepperCrack.png";
import mediumPepperSkinTurfalImg from "@/assets/MediumPepperSkin-Turfal.png";
import smallPepperSkinTurfalImg from "@/assets/SmallPepperSkin-Turfal.png";
import smallestPepperSkinTurfalImg from "@/assets/SmallestPapperSkin-Turfal.png";
import mediumPepperSkinBikaneriImg from "@/assets/MediumPepperSkinBikaneri.png";
import smallPepperSkinTurfalBikaneriImg from "@/assets/SmallPepperSkin-TurfalBikaneri.png";

export const products: Product[] = [
  {
    id: "1",
    name: "White Pepper Powder",
    price: 30,                                                       
    
    description: `White Pepper Powder

Size: Below 40 Mesh / 400 Microns

Manufactured from: Best Indian TGEB Quality Black Pepper, without use of any water or chemical process and finely grounded.

Key Features
- High Volatile Oil & Piperine Content
- Minimum Moisture present so better shelf life
- Absence of foul smell / odour
- No adulteration whatsoever.`,
    fullDescription:
      "Finely ground white pepper powder made from premium Indian TGEB black pepper, processed without water or chemicals for maximum aroma and shelf life.",
    image: whitePepperPowderImg,
    category: "White Pepper",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "2",
    name: "White Pepper Coarse Powder",
    price: 30,
    
    description: `White Pepper Coarse Powder

Size: Below 20 Mesh / 841 Microns

Manufactured from: Best Indian TGEB Quality Black Pepper, without use of any water or chemical process and finely grounded.

Key Features
- High Volatile Oil & Piperine Content
- Minimum Moisture present so better shelf life
- Absence of foul smell / odour
- No adulteration whatsoever.`,
    fullDescription:
      "Coarse ground white pepper with a bold texture and strong aroma, ideal for visible pepper specs in spice blends and food products.",
    image: whitePepperCoarsePowderImg,
    category: "White Pepper",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "3",
    name: "Black Pepper Powder",
    price: 28,
    
    description: `Black Pepper Powder

Size: Below 40 Mesh / 400 Microns

Manufactured from: Best Quality MG1 550–580 GL Black Pepper, finely grounded.

Key Features
- Good Volatile Oil & Piperine
- No adulteration whatsoever.`,
    fullDescription:
      "Fine black pepper powder made from high-grade MG1 550–580 GL pepper, delivering strong pungency and authentic flavour.",
    image: blackPepperPowderImg,
    category: "Black Pepper",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "4",
    name: "Black Pepper Coarse Powder",
    price: 28,
    
    description: `Black Pepper Coarse Powder

Size: Below 20 Mesh / 841 Microns

Manufactured from: Best Quality MG1 550–580 GL Black Pepper, finely grounded.

Key Features
- Good Volatile Oil & Piperine Content
- No adulteration whatsoever
- Natural authentic flavour.`,
    fullDescription:
      "Coarse black pepper powder with strong aroma and authentic flavour, perfect for visible coarse texture in seasonings and snacks.",
    image: blackPepperCoarsePowderImg,
    category: "Black Pepper",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "5",
    name: "Black Pepper Coarse",
    price: 28,
    
    description: `Black Pepper Coarse

Size: Below 20 Mesh / 841 Microns and Above 40 Mesh / 400 Microns

Manufactured from: Best Quality MG1 550–580 GL Black Pepper, finely grounded.

Key Features
- Material is coarse & has a rough texture, fine particles are missing
- Good Volatile Oil & Piperine Content
- Natural authentic flavour
- No adulteration whatsoever.`,
    fullDescription:
      "Coarse cracked black pepper with rough texture and no fine dust, ideal where a rustic look and strong flavour are desired.",
    image: blackPepperCoarseImg,
    category: "Black Pepper",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "6",
    name: "Super Jumbo Crack",
    price: 26,
    
    description: `Super Jumbo Crack

Size: 2–3 pcs of Black Pepper

Skin/Turfal: Mainly not removed and is present in cracked form.

Ideally used in machine-made papads, which are made in Teflon rolls papad machines.

Pack Available: 25kg & 50kg HDPE / Gunny bags.`,
    fullDescription:
      "Very large cracked black pepper pieces with skin mostly intact, specially designed for machine-made papads and similar applications.",
    image: superJumboCrackImg,
    category: "Pepper Cracks",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "7",
    name: "Jumbo Pepper Crack",
    price: 25,
    
    description: `Jumbo Pepper Crack

Size: 4–5 pcs of Black Pepper

Skin/Turfal: Mainly not removed and is present in cracked form.

Ideally used in machine-made papads, which are made in Teflon rolls papad machines.

Pack Available: 25kg & 50kg HDPE / Gunny bags.`,
    fullDescription:
      "Large jumbo cracked pepper designed for machine-made papads, offering bold appearance and flavour retention.",
    image: jumboPepperCrackImg,
    category: "Pepper Cracks",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "8",
    name: "Medium Pepper Crack Bikaneri",
    price: 24,
    
    description: `Medium Pepper Crack Bikaneri

Size: 6–7 pcs of Black Pepper

Skin/Turfal: Not removed and present in major cracked form, but there is no loose skin or turfal.

Ideally used in hand-made papads.

Pack Available: 25kg & 50kg HDPE / Gunny bags.`,
    fullDescription:
      "Medium-sized Bikaneri-style pepper cracks with skin retained but without loose flakes, ideal for traditional hand-made papads.",
    image: mediumPepperCrackBikaneriImg,
    category: "Pepper Cracks",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "9",
    name: "Medium Pepper Crack",
    price: 24,
    
    description: `Medium Pepper Crack

Size: 6–7 pcs of Black Pepper

Skin/Turfal: Purposely removed and not present in major cracked form; there is no loose skin or turfal.

Ideally used in hand-made papads.

Pack Available: 25kg & 50kg HDPE / Gunny bags.`,
    fullDescription:
      "Clean medium pepper cracks with skin removed, giving a neat appearance and consistent flavour in hand-made papads.",
    image: mediumPepperCrackImg,
    category: "Pepper Cracks",
    weight: "25–50kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "10",
    name: "Medium Pepper Skin/Turfal",
    price: 20,
    
    description: `Medium Pepper Skin/Turfal

Size: Medium (almost one-third size of Black Pepper)

Extracted from: BOLD 600GI grade Black Pepper.

Ideally used in machine-made papads and hand-made papads.

Pack Available: 30kg to 40kg HDPE bags.`,
    fullDescription:
      "Medium-sized pepper skin/turfal extracted from bold 600GI grade pepper, suitable for both machine-made and hand-made papads.",
    image: mediumPepperSkinTurfalImg,
    category: "Pepper Skin",
    weight: "30–40kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "11",
    name: "Small Pepper Skin/Turfal",
    price: 19,
    
    description: `Small Pepper Skin/Turfal

Size: Small (almost one-fourth size of Black Pepper)

Extracted from: BOLD 600GI grade Black Pepper.

Ideally used in hand-made papads.

Pack Available: 30kg to 40kg HDPE bags.`,
    fullDescription:
      "Small-sized pepper skin/turfal pieces suitable for hand-made papads where fine visual distribution is needed.",
    image: smallPepperSkinTurfalImg,
    category: "Pepper Skin",
    weight: "30–40kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "12",
    name: "Smallest Pepper Skin/Turfal",
    price: 18,
    
    description: `Smallest Pepper Skin/Turfal

Size: Very small

Extracted from: BOLD 600GI grade Black Pepper.

Ideally used in machine-made disco papads.

Pack Available: 30kg to 40kg HDPE bags.`,
    fullDescription:
      "Very fine pepper skin/turfal ideal for machine-made disco papads, giving even flavour and speckling.",
    image: smallestPepperSkinTurfalImg,
    category: "Pepper Skin",
    weight: "30–40kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "13",
    name: "Medium Pepper Skin Bikaneri",
    price: 21,
    
    description: `Medium Pepper Skin Bikaneri

Size: Medium (almost one-third size of Black Pepper)

Extracted from: BOLD 600GI grade Black Pepper; certain portion of crack is present in skin.

Ideally used in machine-made papads and hand-made papads.

Pack Available: 30kg to 40kg HDPE bags.`,
    fullDescription:
      "Bikaneri-style medium pepper skin with some crack portion, ideal for both machine and hand-made papads.",
    image: mediumPepperSkinBikaneriImg,
    category: "Pepper Skin",
    weight: "30–40kg",
    origin: "India",
    inStock: true,
  },
  {
    id: "14",
    name: "Small Pepper Skin/Turfal Bikaneri",
    price: 20,
    
    description: `Small Pepper Skin/Turfal Bikaneri

Size: Small (almost one-fourth size of Black Pepper)

Extracted from: BOLD 600GI grade Black Pepper; certain portion of crack is present in skin.

Ideally used in hand-made papads.

Pack Available: 30kg to 40kg HDPE bags.`,
    fullDescription:
      "Small Bikaneri-style pepper skin/turfal with some crack content, crafted for traditional hand-made papads.",
    image: smallPepperSkinTurfalBikaneriImg,
    category: "Pepper Skin",
    weight: "30–40kg",
    origin: "India",
    inStock: true,
  },
];
