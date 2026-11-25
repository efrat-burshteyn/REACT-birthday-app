 import React from 'react'
 import { useState, useEffect } from 'react'
 import { useI18nContext } from './context/I18nContext.jsx'
 import {translate} from './translate.js'
 export default function BirthDate({birthDate}) {
    const { language } = useI18nContext();
    const age = new Date().getFullYear() - new Date(birthDate).getFullYear();
    const originalText = `מזל טוב! אתה בן ${age} שנים. תאריך הלידה שלך הוא:`;
    const [text,setText]=useState(originalText);
    useEffect(()=>{
        translate(originalText,'he',language).then(setText);
    },[originalText,language])
   return (
     <div>
       <p>
        {text} {new Date(birthDate).toLocaleDateString(language)}
       </p>
     </div>
   )
 }
 