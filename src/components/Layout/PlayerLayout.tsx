import { Flex } from "@chakra-ui/react"
import React, { useEffect, useMemo, useState } from "react"
import { useAppSelector } from "store/hooks"
import { Player } from "../Player/index"

export const PlayerLayout = () => {
    const firstEleven = useAppSelector((state) => state.players.playersId)

    const [arrangeMent, setArrangeMent] = useState<{
        forward: string[]
        midfielders: string[]
        defenders: string[]
        goalKeeper: string[]
    }>({
        forward: [],
        midfielders: [],
        defenders: [],
        goalKeeper: [],
    })

    useEffect(() => {
        const goalKeeper = firstEleven.slice(-1)
        const forward = firstEleven.slice(0, 3)
        const midfielders = firstEleven.slice(3, 6)
        const defenders = firstEleven.slice(6, 10)
        setArrangeMent({ forward, midfielders, defenders, goalKeeper })
    }, [firstEleven])
    const ForwardLine = useMemo(
        () => () => {
            return (
                <Flex pos={"absolute"} w="full" top="0">
                    {arrangeMent.forward.map((player) => (
                        <Player playerId={player} key={player} />
                    ))}
                </Flex>
            )
        },
        [arrangeMent.forward]
    )

    const Midline = useMemo(
        () => () =>
            (
                <Flex pos={"absolute"} w="full" top={"30%"}>
                    {arrangeMent.midfielders.map((player) => (
                        <Player playerId={player} key={player} />
                    ))}
                </Flex>
            ),
        [arrangeMent.midfielders]
    )

    const DefenseLine = useMemo(
        () => () => {
            return (
                <Flex pos={"absolute"} w="full" bottom={"30%"}>
                    {arrangeMent.defenders.map((player) => (
                        <Player playerId={player} key={player} />
                    ))}
                </Flex>
            )
        },
        [arrangeMent.defenders]
    )
    const GK = useMemo(
        () => () => {
            return (
                <Flex pos={"absolute"} w="full" bottom={0}>
                    {arrangeMent.goalKeeper.map((player) => (
                        <Player playerId={player} key={player} />
                    ))}
                </Flex>
            )
        },
        [arrangeMent.goalKeeper]
    )

    return (
        <>
            <ForwardLine />
            <Midline />
            <DefenseLine />
            <GK />
        </>
    )
}
