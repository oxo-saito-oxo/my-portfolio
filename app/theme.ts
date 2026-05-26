import { extendTheme } from "@yamada-ui/react"

export const theme = extendTheme({
    colors: {
        brand: {
            bg: "#2F2E33", // 背景
            text: "#FFFFFF", //テキスト
            sub: "#D5D6D2", //サブテキスト
            accent: "#3A5199", //アクセント

        },
    },
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif"
    },
})