import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { PlayerSub } from "components/Player"
import React from "react"
import { useAppSelector } from "store/hooks"

export const SubLayout = () => {
    const subs = useAppSelector((state) => state.players.subsId)

    return (
        <Flex flexDir={"column"} p="20px">
            <Box my="20px">
                <Text
                    fontWeight="bold"
                    fontSize={"15px"}
                    color={"rgb(255,255,255)"}
                >
                    SUBS
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={"15px"}
                    color={"rgb(255,255,255)"}
                >
                    Max. of 7
                </Text>
            </Box>

            <Grid flexShrink={0} width="206px" flex="1 1 0">
                {subs.map((player) => (
                    <GridItem
                        key={player}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                    >
                        <PlayerSub playerId={player} />
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )
}
