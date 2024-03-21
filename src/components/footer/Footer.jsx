import cls from "./footer.module.css"
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div>
            Footer
            {t("Welcome")}
        </div>
    );
};

export default Footer;