import { useTranslation } from "react-i18next";
import ImagePicker from "./image-picker";

export default function Image() {
    const { t } = useTranslation();

    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold">{t("image")}</h2>
            <ImagePicker />
        </div>
    );
}
