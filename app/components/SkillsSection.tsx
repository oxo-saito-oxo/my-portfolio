"use client"

import { useEffect, useRef, useState } from "react"
import { Box, Heading, Text, Grid, GridItem } from "@yamada-ui/react"

const skills = [
    {
        name: "Flutter",
        percentage: 55,
        description: "趣味の個人アプリ開発やハッカソンのメインツール。一番自走できる技術です。"
    },
    {
        name: "Swift",
        percentage: 45,
        description: "iOSネイティブ開発への興味から学習中。SwiftUIを中心にUI構築を学んでいます。"
    },
    {
        name: "Python",
        percentage: 30,
        description: "大学のデータサイエンスの講義やゼミで使用。データ分析の基礎知識があります。"
    },
    {
        name: "React",
        percentage: 30,
        description: "このポートフォリオ作成に使用。Webフロントエンドの仕組みを学習中です。"
    },
    {
        name: "ReactNative",
        percentage: 20,
        description: "技育CAMPハッカソンで使用。短期間でのMVP実装に挑戦しました。"
    },
]

const others = ["Firebase", "Supabase", "Figma", "Git", "GitHub"]

export default function SkillsSection() {
    const [started, setStarted] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // 200ms待ってからオブザーバーを開始（ロード直後の誤発火を防ぐ）
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setStarted(true)
                        observer.disconnect()
                    }
                },
                {
                    threshold: 0.2,
                    rootMargin: "0px 0px -80px 0px", // 画面下端より80px手前で発火
                }
            )
            if (sectionRef.current) observer.observe(sectionRef.current)
        }, 200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Box
            as="section"
            ref={sectionRef}
            bg="brand.bg"
            py="12"
            w="full"
        >
            <Box maxW="800px" mx="auto" w="full" px={{ base: "10", lg: "20" }}>

                {/* セクションタイトル */}
                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        SKILLS
                    </Heading>
                </Box>

                {/* 2カラムレイアウト */}
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="12">

                    {/* 左：スキルバー */}
                    <GridItem>
                        {skills.map((skill) => (
                            <Box key={skill.name} mb="8">
                                <Box display="flex" justifyContent="space-between" mb="2">
                                    <Text color="brand.text" fontWeight="bold">{skill.name}</Text>
                                    <Text color="brand.text" fontSize="sm">{skill.percentage}%</Text>
                                </Box>

                                {/* プログレスバー */}
                                <Box bg="whiteAlpha.200" h="8px" borderRadius="full" mb="2">
                                    <Box
                                        bg="brand.accent"
                                        h="full"
                                        borderRadius="full"
                                        style={{
                                            width: started ? `${skill.percentage}%` : "0%",
                                            transition: "width 1.2s ease-in-out",
                                        }}
                                    />
                                </Box>

                                <Text color="brand.sub" fontSize="xs" lineHeight="shorter">
                                    {skill.description}
                                </Text>
                            </Box>
                        ))}
                    </GridItem>

                    {/* 右：Others */}
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

                {/* 注記 */}
                <Box mt="12" pt="6" borderTop="1px solid" borderColor="whiteAlpha.300">
                    <Text color="brand.sub" fontSize="xs" fontStyle="italic">
                        ※数値は自己評価による現在の開発熟度（0-100%）を表しています。
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}