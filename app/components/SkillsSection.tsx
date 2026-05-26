import { Box, Heading, Text, Grid, GridItem } from "@yamada-ui/react"

const skills = [
    {
        name: "Flutter",
        percentage: 55,
        description: "AIを活用した個人アプリ開発やハッカソンのメインツール。一番自走できる技術です。"
    },
    {
        name: "Swift",
        percentage: 45,
        description: "iOSネイティブ開発への興味から学習中。AIと対話しながらSwiftUIの基礎を習得しています。"
    },
    {
        name: "Python",
        percentage: 30,
        description: "大学のデータサイエンスの講義やゼミで使用。データの集計や分析の基礎知識があります。"
    },
    {
        name: "React",
        percentage: 30,
        description: "ハッカソンでの使用経験に加え、本ポートフォリオのコンポーネント構築に活用しています。"
    },
    {
        name: "ReactNative",
        percentage: 20,
        description: "学外ハッカソンでのチーム開発で使用。短期間でのアプリ形化に挑戦しました。"
    },
]

const others = ["Firebase", "Supabase", "Figma", "Git", "GitHub"]

export default function SkillsSection() {
    return (
        <Box
            as="section"
            bg="#2F2E33"
            py="12"
            w="full"
            suppressHydrationWarning // 万が一のテーマ干渉を防ぐガード
        >
            {/* 共通の統一コンテナ */}
            <Box maxW="800px" mx="auto" w="full" px="6">

                {/* セクションタイトル */}
                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        SKILLS
                    </Heading>
                </Box>

                {/* 2カラムレイアウト */}
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="12">

                    {/* 左側：スキルバー & 説明文 */}
                    <GridItem>
                        {skills.map((skill) => (
                            <Box key={skill.name} mb="8">
                                <Box display="flex" justifyContent="space-between" mb="2">
                                    <Text color="brand.text" fontWeight="bold">{skill.name}</Text>
                                    <Text color="brand.text" fontSize="sm">{skill.percentage}%</Text>
                                </Box>
                                {/* カスタムプログレスバー */}
                                {/* 外側：バーの背景（グレー） */}
                                <Box bg="whiteAlpha.200" h="8px" borderRadius="full" mb="2">
                                    {/* 内側：塗られる部分（widthで%を指定） */}
                                    <Box
                                        bg="brand.accent"
                                        h="full"
                                        borderRadius="full"
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </Box>
                                {/* スキルの補足説明 */}
                                <Text color="brand.sub" fontSize="xs" lineHeight="shorter">
                                    {skill.description}
                                </Text>
                            </Box>
                        ))}
                    </GridItem>

                    {/* 右側：Others */}
                    <GridItem>
                        <Heading as="h3" color="brand.text" fontSize="xl" fontWeight="bold" mb="6">
                            Others
                        </Heading>
                        <Box display="flex" flexWrap="wrap" gap="2">
                            {others.map((tool, index) => (
                                <Text key={tool} color="brand.sub" fontSize="lg">
                                    {tool}{index !== others.length - 1 ? " / " : ""}
                                </Text>
                            ))}
                        </Box>
                    </GridItem>
                </Grid>

                {/* 下部の注記 */}
                <Box mt="12" pt="6" borderTop="1px solid" borderColor="whiteAlpha.300">
                    <Text color="brand.sub" fontSize="xs" fontStyle="italic">
                        ※数値は自己評価による現在の開発熟度（0-100%）を表しています。
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}