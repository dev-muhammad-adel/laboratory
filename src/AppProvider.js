import React from "react";
import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import themes from "@iso/config/theme/theme.config";
import AppLocale from "@iso/config/translation";

export default function AppProvider({ children }) {
  const { locale } = useSelector((state) => state.LanguageSwitcher.language);
  const { themeName } = useSelector(
    (state) => state.ThemeSwitcher.changeThemes
  );
  if (localStorage.getItem("lang")) {
  } else {
    localStorage.setItem("lang", "en");
  }
  if (localStorage.getItem("backgroundColor")) {
  } else {
    localStorage.setItem("backgroundColor", "#eee");
  }
  if (localStorage.getItem("forgroundColor")) {
  } else {
    localStorage.setItem("forgroundColor", "white");
  }

  const lang = localStorage.getItem("lang");

  const currentAppLocale = AppLocale[lang];
  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>
      </IntlProvider>
    </ConfigProvider>
  );
}
