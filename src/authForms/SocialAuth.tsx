export function SocialAuth() {
  return (
    <>
      <div className="font-semibold text-[16px] flex flex-col [&>div]:mt-[20px]">
        <div>Lub kontynuuj z</div>
        <div className="flex">
          <button className="common-button-w-outline mr-4">FACEBOOK</button>
          <button className="common-button-w-outline">GOOGLE</button>
        </div>
        <div className="common-button-w-outline">
          Zaloguj się, używając konta Apple
        </div>
      </div>
    </>
  );
}
