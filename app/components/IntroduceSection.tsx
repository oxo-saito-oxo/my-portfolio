import { Box, Heading, Text, Flex } from "@yamada-ui/react"
import Image from "next/image"

export default function IntroduceSection() {
    return (
        <Box as="section" bg="#2F2E33" py="12" w="full">
            {/* 統一コンテナ：見出しも中身もすべてこの中に閉じ込めます */}
            <Box maxW="800px" mx="auto" w="full" px="6">

                {/* セクションタイトル */}
                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        INTRODUCE
                    </Heading>
                </Box>

                {/* レイアウト（縦一列・中央寄せ） */}
                <Flex flexDirection="column" alignItems="center" gap="10" w="full">
                    {/* 写真エリア */}
                    <Box
                        flexShrink={0}
                        borderRadius="full"
                        overflow="hidden"
                        border="4px solid"
                        borderColor="brand.accent"
                        w={{ base: "180px", md: "240px" }}
                        h={{ base: "180px", md: "240px" }}
                    >
                        <Image
                            src="/IMG_7219.jpg"
                            alt="プロフィール写真"
                            width={300}
                            height={300}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            priority
                        />
                    </Box>

                    {/* テキストエリア */}
                    <Box w="full">
                        <Heading as="h3" color="brand.text" fontSize="xl" mb="6">
                            Profile
                        </Heading>

                        <Box display="grid" gridTemplateColumns="120px 1fr" gap="4" mb="8" fontSize="lg">
                            <Text color="brand.accent" fontWeight="bold">Name:</Text>
                            <Text color="brand.text">齊藤 茉那華</Text>

                            <Text color="brand.accent" fontWeight="bold">From:</Text>
                            <Text color="brand.text">新潟県</Text>

                            <Text color="brand.accent" fontWeight="bold">Age:</Text>
                            <Text color="brand.text">22歳（2026/05/26時点）</Text>

                            <Text color="brand.accent" fontWeight="bold">Seminar:</Text>
                            <Text color="brand.text">石橋ゼミ</Text>
                        </Box>

                        <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mt="6">
                            <Text color="brand.sub" lineHeight="tall">
                                主にSwift / Flutterを用いてモバイルアプリの開発を行っています。あったら生活が少し楽しくなるようなアプリを作ることを目指しています。趣味は料理、お菓子作り、パン作り、紅茶を淹れること、おさんぽ、推し活などたくさんあります！趣味から着想を得たアプリを作ることが多いです。生成AIを活用し、知識を深めながらアプリ開発に取り組んでいます。
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}