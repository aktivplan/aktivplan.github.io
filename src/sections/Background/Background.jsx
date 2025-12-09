import React from 'react';
import { useTranslation } from 'react-i18next';
import './Background.css';
import ReactMarkdown from 'react-markdown';

const Background = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="background" className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>{t('background')}</ReactMarkdown>
           <div className="logo-container">
                    <div className="logo-wrapper">
                        <a href="https://dhp.lbg.ac.at/?lang=en" target="_blank">
                            <img src="/logos/LBI-DHP.svg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://salk.at/sportmedizin/" target="_blank">
                            <img src="/logos/SALK.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://lbg.ac.at/open-innovation-in-science/?lang=en" target="_blank">
                            <img src="/logos/LBG-OIS.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.alphaport.at/en" target="_blank">
                            <img src="/logos/alphaport.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.chino.io/" target="_blank">
                            <img src="/logos/Chino-IO.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Background;
