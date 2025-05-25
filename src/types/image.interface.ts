import { ImageContentFit, ImageContentPositionObject, ImageSource, ImageStyle, ImageTransition } from "expo-image"

export interface IFinchImage {
  source: ImageSource | string | number | ImageSource[] | string[] | null
  placeholder?: ImageSource | string | number | ImageSource[] | string[] | null
  contentFit?: ImageContentFit
  transition?: ImageTransition | number | null
  priority?: "low" | "normal" | "high" | null
  cachePolicy?: "none" | "disk" | "memory" | "memory-disk"
  style?: ImageStyle
  contentPosition?: ImageContentPositionObject
}