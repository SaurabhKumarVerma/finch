import React from 'react'
import { Image } from 'expo-image'
import { IFinchImage } from '../../types/image.interface'

const FinchImage = (props:IFinchImage) => {
  return (
    <Image {...props} cachePolicy={"memory"} transition={2000} />
  )
}

export default FinchImage
