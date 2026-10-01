export const SITE_CONFIG = {
  name: "Azza.id Travel and Tours",
  url: "https://azza.id",
  whatsapp: "6285591190763",
  phone: "0855 9119 0763",
  email: "",
  address: "",
  instagram: "https://www.instagram.com/azzatravelofficialid/",
  facebook: "",
  tiktok: "https://www.tiktok.com/@azzatravelid"
} as const;
export const whatsappUrl = (message: string) => `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
export const assetUrl = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
