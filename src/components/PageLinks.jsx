import React from 'react'
import { pageLinks } from '../data'

function PageLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass}>
        {pageLinks.map((link) => 
            <li key={link.id}>
                <a href={link.href} className={itemClass} key={link.id}>{link.text}</a>
            </li>
        )}
    </ul>
  )
}

export default PageLinks