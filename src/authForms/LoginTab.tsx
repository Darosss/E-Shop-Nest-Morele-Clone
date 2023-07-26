import React, { useState, useContext } from "react";
import { AuthContext } from "../auth";
import axios from "axios";
import { AuthEndpoints } from "../api/backend-endpoints";
import { LoginResponse } from "../interfaces/auth";
import { Checkbox, Label } from "flowbite-react";
import { SocialAuth } from "./SocialAuth";

export function LoginTab() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useContext(AuthContext);

  function loginLocal() {
    axios
      .put<LoginResponse>(AuthEndpoints.LOGIN, {
        password: password,
        email: email,
      })
      .then((loginResponse) => {
        const token = loginResponse.data.token;

        login(token, { id: 1, username: "test-username" });
        //TODO: make api call to get profil
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div>
        <form className="auth-form">
          <input
            type="text"
            placeholder="e-mail"
            autoComplete="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            autoComplete="current-password"
            placeholder="hasło"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <div className="flex justify-between gap-2">
            <div className="flex items-center">
              <Checkbox id="promotion" />
              <Label className="ml-3" htmlFor="promotion">
                Zapamiętaj mnie
              </Label>
            </div>
            <div>
              <a className="text-orange text-[14px] font-semibold">
                Nie pamiętam hasła
              </a>
            </div>
          </div>

          <div className="w-full">
            <button
              className="common-button-w-background"
              onClick={() => loginLocal()}
            >
              Zaloguj się
            </button>
          </div>
        </form>
        <SocialAuth />
      </div>
    </>
  );
}
