export function PromotionCard() {
  return (
    <>
      <div className="bg-body relative text-center mt-[32px] rounded-xl">
        {/* promotion box card */}
        <h3 className="bg-orange m-[0_0_12px] p-[8px_0px_40px_0px] text-center text-[24px] text-white rounded-xl">
          Okazja dnia
        </h3>
        <div className="w-full bg-body mt-[-40px] p-[24px_40px] rounded-2xl">
          {/* prom-box-content promo-box-content */}
          <div className="prom-box-top">
            <a
              href="https://www.morele.net/monitor-samsung-s310c-ls27c310eauxen-12766881/"
              title="Monitor Samsung S310C (LS27C310EAUXEN)"
              className="prom-box-image block mb-[8px] relative before:content-[''] before:block before:pt-[95%] [&>img]:absolute [&>img]:bottom-0 [&>img]:top-0 [&>img]:right-0 [&>img]:left-0 [&>img]:max-h-full [&>img]:max-w-full [&>img]:m-auto"
            >
              <img
                src="https://images.morele.net/i256/12766881_0_i256.jpg"
                alt="Monitor Samsung S310C (LS27C310EAUXEN)"
              />
            </a>
            <div className="prom-box-mobile-right">
              <div className="promo-box-price flex justify-center">
                <div className="promo-box-new-price text-[32px] font-semibold m-[0_8px]">
                  <div className="promo-box-new-price--label text-[12px] text-orange font-normal">
                    Cena z kodem: MONITOR23
                  </div>
                  499 zł
                </div>
                <div className="promo-box-old-price m-[0_8px] text-[16px]">
                  <div className="promo-box-old-price--label text-[12px] mb-[5px]">
                    Cena bez kodu
                  </div>
                  579 zł
                </div>
              </div>
              <div className="promo-box-name mt-[20px]">
                <a
                  href="https://www.morele.net/monitor-samsung-s310c-ls27c310eauxen-12766881/"
                  title="Monitor Samsung S310C (LS27C310EAUXEN)"
                  className="text-[16px]"
                >
                  Monitor Samsung S310C (LS27C310EAUXEN)
                </a>
              </div>
              <div className="promo-box-info min-h[44px] flex justify-center pt-[8px]">
                <div
                  className="p-0 text-[12px]"
                  data-lowest-price-target="info"
                >
                  Najniższa cena oferty <br />z 30 dni przed obniżką:{" "}
                  <span className="text-nowrap">579 zł </span>
                </div>
              </div>
            </div>
          </div>
          <div className="promo-box-availability mt-[20px]">
            <div className="status-box">
              <div className="status-box-bar">
                <div className="status-box-bar-status border bg-orange">
                  STATUS BAR SOON
                </div>
              </div>
              <div className="status-box-labels flex justify-between p-[16px]">
                <div className="status-box-expired">Sprzedano 4 szt.</div>
                <div className="status-box-was">Pozostało 20 szt.</div>
              </div>
            </div>
          </div>
          <div className="promo-box-actions">
            <div className="promo-box-to-basket">
              <a
                href="/basket/add/12766881"
                className="flex text-orange font-semibold justify-center border border-orange rounded-md w-full p-[12px_16px]"
              >
                Do koszyka
              </a>
            </div>
          </div>
          <div
            className="promo-box-countdown flex items-center justify-center mt-[40px]"
            data-date-to="2023-07-24 14:59:59"
          >
            <div className="flex text-[20px] [&>div>div:last-child]:text-[14px]">
              {/* //TODO:  add timer countdown*/}
              <div>
                <div>02</div>
                <div>Godzin</div>
              </div>
              <div>:</div>
              <div>
                <div>19</div>
                <div>Minut</div>
              </div>
              <div>:</div>
              <div>
                <div>09</div>
                <div>Sekund</div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://lp.morele.net/promocja-monitory/"
          className="flex text-white font-semibold justify-center rounded-b-xl bg-orange w-full p-[8px_16px]"
        >
          Zobacz więcej promocji
        </a>
      </div>
    </>
  );
}
