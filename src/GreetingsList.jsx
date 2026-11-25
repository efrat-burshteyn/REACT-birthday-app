 import React from 'react'
 import GreetingCard from './GreetingCard.jsx'
 export default function GreetingsList({greeting}) {

   return (
     <div>
       {greeting.map((greet, index) => (
         <GreetingCard key={index} greeting={greet} />
       ))}
     </div>
   )
 }
 