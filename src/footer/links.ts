interface FooterLinks {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
}

function generateFooterLinks(
  title: string,
  links: [string, string][]
): FooterLinks {
  return {
    title: title,
    links: links.map(([url, name]) => {
      return { name: name, url: url };
    }),
  };
}

const salesLinks = generateFooterLinks("ZAKUPY", [
  ["/gwarancje", "Dodatkowa gwarancja"],
  ["/montaz/", "Montaż komputera"],
  ["/komputery/uslugi", "Usługi"],
  ["/ubezpieczenia-PZU/", "Ubezpieczenie PZU"],
  ["/karty-podarunkowe", "Karta podarunkowa"],
  ["/morele-max", "Morele MAX"],
  ["/pay-po", "PayPo"],
  ["/raty-sandander", "Raty"],
  ["/leasing-pko", "Leasing"],
  ["/ILO", "Limit Odnawialny"],
  ["/info/klienci_biznesowi", "Sprzedaż dla firm"],
]);

const helperLinks = generateFooterLinks("POMOCNE LINKI", [
  ["/pomoc", "Pomoc"],
  ["/pokaz_pomoc/1104/", "Sposoby dostawy i płatności"],
  ["/pomoc_grupa/127/", "Zwroty i reklamacje"],
  ["/ubezpieczenia-PZU/", "Morele ASK - zgarniaj nagrody!"],
  ["/wiadomosci/", "Poradniki"],
  ["/kategorie", "Wszystkie kategorie produktowe"],
]);

const aboutLinks = generateFooterLinks("MORELE.NET", [
  ["/about", "O nas"],
  ["/info/dane_firmy/", "Dane firmy i numer konta"],
  ["/newsletter/", "Newsletter"],
  ["/about", "Nagrody i certyfikaty"],
  ["/info/kariera/", "Kariera"],
  [
    "https://newsletter.morele.net/Polityka_Prywatnosci_Sklepu_internetowego_morele_20.01.2023.pdf",
    "Polityka prywatności i cookies",
  ],
  ["/aktualnosci/pressroom/1/1", "Dla prasy"],
  ["/pokaz_pomoc/1309", "Regulamin sklepu"],
  ["/pokaz_pomoc/1315", "Robopicker - dotacja EU"],
  ["/pokaz_pomoc/1314", "Koszty gospodarowania odpadami"],
  ["/", "Home"],
  ["https://scroll.morele.net", "Scroll"],
]);

const marketPlaceLinks = generateFooterLinks("MARKETPLACE", [
  ["/pomoc_grupa/97", "O Marketplace"],
  ["/marketplace", "Zostań sprzedawcą"],
  ["/", "Sprzedawcy markeplace są przedsiębiorstwami."],
]);

export const footerLinks = [
  salesLinks,
  helperLinks,
  aboutLinks,
  marketPlaceLinks,
];
