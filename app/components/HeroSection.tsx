"use client" // アニメーションなどを使うときに必要

import { Box, Heading, ChevronDownIcon } from "@yamada-ui/react"

export default function HeroSection() {
    return (
        <Box
            as="section"
            bg="brand.bg"
            minH="100dvh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            gap="8"
        >
            <Heading
                as="h1"
                color="brand.text"
                fontSize={{ base: "5xl", md: "8xl" }}
                fontWeight="bold"
                letterSpacing="widest"
            >
                PORTFOLIO
            </Heading>
            <Box
                color="brand.accent"
                style={{ animation: "bounce 2s ease-in-out infinite" }}
                cursor="pointer"
            >
                <ChevronDownIcon boxSize="10" />
            </Box>
        </Box>
    )
}