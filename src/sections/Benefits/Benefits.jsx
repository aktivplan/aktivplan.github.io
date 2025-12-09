import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import "./Benefits.css";

const Benefits = () => {
    const { t, i18n } = useTranslation();
    return (
        <section id="benefits">
            <div className="wrapper">
                <div className='textBlock'>
                    <h1>{t('benefits.h1')}</h1>
                    <div>
                        <img src="/benefits.png" />
                        <p>
                            <ReactMarkdown>{t('benefits.desc')}</ReactMarkdown>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
