import {createContext,useState,use} from 'react';

const I18nContext=createContext({
    language: 'he',
    changeLanguage() { }
});

export function I18nContextProvider({children}){
    const [language, setLanguage]=useState('he');

    const changeLanguage=(newLanguage)=>{
        setLanguage(prevLanguage=>newLanguage);
    };

    const val={
        language,
        changeLanguage
    }
    return(<I18nContext value={val}>
        {children}
        </I18nContext>)
}
export function useI18nContext(){
    return use(I18nContext);
}


