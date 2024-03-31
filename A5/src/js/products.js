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
    imageUrl: ".https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cdw.ca%2Fproduct%2Fmsi-nvidia-geforce-rtx-3090-graphic-card-24-gb-gddr6x%2F6433110&psig=AOvVaw3W8Jozy9jdeFoxM8JtulDd&ust=1711997566159000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi9iIiWn4UDFQAAAAAdAAAAABAI"
  },

  {
    id: "P2",
    title: "NVIDIA GeForce RTX 3080",
    description:
      "GeForce RTX 30 SeriesBoost Clock Speed: 1905 MHz GPU Memory Size: 10 GB Cooling System: TRI FROZR 2S.",
    price: 299.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FGraphics-DisplayPort-Bearings-Military-Grade-Certification%2Fdp%2FB099ZC8H3G&psig=AOvVaw2szeSjmphId39qO40UceFN&ust=1711997517401000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCZ6fCVn4UDFQAAAAAdAAAAABAE"
  },

  {
    id: "P3",
    title: "NVIDIA GeForce RTX 3070",
    description:
      "GeForce RTX 30 SeriesBoost Clock Speed: 1505 MHz GPU Memory Size: 8 GB Cooling System: TRI FROZR 2S.",
    price: 249.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FGraphics-DisplayPort-Bearings-Military-Grade-Certification%2Fdp%2FB099ZC8H3G&psig=AOvVaw2szeSjmphId39qO40UceFN&ust=1711997517401000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCZ6fCVn4UDFQAAAAAdAAAAABAE"
  },

  {
    id: "P4",
    title: "NVIDIA GeForce RTX 3060",
    description:
      "GeForce RTX 30 SeriesBoost Clock Speed: 1777 MHz GPU Memory Size: 12GB Cooling System: Fan.",
    price: 199.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FGigabyte-GeForce-Graphics-WINDFORCE-GV-N3060GAMING%2Fdp%2FB0C88SM4LK&psig=AOvVaw0rCZYUPKqyIWbkLOqFPTzE&ust=1711997449142000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCYx9CVn4UDFQAAAAAdAAAAABAT"
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
    id: "P6",
    title: "NVIDIA GeForce RTX 3040",
    description:
      "GeForce RTX 30 Series Boost Clock Speed: 1205 MHz GPU Memory Size: 8 GB Cooling System: Fan.",
    price: 119.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FASUS-NVIDIA-GeForce-Gaming-Graphics%2Fdp%2FB09R9L6J71&psig=AOvVaw0tmRmV4MU1qLkevsAvCCMO&ust=1711997304353000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjsoouVn4UDFQAAAAAdAAAAABAR"
  },

  {
    id: "P7",
    title: "NVIDIA GeForce RTX 4090",
    description:
      "GeForce RTX 40 Series: The GeForce RTX 40 Series, including the RTX 4080, offers high performance for demanding games and applications",
    price: 1399.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FMSI-GeForce-4090-Gaming-Graphics%2Fdp%2FB09YCLG5PB&psig=AOvVaw3CZHPc1HVTRVDrA0J_qchI&ust=1711997650103000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDtirCWn4UDFQAAAAAdAAAAABAI"
  },

  {
    id: "P8",
    title: "NVIDIA GeForce RTX 4080",
    description:
      "GeForce RTX 40 Series:Boost Clock Speed: 2.54 GHz GPU Memory Size: 8 GB Cooling System: Fan",
    price: 599.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FMSI-Gaming-GDDR6X-Express-Video%2Fdp%2FB0BL668N1X&psig=AOvVaw1RKPMu-twiIuohuWPSOwK_&ust=1711997669466000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID5y7qWn4UDFQAAAAAdAAAAABAE"
  },

  {
    id: "P9",
    title: "NVIDIA GeForce RTX 4070",
    description:
      "GeForce RTX 40 Series: Boost Clock Speed: 2.48 GHz GPU Memory Size: 12 GB Cooling System: Fan",
    price: 1399.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cdw.ca%2Fproduct%2Fpny-geforce-rtx-4070-12gb-verto-dual-fan-edition-graphics-card-geforc%2F7528772&psig=AOvVaw2nmtoRW3sexjuV9V0v_IP-&ust=1711997689794000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOD6pcOWn4UDFQAAAAAdAAAAABAP"
  },

  {
    id: "P10",
    title: "Alienware 34 QD-OLED (AW3423DWF)",
    description:
      "Screen size: 34-inchPanel type: OLEDAspect ratio: 21:9Resolution: 3440 x 1440Response time: 0.1 msRefresh rate: 165HzBrightness (peak): 1000 nitsRefresh rate technology: AMD FreeSync Premium Pro",
    price: 1299.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dwf/media-gallery/monitor-alienware-aw3423dwf-black-gallery-10.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=566&qlt=100,1&resMode=sharp2&size=566,476&chrss=full"
  },

  {
    id: "P11",
    title: "LG UltraGear 27GR93U",
    description:
      "Screen size: 27-inchPanel type: IPSAspect ratio: 16:9Resolution: 3840 x 2160Response time: 1msRefresh rate: 144HzBrightness (peak): 400 nitsRefresh rate technology: G-Sync Compatible, FreeSync Premium",
    price: 799.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "https://media.us.lg.com/transform/b21cc38d-b369-4802-9dc4-188827f29155/Monitor-UltraGear_27GR93U-B_KV_features_900x600"
  },

  {
    id: "P12",
    title: "Samsung Odyssey Neo G9 G95NC",
    description:
      "Screen size: 57-inchPanel type: VAAspect ratio: 32:9Resolution: 7680 x 2160Response time: 1 msRefresh rate: 240HzBrightness (peak): 1000 nitsRefresh rate technology: FreeSync Premium Pro",
    price: 2698.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/ca/ls57cg952nnxza/gallery/ca-odyssey-neo-g9-g95nc-ls57cg952nnxza-537798071?$730_584_PNG$"
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
    id: "P14",
    title: "Asus ROG Strix Scar 16 (2023)",
    description:
      "The best gaming laptop overall. The Asus ROG Strix Scar 16 is the best RTX 40-Series gaming laptop we've tested so far, making it the best rig on the shelves.",
    price: 2130,
    discontinued: false,
    categories: ["c3"],
    imageUrl: ".https://www.google.com/url?sa=i&url=https%3A%2F%2Frog.asus.com%2Farticles%2Frog-gaming-laptops%2Fleave-your-opponents-in-the-dust-with-the-brand-new-2023-rog-strix-laptop-lineup%2F&psig=AOvVaw3rqMxmAYLgwFmbrIns5NVi&ust=1711997845855000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPD1s42Xn4UDFQAAAAAdAAAAABAJ"
  },

  {
    id: "P15",
    title: "Razer Blade 15 (2022)",
    description:
      "The best 15.6-inch gaming laptop Impressive performance, a sleek slimline chassis, and a stunning display make the Razer Blade 15 the best 15-incher we've tested yet. It's pricey but well worth it if you're investing.",
    price: 1586,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pcgamer.com%2Frazer-blade-15-review%2F&psig=AOvVaw04eLelGXHxOoO9eN0lJZ5_&ust=1711997871072000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCdt5mXn4UDFQAAAAAdAAAAABAM"
  },

  {
    id: "P16",
    title: "Alienware M18",
    description:
      "The best 18-inch gaming laptop. The Scar 18 is the most powerful machine we've tested, but the cheaper configurations of the Alienware M18 make it the best 18-incher overall.",
    price: 3999.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: ".https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m18-amd/media-gallery/amd-hd-perkey-dual-display-port-black/notebook-alienware-m18-amd-hd-perkey-dual-display-port-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=625&qlt=100,1&resMode=sharp2&size=625,402&chrss=full"
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
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FApple-2023-MacBook-Laptop-chip%2Fdp%2FB0C76D4RWJ&psig=AOvVaw24H5i_K-KnjnP3WMDzPQd7&ust=1711998025501000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOilj-OXn4UDFQAAAAAdAAAAABAE"
  },

  {
    id: "P19",
    title: "Macbook Pro 14-in (M3, 2023)",
    description:
      "M3 chip 8-core CPU with 4 performance cores and 4 efficiency cores 10-core GPU Hardware-accelerated ray tracing 16-core Neural Engine 100GB/s memory bandwidth",
    price: 2099,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FApple-MacBook-Laptop-8%25E2%2580%2591core-10%25E2%2580%2591core%2Fdp%2FB0CM5JV268&psig=AOvVaw1IrYUI4Nn-RN6wBxGOvDJj&ust=1711998041338000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj9xeqXn4UDFQAAAAAdAAAAABAE"
  },

  {
    id: "P20",
    title: "Macbook Pro 16-in (M3, 2023)",
    description:
      "M3 Pro chip 12-core CPU with 6 performance cores and 6 efficiency cores 18-core GPU Hardware-accelerated ray tracing 16-core Neural Engine 150GB/s memory bandwidth",
    price: 3299,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fca%2Fnewsroom%2F2023%2F10%2Fapple-unveils-new-macbook-pro-featuring-m3-chips%2F&psig=AOvVaw2tiBGlXSV-xPVH9I9iCRk2&ust=1711998053788000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjItfCXn4UDFQAAAAAdAAAAABAE"
  }
];
