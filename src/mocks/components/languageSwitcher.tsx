import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h1>{t("test.welcome")}</h1>
            <button onClick={() => i18n.changeLanguage("en")}>English</button>
            <button onClick={() => i18n.changeLanguage("zh-TW")}>繁體中文</button>
        </div>
    );
}
