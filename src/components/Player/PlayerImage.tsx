import { Box, Image, Text } from "@chakra-ui/react"
import React from "react"
import goalKeeper from "assets/gk-jersey.png"
import player from "assets/player-jersey.png"
import { PlayerPositions } from "utility/types"

interface PlayerImageProps {
    jerseyNumber: number
    position: PlayerPositions
}
export const PlayerImage = ({ jerseyNumber, position }: PlayerImageProps) => {
    const isGK = position === "GK"
    return (
        <Box
            maxW="100px"
            mx="auto"
            marginBottom={"-8px"}
            zIndex="2"
            pos={"relative"}
        >
            <Image
                draggable="false"
                src={isGK ? goalKeeper : player}
                alt="player"
            />
            <Text
                fontWeight="bold"
                fontSize={"20px"}
                color={"rgb(255,255,255)"}
                top={"50%"}
                left={"50%"}
                transform="translateX(-50%) translateY(-50%)"
                pos={"absolute"}
            >
                {jerseyNumber}
            </Text>
        </Box>
    )
}
