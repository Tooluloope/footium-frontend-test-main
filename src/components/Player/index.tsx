import React from "react"
import { useSelector } from "react-redux"
import { getPlayerById } from "utility/functions"
import { DraggableContainer } from "./DraggableContainer"
import { PlayerImage } from "./PlayerImage"
import { PlayerNameContainer } from "./PlayerNameContainer"
import {
    PlayerPositionContainer,
    PlayerPositionContainerSub,
} from "./PlayerPositionContainer"

interface PlayerProps {
    playerId: string
}

export const Player = ({ playerId }: PlayerProps) => {
    const player = useSelector(getPlayerById(playerId))

    if (!player) return null

    return (
        <DraggableContainer id={playerId} isSub={false}>
            <PlayerImage
                position={player.playerPosition.position}
                jerseyNumber={player.jerseyNumber}
            />
            <PlayerPositionContainer
                position={player.playerPosition.position}
            />
            <PlayerNameContainer name={player.name.firstName} />
        </DraggableContainer>
    )
}

export const PlayerSub = ({ playerId }: PlayerProps) => {
    const player = useSelector(getPlayerById(playerId))

    if (!player) return null
    return (
        <DraggableContainer id={playerId} isSub>
            <PlayerImage
                position={player.playerPosition.position}
                jerseyNumber={player.jerseyNumber}
            />
            <PlayerNameContainer isSub name={player.name.firstName} />
            <PlayerPositionContainerSub
                position={player.playerPosition.position}
            />
        </DraggableContainer>
    )
}
