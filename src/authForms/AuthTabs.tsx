import React from "react";
import { Tabs } from "flowbite-react";
import { LoginTab } from "./LoginTab";
import { RegisterTab } from "./RegisterTab";

export function AuthTabs() {
  return (
    <Tabs.Group
      aria-label="auth-tabs"
      style="underline"
      className="w-full focus:[&>button]:ring-opacity-0 justify-between [&>button]:w-[50%]"
    >
      <Tabs.Item active title="Logowanie">
        <LoginTab />
      </Tabs.Item>
      <Tabs.Item title="Nowe konto">
        <RegisterTab />
      </Tabs.Item>
    </Tabs.Group>
  );
}
