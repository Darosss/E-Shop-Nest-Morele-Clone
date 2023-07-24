export function MobileAppInfo() {
  return (
    <>
      {" "}
      <div className="foot-menu-title">POBIERZ NASZĄ APLIKACJĘ MOBILNĄ:</div>
      <div className="underline">
        Bestsellery w najniższych cenach tylko w aplikacji
      </div>
      <div className="flex pl-[5px] mt-[16px] ">
        <div className="foot-get-application__container__qrcode">
          <img
            loading="lazy"
            width="140"
            height="140"
            src="/pwa/qrcode_morele_prod.svg"
            alt="Pobierz QrCode"
          />
        </div>
        <div className="pl-[16px] flex justify-between flex-col">
          <a
            className="is-android"
            href="https://play.google.com/store/apps/details?id=at.xtools.morele.net&amp;referrer=utm_source%3Dfooter%26utm_medium%3Dbanner%26anid%3Dadmob"
          >
            <img
              loading="lazy"
              width="124"
              height="37"
              src="/pwa/google.svg"
              alt="Pobierz z Google Play"
            />
          </a>
          <a
            className="is-ios"
            href="https://apps.apple.com/pl/app/morele-net/id1473258844?l=pl"
          >
            <img
              loading="lazy"
              width="124"
              height="37"
              src="/pwa/apple.svg"
              alt="Pobierz z App Store"
            />
          </a>
          <a
            className="is-android"
            href="https://appgallery.cloud.huawei.com/ag/n/app/C102767311?channelId=EUPLBDD20200925MO&amp;detailType=0"
          >
            <img
              loading="lazy"
              width="124"
              height="38"
              src="/pwa/huawei.svg"
              alt="Pobierz z Huawei appGallery"
            />
          </a>
        </div>
      </div>
    </>
  );
}
