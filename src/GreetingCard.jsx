 import React from 'react'
 import { useState, useEffect } from 'react'
 import { useI18nContext } from './context/I18nContext.jsx'
 import {translate} from './translate.js'
 export default function GreetingCard({greeting}) {
    const { language } = useI18nContext();
    const [text,setText]=useState(greeting);
    useEffect(()=>{
        translate(greeting,'he',language).then(setText);
    },[greeting,language])
   return (
     <div>
        {text}
     </div>
   )
 }
 