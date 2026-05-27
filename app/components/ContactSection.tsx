"use client"

import { Box, Heading, Text, Flex } from "@yamada-ui/react"

export default function ContactSection() {
    const handleEmailClick = () => {
        const email = "s2422013@stu.musashino-u.ac.jp"
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
        window.open(gmailUrl, "_blank", "noopener,noreferrer")
    }

    return (
        <Box as="section" bg="#2F2E33" py="16" w="full">
            <Box maxW="800px" mx="auto" w="full" px="6">
                <Box borderLeft="4px solid" borderColor="brand.accent" pl="4" mb="12">
                    <Heading as="h2" color="brand.accent" fontSize="2xl" fontWeight="bold" letterSpacing="widest">
                        CONTACT
                    </Heading>
                </Box>

                <Box mb="12" textAlign="center">
                    <Text color="brand.text" fontSize="lg" fontWeight="bold" mb="2">
                        お気軽にお声がけください！
                    </Text>
                    <Text color="brand.sub" fontSize="sm" lineHeight="tall">
                        インターンシップのお誘いや、カジュアル面談など、<br />
                        下記のリンクよりご連絡をお待ちしております。
                    </Text>
                </Box>

                <Flex 
                    justifyContent="center" 
                    alignItems="center" 
                    gap="8" 
                    flexWrap="wrap" 
                    w="full"
                    pt="4"
                >
                    <Flex
                        onClick={handleEmailClick}
                        w="14"
                        h="14"
                        bg="#3A393F"
                        borderRadius="full"
                        alignItems="center"
                        justifyContent="center"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-4px)",
                            borderColor: "brand.accent",
                            boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
                        }}
                        cursor="pointer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fff" }}>
                            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                    </Flex>

                    <Flex
                        as="a"
                        href="https://github.com/oxo-saito-oxo"
                        target="_blank"
                        rel="noopener noreferrer"
                        w="14"
                        h="14"
                        bg="#3A393F"
                        borderRadius="full"
                        alignItems="center"
                        justifyContent="center"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-4px)",
                            borderColor: "brand.accent",
                            boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
                        }}
                        cursor="pointer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fff" }}>
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                    </Flex>

                    <Flex
                        as="a"
                        href="https://www.wantedly.com/id/manaka0524"
                        target="_blank"
                        rel="noopener noreferrer"
                        w="14"
                        h="14"
                        bg="#3A393F"
                        borderRadius="full"
                        alignItems="center"
                        justifyContent="center"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-4px)",
                            borderColor: "brand.accent",
                            boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
                        }}
                        cursor="pointer"
                    >
                        <Text 
                            color="brand.text" 
                            fontWeight="bold" 
                            fontSize="2xl" 
                            fontFamily="Urbanist" 
                            lineHeight="1"
                            textAlign="center"
                            display="inline-block"
                        >
                            W
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}