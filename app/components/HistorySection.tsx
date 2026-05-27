import { Box, Heading, Text } from "@yamada-ui/react"

const histories = [
    { date: "2020.04", title: "新潟県立長岡大手高等学校 普通科 入学" },
    { date: "2022.07", title: "学校法人角川ドワンゴ学園 N高等学校 転入学" },
    { date: "2023.03", title: "学校法人角川ドワンゴ学園 N高等学校 卒業" },
    { date: "2024.04", title: "武蔵野大学 データサイエンス学部データサイエンス学科 入学" },
    { date: "2028.03", title: "武蔵野大学 データサイエンス学部データサイエンス学科 卒業予定" }
]

export default function HistorySection() {
    return (
        <Box as="section" bg="#2F2E33" py="12" w="full">
            {/* 統一コンテナ */}
            <Box maxW="800px" mx="auto" w="full" px="6">

                {/* セクションタイトル */}
                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        EDUCATIONAL BACKGROUND
                    </Heading>
                </Box>

                {/* 履歴リスト */}
                <Box w="full">
                    {histories.map((item) => (
                        <Box key={item.date} mb="8" _last={{ mb: "0" }}>
                            {/* 日付 */}
                            <Text color="brand.accent" fontSize="sm" mb="1" fontWeight="bold">
                                {item.date}
                            </Text>
                            
                            {/* タイトル（学歴名） */}
                            <Heading as="h3" color="brand.text" fontSize="lg" fontWeight="bold">
                                {item.title}
                            </Heading>
                            
                            {/* 【修正ポイント】
                                存在しない item.description の判定文を綺麗に削除しました。
                                これにより TypeScript の ts(2339) エラーが完全に解消されます。
                            */}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}