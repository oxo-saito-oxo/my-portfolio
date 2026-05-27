import { Box, Heading, Text, Flex, Image, Tag, Separator, Button } from "@yamada-ui/react"
import Link from "next/link"
import nextConfig from "../../next.config"
interface ProductDetailProps {
    title: string;
    summary: string;
    description: string;
    images: string[];
    tags: string[];
}

export default function ProductDetail({ title, summary, description, images, tags }: ProductDetailProps) {
    return (
        <Box as="section" bg="#2F2E33" minH="100vh" py="12" w="full">
            <Box maxW="800px" mx="auto" w="full" px="6">
                <Link href="/" style={{ textDecoration: "none" }}>
                    <Button 
                        variant="ghost" 
                        color="brand.accent" 
                        mb="8" 
                        _hover={{ bg: "whiteAlpha.100" }}
                        cursor="pointer"
                    >
                        ← 一覧に戻る
                    </Button>
                </Link>

                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        PRODUCT DETAIL
                    </Heading>
                </Box>

                <Flex 
                    display="flex"
                    flexDirection="row" 
                    flexWrap="wrap" 
                    gap="12" 
                    w="full"
                    alignItems="start"
                >
                    <Box flex="1" minW="300px">
                        <Heading as="h1" color="brand.text" fontSize="4xl" mb="2" fontWeight="bold">
                            {title}
                        </Heading>
                        <Text color="brand.accent" fontSize="xl" fontWeight="bold" mb="6">
                            {summary}
                        </Text>
                        <Separator borderColor="whiteAlpha.300" mb="6" />
                        <Box mb="8">
                            <Heading as="h3" color="brand.text" fontSize="lg" mb="3" fontWeight="bold">Overview</Heading>
                            <Text color="brand.sub" lineHeight="tall">{description}</Text>
                        </Box>
                        <Flex gap="2" mt="8" flexWrap="wrap">
                            {tags.map(tech => (
                                <Tag key={tech} variant="outline" colorScheme="blue" borderRadius="full" px="3">{tech}</Tag>
                            ))}
                        </Flex>
                    </Box>

                    <Box flex="1" minW="300px" w="full">
                        <Box 
                            position="relative"
                            borderRadius="3xl" 
                            overflow="hidden" 
                            boxShadow="2xl"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            bg="#1a1a1c"
                        >
                            <Flex
                                overflowX="auto"
                                css={{
                                    "scrollSnapType": "x mandatory",
                                    "&::-webkit-scrollbar": { display: "none" },
                                    "scrollbarWidth": "none",
                                }}
                            >
                                {images.map((src, index) => (
                                    <Box 
                                        key={index} 
                                        minW="100%" 
                                        h="450px" 
                                        css={{ "scrollSnapAlign": "center" }}
                                    >
                                        <Image 
                                            src={`${nextConfig.basePath || ''}${src}`} 
                                            alt={`${title} screenshot ${index + 1}`}
                                            w="full"
                                            h="full"
                                            objectFit="contain"
                                            p="4"
                                        />
                                    </Box>
                                ))}
                            </Flex>

                            {images.length > 1 && (
                                <Flex 
                                    position="absolute" 
                                    bottom="4" 
                                    left="50%" 
                                    transform="translateX(-50%)" 
                                    gap="2"
                                >
                                    {images.map((_, i) => (
                                        <Box 
                                            key={i} 
                                            w="2" 
                                            h="2" 
                                            borderRadius="full" 
                                            bg="whiteAlpha.600"
                                        />
                                    ))}
                                </Flex>
                            )}
                        </Box>
                        <Text color="brand.sub" fontSize="xs" mt="3" textAlign="center" fontStyle="italic">
                            ← Swipe to flip through screens →
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}