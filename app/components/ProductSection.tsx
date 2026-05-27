import { Box, Heading, Text, Flex, Image, Badge } from "@yamada-ui/react"
import Link from "next/link"

const products = [
    {
        id: "singalyzar",
        title: "Singalyzar",
        description: "第1回MUDSハッカソンで作成。カラオケで歌いやすいキーの提案を行うwebアプリ。",
        image: "/Singalyzer.png",
        tags: ["React", "Supabase", "Python"],
    },
    {
        id: "MyFitCoach",
        title: "MyFitCoach",
        description: "技育CAMPハッカソンで制作。ダイエット・筋トレを個人に寄り添いサポートするアプリ。",
        image: "/MyFitCoach.png",
        tags: ["ReactNative", "TypeScript"],
    },
    {
        id: "machiawase",
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
        <Box as="section" bg="#2F2E33" py="12" w="full" overflow="hidden">
            <Box maxW="800px" mx="auto" w="full" px="6">                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        PRODUCTS
                    </Heading>
                </Box>
                <Flex
                    display="flex"
                    flexDirection="row"
                    flexWrap="nowrap" 
                    gap="6"
                    overflowX="auto"
                    pb="4"
                    w="full"
                    css={{
                        "&::-webkit-scrollbar": { display: "none" },
                        "scrollbarWidth": "none",
                        "scrollSnapType": "x mandatory", // 詳細画面と同じくピタッと止まる心地よさを追加
                    }}
                >
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            style={{ textDecoration: "none", display: "block" }}
                        >
                            <Box
                                bg="#3A393F" 
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
                                /* 【ここが最重要】
                                   スマホ画面でもPC画面でも、カードの横幅を「280px」に完全固定します。
                                   flexShrink={0} によって、画面が狭くなっても絶対に潰れません。
                                */
                                w="280px" 
                                flexShrink={0}
                                cursor="pointer"
                                css={{ "scrollSnapAlign": "start" }}
                            >
                                {/* 上部：写真領域 */}
                                <Box w="full" h="180px" overflow="hidden">
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
                                <Box p="5" flexGrow={1}>
                                    <Flex gap="2" mb="3" flexWrap="wrap">
                                        {product.tags.map(tag => (
                                            <Badge key={tag} variant="outline" colorScheme="blue" fontSize="2xs" borderRadius="full" px="2">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </Flex>
                                    
                                    <Heading as="h3" color="brand.text" fontSize="lg" mb="2" fontWeight="bold">
                                        {product.title}
                                    </Heading>
                                    
                                    <Text color="brand.sub" fontSize="xs" lineHeight="tall">
                                        {product.description}
                                    </Text>
                                    
                                    <Text color="brand.accent" fontSize="2xs" mt="4" fontWeight="bold" textAlign="right">
                                        VIEW DETAIL →
                                    </Text>
                                </Box>
                            </Box>
                        </Link>
                    ))}
                </Flex>
                
                <Text color="brand.sub" fontSize="2xs" mt="2" textAlign="center" fontStyle="italic" display={{ base: "block", md: "none" }}>
                    ← Swipe to view more projects →
                </Text>
            </Box>
        </Box>
    )
}