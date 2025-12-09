import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import ReactMarkdown from 'react-markdown';


const Contact = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='textBlock'>
            <h1>{t('contact.heading')}</h1>
            <p><ReactMarkdown>{t('contact.description')}</ReactMarkdown></p>
            <h3>{t('contact.subheading')}</h3>
            <p>
                {t('contact.address')}
                <br />
                {t('contact.email')}: <a href="mailto:aktivplan@lbidhp.at">aktivplan@lbidhp.at</a>
            </p>
        </div>
    );
};

export default Contact;