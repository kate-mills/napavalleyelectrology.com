import React from 'react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'


export const wrapRootElement = ({element}) => {
  return (
    <React.Fragment>
        {element}
    </React.Fragment>
  )
}
