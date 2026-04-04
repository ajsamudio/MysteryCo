import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">

        <div className="footer-brand">
          <p className="footer-name">Mystery Entertainment</p>
          <p className="footer-copy">
            &copy; Mystery Entertainment 2026 | All Rights Reserved.<br />
            Conjunction of culture and artistic talent. Based in Los Angeles.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul>
            <li><Link href="#latest-releases">Releases</Link></li>
            <li><Link href="#artists">Artists</Link></li>
            <li>
              <a href="https://mysteryentertainment.shop" target="_blank" rel="noopener noreferrer">
                Store
              </a>
            </li>
            <li><Link href="#connect">Connect</Link></li>
          </ul>
        </nav>

        <div className="footer-social">
          <ul>
            <li>
              <a href="https://www.instagram.com/mysteryentertainment_" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@mysteryentertainment1" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
            <li>
              <a href="https://mysteryentertainment.shop" target="_blank" rel="noopener noreferrer">
                Shop
              </a>
            </li>
            <li>
              <a href="mailto:MysteryEnt21@gmail.com">Contact Us</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
