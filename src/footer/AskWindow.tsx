export function AskWindow() {
  return (
    <>
      <div className="foot-menu-title mt-[16px]">MASZ PYTANIA?</div>
      <div className="foot-ask-widget__row">
        <div className="flex ">
          <img
            className="text-[23px] mr-[16px]"
            width="20px"
            height="20px"
            src="/icons/icon-help-center.svg"
          />
          <button className="ask-widget__button">Kontakt</button>
        </div>
      </div>
    </>
  );
}
