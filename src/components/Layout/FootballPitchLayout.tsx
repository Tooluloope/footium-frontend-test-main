import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import React from "react"
import { PitchOutline } from "./PitchOutLine"
import { PlayerLayout } from "./PlayerLayout"
import { SelectFormation } from "./SelectFormation"

const NUM_BOXES_ON_PITCH = 35
const colors = [
    "rgb(62, 154, 52)",
    "rgb(80,135,38)",
    "rgb(62, 154, 52)",
    "rgb(43, 171, 69)",
]

const PitchBox = () => (
    <GridItem
        bg={colors[Math.floor(Math.random() * colors.length)]}
        w="full"
        h="full"
    ></GridItem>
)
export const FootballPitchLayout = () => {
    return (
        <Box
            // maxW={"800px"}
            minH="100vh"
            height={"full"}
            flex={"1 1 0"}
            p="20px"
            display={"flex"}
            flexDir="column"
        >
            <Box my="20px">
                <Text
                    fontWeight="bold"
                    fontSize={"15px"}
                    color={"rgb(255,255,255)"}
                >
                    Formation
                </Text>
                <SelectFormation />
            </Box>
            <Box
                w="full"
                h="full"
                my="20px"
                // style={{
                //     perspective: "1000px",
                // }}
            >
                <Grid
                    // style={{
                    //     transform: "rotateX(20deg)",
                    // }}
                    w="full"
                    minH="100vh"
                    h="full"
                    templateColumns="repeat(5, 1fr)"
                    border="1px solid white"
                    gap={0.5}
                    pos="relative"
                >
                    {[...Array(NUM_BOXES_ON_PITCH)].map((_, idx) => (
                        <PitchBox key={idx} />
                    ))}
                    <PitchOutline />
                    <PlayerLayout />
                </Grid>
            </Box>
        </Box>
    )
}
