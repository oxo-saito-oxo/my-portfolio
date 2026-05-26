import { Box, Heading, Text } from "@yamada-ui/react"

const histories = [
    {
        date: "2020.04",
        title: "新潟県立長岡大手高等学校 普通科 入学",
    },
    {
        date: "2022.07",
        title: "学校法人角川ドワンゴ学園 N高等学校 転入学",
    },
    {
        date: "2023.03",
        title: "学校法人角川ドワンゴ学園 N高等学校 卒業",
    },
    {
        date: "2024.04",
        title: "武蔵野大学 データサイエンス学部データサイエンス学科 入学",
    },
    {
        date: "2025.07.05",
        title: "第1回MUDSハッカソン 出場",
        description:
            "賞は取れなかったものの、初めてのチーム開発、アプリ開発でもっとアプリ開発をしてみたいと思うきっかけになりました。",
    },
    {
        date: "2025.07.27",
        title: "技育CAMPハッカソン Vol.8 出場",
        description:
            "初めての学外のハッカソンでReactNativeを用いたモバイルアプリの開発に挑戦しました。",
    },
    {
        date: "2025.12",
        title: "第2回MUDSハッカソン 出場",
        description:
            "3回目のハッカソンにして初めて優秀賞をいただくことができました。",
    },
    {
        date: "2028.03",
        title: "武蔵野大学 データサイエンス学部データサイエンス学科 卒業予定",
    }
]

export default function HistorySection() {
    return (
        <Box
            as="section"
            bg="#2F2E33" // 指定のカラー
            px={{ base: "10", lg: "20" }}
            py="12"
            w="full"
        >
            {/* セクションタイトル */}
            <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                <Heading
                    as="h2"
                    color="brand.accent"
                    fontSize="2xl"
                    fontWeight="bold"
                    letterSpacing="widest"
                >
                    HISTORY
                </Heading>
            </Box>

            {/* テキストベースのシンプルな履歴リスト */}
            <Box maxW="800px" mx="auto" w="full">
                {histories.map((item) => (
                    <Box
                        key={item.date}
                        mb="8"
                        _last={{ mb: "0" }}
                    >
                        {/* 日付 */}
                        <Text color="brand.accent" fontSize="sm" mb="1" fontWeight="bold">
                            {item.date}
                        </Text>

                        {/* タイトル */}
                        <Heading as="h3" color="brand.text" fontSize="lg" fontWeight="bold" mb="2">
                            {item.title}
                        </Heading>

                        {/* 説明文がある場合のみ表示 */}
                        {item.description && (
                            <Text color="brand.sub" lineHeight="tall" fontSize="md">
                                {item.description}
                            </Text>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}