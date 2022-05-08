import { Box } from "@chakra-ui/react"
import React from "react"
import { FootballPitchLayout } from "./FootballPitchLayout"
import { SubLayout } from "./SubLayout"

export const Layout = () => {
    return (
        <Box bg="rgb(50,129,51)" minH="100vh" minW="100vw">
            <Box
                display="flex"
                justifyContent={"space-between"}
                maxW="1440px"
                mx="auto"
            >
                <FootballPitchLayout />
                <SubLayout />
            </Box>
        </Box>
    )
}
