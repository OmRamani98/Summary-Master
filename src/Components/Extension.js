import React from 'react';
import './styles/myStyles.css';
import firefox from './images/firefox.png';
import chrome from './images/chrome.png';

export default function Extensions() {
    return (
        <div className='extension-container'>
            <div className='ex-header'>Browser Extensions</div>
            <div className='ex-desc'>Use Summary Master browser extensions to summarize any webpage in a click.</div>
            <div className='ex-button'>
                <div className='button1'>
                    <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
                        <img src={chrome} alt='chrome' />
                        <div>
                            <div className='button1-inner1'>
                                Available in the
                            </div>
                            <div className='button1-inner2'>
                                Chrome Web Store
                            </div>
                        </div>
                    </a>
                </div>
                <div className='button2'>
                    <a href="https://addons.mozilla.org" target="_blank" rel="noopener noreferrer">
                        <img src={firefox} alt='firefox' />
                        <div>
                            <div className='button2-inner1'>
                                Firefox Browser
                            </div>
                            <div className='button2-inner2'>
                                ADD-ONS
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
