import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import "./NextSteps.css";


const NextSteps = () => {
    const { t, i18n } = useTranslation();
    return (
        <section id="nextSteps">
            <div className="wrapper">
                <div className='textBlock'>
                    <h1>{t('nextSteps.h1')}</h1>
                    <div>
                        <p><ReactMarkdown>{t('nextSteps.desc')}</ReactMarkdown></p>
                        <img src="/next-steps.png" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextSteps;
