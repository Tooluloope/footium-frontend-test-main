import { Box } from "@chakra-ui/react"
import React from "react"

interface PlayerNameContainerProps {
    name: string
    isSub?: boolean
}
export const PlayerNameContainer = ({
    name,
    isSub,
}: PlayerNameContainerProps) => {
    return (
        <Box
            backgroundColor={"rgb(9,79,66)"}
            maxW="200px"
            w="full"
            height={!isSub ? "50px" : "40px"}
            pt={!isSub ? "10px" : "0px"}
            borderRadius="10px"
            color={"rgb(208,219,217)"}
            position="relative"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            fontWeight="medium"
            fontSize={"20px"}
        >
            {name}
            <Box
                position={"absolute"}
                left="10px"
                as="svg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                ></path>
            </Box>
        </Box>
    )
}
