import React from 'react'
import { socialLinks } from '../data'
function SocialLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass}>
        {socialLinks.map((icon) => <li key={icon.id}>
        <a href={icon.href} target="_blank" className={itemClass}
        ><i className={icon.icon}></i></a>
        </li>
        )}
    </ul>
  )
}

export default SocialLinks