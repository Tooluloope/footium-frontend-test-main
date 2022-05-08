import { Box } from "@chakra-ui/react"
import React from "react"

export const PitchOutline = () => {
    return (
        <>
            <Box
                pos="absolute"
                border={"2px solid white"}
                borderTopWidth={0}
                top="0"
                left="50%"
                transform={"translateX(-50%)"}
                maxW="170px"
                maxH="70px"
                w="full"
                height={"full"}
            />
            <Box
                pos="absolute"
                border={"2px solid white"}
                borderBottomWidth={0}
                bottom="0"
                left="50%"
                transform={"translateX(-50%)"}
                maxW="170px"
                maxH="70px"
                w="full"
                height={"full"}
            />
            <Box
                pos="absolute"
                border={"2px solid white"}
                borderBottomWidth={0}
                bottom="0"
                left="50%"
                transform={"translateX(-50%)"}
                maxW="350px"
                maxH="170px"
                w="full"
                height={"full"}
            />
            <Box
                pos="absolute"
                border={"2px solid white"}
                borderTopWidth={0}
                top="0"
                left="50%"
                transform={"translateX(-50%)"}
                maxW="350px"
                maxH="170px"
                w="full"
                height={"full"}
            />
            <Box
                pos="absolute"
                border={"2px solid white"}
                borderTopWidth={0}
                top="50%"
                left="50%"
                transform={"translate(-50%, -50%)"}
                w="full"
                height={"0"}
            />
            <Box
                pos="absolute"
                border={"2px solid white"}
                borderRadius="full"
                top="50%"
                left="50%"
                transform={"translate(-50%, -50%)"}
                maxW="150px"
                maxH="141px"
                w="full"
                height={"full"}
            />
        </>
    )
}
