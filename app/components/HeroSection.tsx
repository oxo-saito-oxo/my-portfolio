"use client"

import { useEffect, useRef } from "react"
import { Box, Heading, ChevronDownIcon } from "@yamada-ui/react"

export default function HeroSection() {
    const arrowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let startTime: number | null = null
        let animationId: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = (timestamp - startTime) % 1500
            const progress = elapsed / 1500
            const y = 12 * Math.sin(progress * Math.PI * 2)

            if (arrowRef.current) {
                arrowRef.current.style.transform = `translateY(${y}px)`
            }

            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationId)
    }, [])

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
                fontSize={{ base: "3xl", sm: "5xl", md: "8xl" }}
                fontWeight="bold"
                letterSpacing="widest"
            >
                PORTFOLIO
            </Heading>

            <div
                ref={arrowRef}
                style={{ color: "#3A5199", cursor: "pointer" }}
            >
                <ChevronDownIcon boxSize="10" />
            </div>
        </Box>
    )
}