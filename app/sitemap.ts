import type { MetadataRoute } from "next"; import { packages } from "@/data/packages";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["","/paket-umrah","/tentang-kami","/galeri","/faq","/kontak"].map(url=>({url:`https://azza.id${url}`,lastModified:new Date()})).concat(packages.map(p=>({url:`https://azza.id/paket-umrah/${p.slug}`,lastModified:new Date()})))}
