import { useTranslation, withTranslation } from "react-i18next";

const BackBlings = () => {
    const { t } = useTranslation();
    return (
        <div className="tw-mt-20">
            Back Blings
            <p>{t('welcome')}</p>
        </div>
    )
}

export default withTranslation()(BackBlings)