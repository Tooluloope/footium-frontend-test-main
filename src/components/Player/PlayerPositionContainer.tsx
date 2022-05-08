import { Box } from "@chakra-ui/react"
import React from "react"
import { PlayerPositions } from "utility/types"

interface PlayerPositionContainerProps {
    position: PlayerPositions
}
export const PlayerPositionContainer = ({
    position,
}: PlayerPositionContainerProps) => {
    return (
        <Box
            backgroundColor={"rgb(39,45,51)"}
            maxW="200px"
            w="full"
            height={"50px"}
            borderRadius="10px"
            color={"rgb(255,255,255)"}
            position="relative"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            fontWeight="medium"
            fontSize={"20px"}
            marginBottom="-13px"
            zIndex={1}
        >
            {position}
            <Box
                position={"absolute"}
                left="10px"
                backgroundColor={"rgb(18,131,2)"}
                height="1em"
                width="1em"
                borderRadius={"full"}
            ></Box>
        </Box>
    )
}

export const PlayerPositionContainerSub = ({
    position,
}: PlayerPositionContainerProps) => {
    return (
        <Box
            maxW="200px"
            w="full"
            height={"40px"}
            color={"rgb(255,255,255)"}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            fontWeight="medium"
            fontSize={"20px"}
        >
            {position}
        </Box>
    )
}
