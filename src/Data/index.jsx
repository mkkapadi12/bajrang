export const sortOptions = [
  { name: "Most Popular", value: "most", href: "#", current: true },
  { name: "Best Rating", value: "rating", href: "#", current: false },
  { name: "Newest", value: "new", href: "#", current: false },
  { name: "A to Z", value: "a-z", href: "#", current: false },
  { name: "Z to A", value: "z-a", href: "#", current: false },
  { name: "Price: Low to High", value: "lowest", href: "#", current: false },
  { name: "Price: High to Low", value: "highest", href: "#", current: false },
];

export const subCategories = [
  { name: "Hodi", href: "#" },
  { name: "Fancy", href: "#" },
  { name: "Jaripatty", href: "#" },
  { name: "Kalktta Topa", href: "#" },
  { name: "Spring", href: "#" },
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "all", label: "ALL", checked: true },
      { value: "#FFF", label: "White", checked: false },
      { value: "#000000", label: "Black", checked: false },
      { value: "#A70F2E", label: "Madder", checked: false },
      { value: "#080812", label: "Rich black", checked: false },
      { value: "#152131", label: "Oxford blue", checked: false },
      { value: "#C16D59", label: "Brown sugar", checked: false },
      { value: "#5A644D", label: "Ebony", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "latkan", label: "Latkan", checked: true },
      // { value: "sale", label: "Sale", checked: false },
      // { value: "travel", label: "Travel", checked: false },
      // { value: "organization", label: "Organization", checked: false },
      // { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: true },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: false },
    ],
  },
];
