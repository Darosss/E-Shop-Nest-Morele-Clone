import React from "react";
import { Dropdown } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../auth";
import { User } from "../interfaces";

export function ProfilDropdown({ user }: { user: User }) {
  const { logout } = useContext(AuthContext);
  return (
    <Dropdown
      label={user.username}
      trigger="hover"
      className="bg-body shadow-default"
    >
      <Dropdown.Header className="border-b">
        <span className="block text-sm">Twoje konto</span>
      </Dropdown.Header>
      <Dropdown.Item>Zamówienia </Dropdown.Item>
      <Dropdown.Item>Zapytania</Dropdown.Item>
      <Dropdown.Item>Listy zakupowe</Dropdown.Item>
      <Dropdown.Item>Moje konfiguracje</Dropdown.Item>
      <Dropdown.Item>Produkty do oceny</Dropdown.Item>
      <Dropdown.Item>Morele max</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className="bg-content" onClick={() => logout()}>
        Wyloguj
      </Dropdown.Item>
    </Dropdown>
  );
}
