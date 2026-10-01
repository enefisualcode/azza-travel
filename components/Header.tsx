import Link from "next/link";
import { assetUrl, SITE_CONFIG, whatsappUrl } from "@/config/site";

const links = [["/", "Beranda"], ["/paket-umrah", "Paket Umrah"], ["/tentang-kami", "Tentang Kami"], ["/galeri", "Galeri"], ["/faq", "FAQ"], ["/kontak", "Kontak"]] as const;

export function Header() {
  return <header className="header">
    <Link href="/" className="logo"><img src={assetUrl("/media/logo.png")} alt="Azza.id Travel and Tours" /></Link>
    <nav className="desktop-nav" aria-label="Navigasi utama">{links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <details className="mobile-nav"><summary aria-label="Buka menu navigasi">Menu</summary><nav aria-label="Navigasi seluler">{links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</nav></details>
    <a className="button button-orange header-cta" href={whatsappUrl(`Halo ${SITE_CONFIG.name}, saya ingin berkonsultasi.`)} target="_blank">Konsultasi WhatsApp <span>↗</span></a>
  </header>;
}
