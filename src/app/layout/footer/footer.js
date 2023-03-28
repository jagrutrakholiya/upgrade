import CopyrightCard from "@/app/components/dashboard/copyrightCard/copyrightCard";

const Footer = () => {
  
  return (
    <>
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px] py-[3rem]">
        <div className="flex flex-wrap">
          <div className="flex flex-wrap w-full justify-between">
            <div className="xl:mr-[3rem] lg:mr-[2rem] md:mr-[1rem] mr-[0px]">
              <span className="footer-menu__category mb-[16px]">Products</span>
              <ul className="list-none">
                <li className="footer-menu__item">
                  <a
                    className="footer-menu__item__link"
                    href="/personal-loans/"
                  >
                    Incedo Advantage
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/upgrade-card/">
                    Credit Cards
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/one-card/">
                    iPayLatr
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a
                    className="footer-menu__item__link"
                    href="/premier-savings/"
                  >
                    Rewards Wallet
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a
                    className="footer-menu__item__link"
                    href="/rewards-checking/"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:mr-[3rem] lg:mr-[2rem] md:mr-[1rem] mr-[0px]">
              <span className="footer-menu__category mb-[16px]">Company</span>
              <ul className="list-none">
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/about/">
                    Home
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/about/">
                    About Us
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/careers/">
                    Join Us
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/press/">
                    Incedo Offers
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/reviews/">
                    Report vulnerabilty
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="/reviews/">
                    contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:mr-[3rem] lg:mr-[2rem] md:mr-[1rem] mr-[0px]">
              <span className="footer-menu__category mb-[16px]">Resources</span>
              <ul className="list-none">
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="">
                    Cookie Policy
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a
                    className="footer-menu__item__link"
                    href=""
                    target="_blank"
                  >
                    Do Not Disturb
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="">
                    Terms Of Use
                  </a>
                </li>

                <li className="footer-menu__item">
                  <a className="footer-menu__item__link" href="">
                    Fair Practice Code
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:mr-[3rem] lg:mr-[2rem] md:mr-[1rem] mr-[0px]">
              <div className="col-xs-12 col-sm-12 col-md-3 end-md xl:text-end lg:text-satrt text-start">
                <a className="flex justify-start">
                  <img
                    src="./assetes/logo.png"
                    class="md:w-[200px] mr-3 w-[150px]"
                    alt="Flowbite Logo"
                  />
                </a>
                <p className="text--size-small text--line-height-small text-start">
                  Otunba Olufemi Adesulu Avenue,
                  <br aria-hidden="true" /> Brig. Ademulegun Road,
                  <br aria-hidden="true" /> Ondo, Ondo State
                </p>
                <p className="text--size-small text--line-height-small text-start">
                  For other inquiries, contact us at
                  <br />
                  <span className="footer-contact">
                    moc.edargpu<span className="hidden">null</span>@tcatnoc
                    <span className="hidden">null</span>
                  </span>
                </p>
                <ul
                  aria-label="Social networks"
                  className="footer-social list--unstyled text-start"
                >
                  <li className="footeritem footer-social__item mr-2">
                    <a
                      aria-label="Follow us on Facebook"
                      className="footer-social__item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: "2.0999999999999996rem",
                          height: "2.0999999999999996rem",
                        }}
                        role="presentation"
                        fill="#47B2E4"
                        className="sc-dkrFOg bpDwEs"
                      >
                        <path
                          d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                          style={{ fill: "currentColor" }}
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="footeritem footer-social__item mr-2">
                    <a
                      aria-label="Follow us on Instagram"
                      className="footer-social__item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: "2.0999999999999996rem",
                          height: "2.0999999999999996rem",
                        }}
                        role="presentation"
                        className="sc-dkrFOg bpDwEs"
                      >
                        <path
                          d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                          style={{ fill: "currentColor" }}
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="footeritem footer-social__item mr-2">
                    <a
                      aria-label="Follow us on Twitter"
                      className="footer-social__item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: "2.0999999999999996rem",
                          height: "2.0999999999999996rem",
                        }}
                        role="presentation"
                        className="sc-dkrFOg bpDwEs"
                      >
                        <path
                          d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                          style={{ fill: "currentColor" }}
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="footeritem footer-social__item">
                    <a
                      aria-label="Follow us on LinkedIn"
                      className="footer-social__item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: "2.0999999999999996rem",
                          height: "2.0999999999999996rem",
                        }}
                        role="presentation"
                        className="sc-dkrFOg bpDwEs"
                      >
                        <path
                          d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                          style={{ fill: "currentColor" }}
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto md:px-2 xl:px-[120px] lg:px-[20px] px-[20px]">
        <CopyrightCard />
      </div>
    </>
  );
};
export default Footer;
