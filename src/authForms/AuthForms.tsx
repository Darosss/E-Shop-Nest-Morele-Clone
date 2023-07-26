import React from "react";
import { AuthTabs } from "./AuthTabs";

export function AuthForms() {
  return (
    <>
      <main className="bg-content h-screen">
        {/* container fliuid */}
        <div className="container-fluid flex justify-center items-center  ">
          <div className="w-[940px] max-w-[90%] bg-body m-[96px_auto_160px]">
            {/* main container */}
            <div className="flex justify-center">
              {/* logo */}
              <a href="/">
                <img
                  src="/static/shop/logo/image-logo-morele.svg"
                  alt="morele"
                  className="m-[40px_auto] w-full h-[40px] inline-block"
                />
              </a>
            </div>
            <div className="flex justify-center max-w-full relative w-[420px] m-[0_auto]">
              <AuthTabs />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
