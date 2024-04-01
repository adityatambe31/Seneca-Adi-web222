/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "NVIDIA GeForce RTX 3090",
    description:
      "GeForce RTX 30 Series Boost Clock Speed: 1905 MHz GPU Memory Size: 10 GB Cooling System: TRI FROZR 2S.",
    price: 379.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://webobjects2.cdw.com/is/image/CDW/6433110?$product-detail$"
  },

  {
    id: "P2",
    title: "NVIDIA GeForce RTX 3080",
    description:
      "GeForce RTX 30 SeriesBoost Clock Speed: 1905 MHz GPU Memory Size: 10 GB Cooling System: TRI FROZR 2S.",
    price: 299.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://m.media-amazon.com/images/I/816BVTpUdKL.__AC_SX300_SY300_QL70_ML2_.jpg"
  },

  {
    id: "P3",
    title: "NVIDIA GeForce RTX 3070",
    description:
      "GeForce RTX 30 SeriesBoost Clock Speed: 1505 MHz GPU Memory Size: 8 GB Cooling System: TRI FROZR 2S.",
    price: 249.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://m.media-amazon.com/images/I/816BVTpUdKL._AC_SX679_.jpg"
  },

  {
    id: "P4",
    title: "NVIDIA GeForce RTX 3060",
    description:
      "GeForce RTX 30 SeriesBoost Clock Speed: 1777 MHz GPU Memory Size: 12GB Cooling System: Fan.",
    price: 199.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://m.media-amazon.com/images/I/61nCY30R4iL.__AC_SY300_SX300_QL70_ML2_.jpg"
  },

  {
    id: "P5",
    title: "NVIDIA GeForce RTX 3050",
    description:
      "GeForce RTX 30 SeriesBoost Clock Speed: 1305 MHz GPU Memory Size: 8 GB Cooling System: TRI FROZR 2S.",
    price: 149.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://m.media-amazon.com/images/I/714+DsKIF4L._AC_UF894,1000_QL80_.jpg"
  },

  {
    id: "P7",
    title: "NVIDIA GeForce RTX 4090",
    description:
      "GeForce RTX 40 Series: The GeForce RTX 40 Series, including the RTX 4080, offers high performance for demanding games and applications",
    price: 1399.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://m.media-amazon.com/images/I/81KR0fO8WgL._AC_SX679_.jpg"
  },

  {
    id: "P8",
    title: "NVIDIA GeForce RTX 4080",
    description:
      "GeForce RTX 40 Series:Boost Clock Speed: 2.54 GHz GPU Memory Size: 8 GB Cooling System: Fan",
    price: 599.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://m.media-amazon.com/images/I/71kWtif0f-L.__AC_SY300_SX300_QL70_ML2_.jpg"
  },

  {
    id: "P9",
    title: "NVIDIA GeForce RTX 4070",
    description:
      "GeForce RTX 40 Series: Boost Clock Speed: 2.48 GHz GPU Memory Size: 12 GB Cooling System: Fan",
    price: 1399.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://webobjects2.cdw.com/is/image/CDW/7528772?$product-detail$"
  },

  {
    id: "P10",
    title: "Alienware 34 QD-OLED (AW3423DWF)",
    description:
      "Screen size: 34-inchPanel type: OLEDAspect ratio: 21:9Resolution: 3440 x 1440Response time: 0.1 msRefresh rate: 165HzBrightness (peak): 1000 nitsRefresh rate technology: AMD FreeSync Premium Pro",
    price: 1299.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dwf/media-gallery/monitor-alienware-aw3423dwf-black-gallery-10.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=566&qlt=100,1&resMode=sharp2&size=566,476&chrss=full"
  },

  {
    id: "P11",
    title: "LG UltraGear 27GR93U",
    description:
      "Screen size: 27-inchPanel type: IPSAspect ratio: 16:9Resolution: 3840 x 2160Response time: 1msRefresh rate: 144HzBrightness (peak): 400 nitsRefresh rate technology: G-Sync Compatible, FreeSync Premium",
    price: 799.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl:
      "https://media.us.lg.com/transform/b21cc38d-b369-4802-9dc4-188827f29155/Monitor-UltraGear_27GR93U-B_KV_features_900x600"
  },

  {
    id: "P12",
    title: "Samsung Odyssey Neo G9 G95NC",
    description:
      "Screen size: 57-inchPanel type: VAAspect ratio: 32:9Resolution: 7680 x 2160Response time: 1 msRefresh rate: 240HzBrightness (peak): 1000 nitsRefresh rate technology: FreeSync Premium Pro",
    price: 2698.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl:
      "https://images.samsung.com/is/image/samsung/p6pim/ca/ls57cg952nnxza/gallery/ca-odyssey-neo-g9-g95nc-ls57cg952nnxza-537798071?$730_584_PNG$"
  },

  {
    id: "P13",
    title: "RAZER Blade 15 (2023)",
    description:
      "Screen size: 41.5-inchPanel type: OLEDAspect ratio: 16:9Resolution: 3840 x 2160Response time: 0.1ms MPRT (2ms GtG)Refresh rate: 138HzBrightness (peak): 700 nitsRefresh rate technology: Nvidia G-Sync Compatible",
    price: 2499.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "https://m.media-amazon.com/images/I/81e73VekkyL._AC_UF894,1000_QL80_.jpg"
  },

  {
    id: "P15",
    title: "Razer Blade 15 (2022)",
    description:
      "The best 15.6-inch gaming laptop Impressive performance, a sleek slimline chassis, and a stunning display make the Razer Blade 15 the best 15-incher we've tested yet. It's pricey but well worth it if you're investing.",
    price: 1586,
    discontinued: false,
    categories: ["c3"],
    imageUrl:
      "https://assets2.razerzone.com/images/pnx.assets/a1ee4c5a780a401444be898fe93ade69/thumbnail-blade15-new-model.webp"
  },

  {
    id: "P16",
    title: "Alienware M18",
    description:
      "The best 18-inch gaming laptop. The Scar 18 is the most powerful machine we've tested, but the cheaper configurations of the Alienware M18 make it the best 18-incher overall.",
    price: 3999.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m18-amd/media-gallery/amd-hd-perkey-dual-display-port-black/notebook-alienware-m18-amd-hd-perkey-dual-display-port-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=625&qlt=100,1&resMode=sharp2&size=625,402&chrss=full"
  },

  {
    id: "P17",
    title: "Asus ROG Strix Scar 18 (2023)",
    description:
      "The most powerful we've tested. The Asus ROG Strix Scar 18 has consistently hit the highest numbers in our in-game and industry benchmark tests. It's an 18-inch beast, but if you're going for all-out performance it's the best we've tried. ",
    price: 2999.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "https://www.asus.com/ca-en/site/gaming/assets/images/rog/Strix-Scar-2023/kv-3.webp"
  },

  {
    id: "P18",
    title: "Macbook Air 15-in (M2, 2023)",
    description:
      "System on Chip (SoC) M2 chip 8-core CPU with 4 performance cores and 4 efficiency cores 10-core GPU 16-core Neural Engine 100GB/s memory bandwidth",
    price: 1000,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "https://m.media-amazon.com/images/I/81Fm0tRFdHL._AC_SX679_.jpg"
  },

  {
    id: "P19",
    title: "Macbook Pro 14-in (M3, 2023)",
    description:
      "M3 chip 8-core CPU with 4 performance cores and 4 efficiency cores 10-core GPU Hardware-accelerated ray tracing 16-core Neural Engine 100GB/s memory bandwidth",
    price: 2099,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SX679_.jpg"
  },

  {
    id: "P20",
    title: "Macbook Pro 16-in (M3, 2023)",
    description:
      "M3 Pro chip 12-core CPU with 6 performance cores and 6 efficiency cores 18-core GPU Hardware-accelerated ray tracing 16-core Neural Engine 150GB/s memory bandwidth",
    price: 3299,
    discontinued: false,
    categories: ["c4"],
    imageUrl:
      "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.medium_2x.jpg"
  }
];
