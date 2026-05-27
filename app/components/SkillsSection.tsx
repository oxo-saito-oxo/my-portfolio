"use client"

import { useEffect, useRef, useState } from "react"
import { Box, Heading, Text, Flex } from "@yamada-ui/react"

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
                    rootMargin: "0px 0px -80px 0px",
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
            {/* 共通の統一コンテナ（他のセクションと左端を完全に整列） */}
            <Box maxW="800px" mx="auto" w="full" px="6">

                {/* セクションタイトル */}
                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        SKILLS
                    </Heading>
                </Box>

                {/* 【確定・縦並びストレートロジック】
                    - flexDirection="column" に完全固定。
                    - これにより、パソコンでもスマホでも、100%確実に上から下へと一直線に要素が並びます。
                */}
                <Flex 
                    direction="column"
                    gap="10"
                    w="full"
                >

                    {/* 【上段】：スキルバーエリア */}
                    <Box w="full">
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
                    </Box>

                    {/* 【下段】：Othersエリア（PCでもスマホでも、絶対にこの位置に固定されます） */}
                    <Box w="full" mt="4">
                        <Heading as="h3" color="brand.text" fontSize="xl" fontWeight="bold" mb="6">
                            Others
                        </Heading>
                        <Box display="flex" flexWrap="wrap" gap="2">
                            {others.map((tool, index) => (
                                <Text key={tool} color="brand.sub" fontSize="lg" whiteSpace="nowrap">
                                    {tool}{index !== others.length - 1 ? " / " : ""}
                                </Text>
                            ))}
                        </Box>
                    </Box>
                </Flex>

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