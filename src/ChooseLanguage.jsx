import React from 'react'
import { useI18nContext } from './context/I18nContext.jsx'

export default function ChooseLanguage() {
    const languages = ['he', 'en', 'fr'];
    const { changeLanguage } = useI18nContext();
  return (
    <div>
        <label>
            <input type="radio" name="language" value={languages[0]} defaultChecked onChange={(e) => changeLanguage(e.target.value)} />
            Hebrew
        </label>
        <label>
            <input type="radio" name="language" value={languages[1]} onChange={(e) => changeLanguage(e.target.value)} />
            English
        </label>
        <label>
            <input type="radio" name="language" value={languages[2]} onChange={(e) => changeLanguage(e.target.value)} />
            French
        </label>
    </div>
  )
}
