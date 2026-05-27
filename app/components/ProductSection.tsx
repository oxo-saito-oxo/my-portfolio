import { Box, Heading, Text, Flex, Image, Badge, Link } from "@yamada-ui/react"

// プロダクトデータ（ここを増減させるだけでOK）
const products = [
    {
        id: "singalyzar",
        title: "Singalyzar",
        description: "第1回MUDSハッカソンで作成。カラオケで歌いやすいキーの提案を行うwebアプリ。",
        image: "/Singalyzer.png",
        tags: [" React", "Supabase", "Python"],
    },
    {
        id: "MyFitCoach",
        title: "MyFitCoach",
        description: "技育CAMPハッカソンで制作。ダイエット・筋トレを個人に寄り添いサポートするアプリ。",
        image: "/MyFitCoach.png",
        tags: ["ReactNative", "TypeScript"],
    },
    {
        id: "待ちあわせ",
        title: "待ちあわせアプリ",
        description: "第2回MUDSハッカソンで作成。優秀賞をいただいたプロダクト。近くにいる人との待ち合わせをもっと簡単に。",
        image: "/machiawase3.png",
        tags: ["Flutter"],
    },
    {
        id: "Tea-Pallet",
        title: "Tea-Pallet",
        description: "個人開発。紅茶のレシピを管理できるアプリ。GitHub Pagesでデプロイ。",
        image: "/Teapallet2.png",
        tags: ["Flutter", "Firebase"],
    },
    {
        id: "Feliz",
        title: "Feliz",
        description: "個人開発。自分の体調や調子に合わせて無理なく習慣化をサポートするアプリ。",
        image: "/Feliz1.png",
        tags: ["Swift"],
    },
]

export default function ProductsSection() {
    return (
        <Box as="section" bg="#2F2E33" py="12" w="full">
            {/* 共通の統一コンテナ（他セクションと位置を完全に合わせる） */}
            <Box maxW="800px" mx="auto" w="full" px="6">

                {/* セクションタイトル */}
                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        PRODUCTS
                    </Heading>
                </Box>

                {/* カード一覧エリア 
                    base (スマホ): 横スクロール
                    md (PC): グリッド配置
                */}
                <Flex
                    gap="6"
                    overflowX={{ base: "auto", md: "visible" }}
                    pb={{ base: "4", md: "0" }}
                    display={{ base: "flex", md: "grid" }}
                    gridTemplateColumns={{ md: "repeat(2, 1fr)" }} // PCでは2列、3枚なら3列に調整も可能
                    css={{
                        "&::-webkit-scrollbar": { display: "none" },
                        "scrollbarWidth": "none",
        }}
                >
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`} // 詳細画面へのパス（Next.jsのApp Router想定）
                            style={{ textDecoration: "none" }}
                            w={{ base: "280px", md: "full" }} // スマホではカード幅を固定して横スクロールさせる
                            flexShrink={0}
                        >
                            <Box
                                bg="#3A393F" // 背景より少し明るいグレーでカードを浮き立たせる
                                borderRadius="2xl"
                                overflow="hidden"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                                    borderColor: "brand.accent"
                                }}
                                border="1px solid"
                                borderColor="whiteAlpha.100"
                                h="full"
                                display="flex"
                                flexDirection="column"
                            >
                                {/* 上部：写真領域（アスペクト比を固定） */}
                                <Box w="full" h="200px" overflow="hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        w="full"
                                        h="full"
                                        objectFit="cover"
                                        transition="0.5s"
                                        _hover={{ transform: "scale(1.1)" }}
                                    />
                                </Box>

                                {/* 下部：テキスト領域 */}
                                <Box p="6" flexGrow={1}>
                                    <Flex gap="2" mb="3" flexWrap="wrap">
                                        {product.tags.map(tag => (
                                            <Badge key={tag} variant="outline" colorScheme="blue" fontSize="2xs" borderRadius="full" px="2">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </Flex>
                                    
                                    <Heading as="h3" color="brand.text" fontSize="xl" mb="2" fontWeight="bold">
                                        {product.title}
                                    </Heading>
                                    
                                    <Text color="brand.sub" fontSize="sm" lineHeight="tall">
                                        {product.description}
                                    </Text>
                                    
                                    <Text color="brand.accent" fontSize="xs" mt="4" fontWeight="bold" textAlign="right">
                                        VIEW DETAIL →
                                    </Text>
                                </Box>
                            </Box>
                        </Link>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}