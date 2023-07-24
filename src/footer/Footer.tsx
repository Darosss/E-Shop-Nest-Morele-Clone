import { AskWindow } from "./AskWindow";
import { MobileAppInfo } from "./MobileAppInfo";
import { SocialMedia } from "./SocialMedia";
import { footerLinks } from "./links";

export function Footer() {
  return (
    <>
      <footer className="mt-[112px] pb-[40px] text-left" id="footer">
        <div className="w-full flex flex-wrap max-w-[1709px] [&>div:not(:last-child)]:flex-[0_0_16%] [&>div:not(:last-child)]:max-w-[16%] container-fluid [& ul]:p-[20px]">
          {footerLinks.map((link, idx) => {
            return (
              <div key={idx}>
                <div className="foot-menu-title">{link.title}</div>
                <ul className="foot-ul-default">
                  {link.links.map(({ url, name }, sectionLinkIdx) => {
                    return (
                      <li key={sectionLinkIdx}>
                        <a href={url}> {name} </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div>
            <div>
              <SocialMedia />
            </div>
            <div className="mt-[20px]">
              <MobileAppInfo />
            </div>
            <div className="foot-ask-widget">
              <AskWindow />
            </div>
          </div>
        </div>
        <div className="force-to-desktop-wr hidden-md hidden-lg mt-4">
          <span className="foot-menu-title btn-force-to-desktop">
            WERSJA STRONY NA KOMPUTER
          </span>
        </div>
      </footer>
    </>
  );
}
