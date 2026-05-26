import { Box, Heading, Text } from "@yamada-ui/react"
import Image from "next/image"

export default function IntroduceSection() {
    return (
        <Box
            as="section"
            bg="brand.bg"
            px="8"
            py="12"
        >
            {/* セクションタイトル */}
            <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="8">
                <Heading
                    as="h2"
                    color="brand.accent"
                    fontSize="2xl"
                    fontWeight="bold"
                    letterSpacing="widest"
                >
                    INTRODUCE
                </Heading>
            </Box>

            {/* コンテンツ：縦並び・中央寄せ */}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="8"
                maxW="700px"
                mx="auto"
            >
                {/* 写真 */}
                <Box
                    borderRadius="full"
                    overflow="hidden"
                    border="4px solid"
                    borderColor="brand.accent"
                    w="200px"
                    h="200px"
                    flexShrink={0}
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

                {/* テキスト */}
                <Box w="full">
                    <Heading as="h3" color="brand.text" fontSize="xl" mb="4">
                        Profile
                    </Heading>

                    <Box display="grid" gridTemplateColumns="120px 1fr" gap="2" mb="6">
                        <Text color="brand.accent" fontWeight="bold">Name:</Text>
                        <Text color="brand.text">齊藤 茉那華</Text>

                        <Text color="brand.accent" fontWeight="bold">From:</Text>
                        <Text color="brand.text">新潟県</Text>

                        <Text color="brand.accent" fontWeight="bold">Age:</Text>
                        <Text color="brand.text">22歳(2026/5/26時点)</Text>

                        <Text color="brand.accent" fontWeight="bold">Seminar:</Text>
                        <Text color="brand.text">石橋ゼミ</Text>
                    </Box>

                    <Box borderLeft="4px solid" borderColor="brand.accent" pl="4">
                        <Text color="brand.sub" lineHeight="tall">
                            主にSwift / Flutterを用いてモバイルアプリの開発を行っています。あったら生活が少し楽しくなるようなアプリを作ることを目指しています。趣味は料理、お菓子作り、パン作り、紅茶を淹れること、おさんぽ、推し活などたくさんあります！趣味から着想を得たアプリを作ることが多いです。生成AIを活用し、知識を深めながらアプリ開発に取り組んでいます。
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}