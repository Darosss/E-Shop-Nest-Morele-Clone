import React, { useState } from "react";
import axios from "axios";
import { AuthEndpoints } from "../api/backend-endpoints";
import { RegisterResponse } from "../interfaces/auth";
import { SocialAuth } from "./SocialAuth";

export function RegisterTab() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function register() {
    axios
      .post<RegisterResponse>(AuthEndpoints.REGISTER, {
        password: password,
        email: email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        const responseErr = err.response?.data;

        if (!responseErr) {
          return console.error(err);
        }

        console.log(responseErr);
        //TODO: add notification that: Wyglada na to, ze masz juz konto!
      });
  }

  return (
    <>
      <div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="e-mail"
            autoComplete="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="hasło"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <span className="text-[12px] mt-2 text-left flex items-center">
            <img className="w-[16px] mr-2" src="icons/icon-alert2.svg"></img>
            Hasło musi mieć jedną wielką literę, jedną małą literę, jedną cyfrę,
            znak specjalny, minimum 8 znaków
          </span>
          <div className="flex flex-col justify-between gap-2 ">
            {/* TODO: add statute and newsletter buttons */}
            {/* <ToggleSwitch
              className="[&>*]:text-[10px]"
              label="Akceptuję regulamin sklepu Internetowego."
              onChange={() => {}}
              checked={false}
            />
            <ToggleSwitch
              className="[&>*]:text-[10px] w-full"
              label="Chcę otrzymywać newsletter i korzystać ze specjalnych promocji. Więcej"
              onChange={() => {}}
              checked={false}
            /> */}
          </div>
          <div className="w-full">
            <button
              className="common-button-w-background"
              onClick={() => register()}
            >
              Utworz konto
            </button>
          </div>
        </form>
        <SocialAuth />
      </div>
    </>
  );
}
