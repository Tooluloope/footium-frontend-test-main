import { Box } from "@chakra-ui/react"
import React, { useCallback } from "react"
import { FunctionalComponentWithChildren } from "utility/types"
import { useAppDispatch } from "store/hooks"
import {
    swapPlayersBothInSub,
    swapPlayersFromInField,
    swapPlayersFromSub,
    swapPlayersInField,
} from "store/PlayersSlice"

export interface DragProps {
    id: string
    isSub: boolean
}
export const DraggableContainer: React.FC<
    DragProps & FunctionalComponentWithChildren
> = ({ children, id, isSub }) => {
    const dispatch = useAppDispatch()

    const handleSwappingOfPlayers = useCallback(
        (from: DragProps, to: DragProps) => {
            if (!from.isSub && !to.isSub) {
                dispatch(swapPlayersInField({ from: from.id, to: to.id }))
            } else if (from.isSub && to.isSub) {
                dispatch(swapPlayersBothInSub({ from: from.id, to: to.id }))
            } else if (from.isSub && !to.isSub) {
                dispatch(swapPlayersFromSub({ from: from.id, to: to.id }))
            } else if (!from.isSub && to.isSub) {
                dispatch(swapPlayersFromInField({ from: from.id, to: to.id }))
            }
        },
        [dispatch]
    )
    const handleDragStart = useCallback(
        (data: DragProps, event: React.DragEvent<HTMLDivElement>) => {
            let fromBox = JSON.stringify({ id: data.id, isSub: data.isSub })
            event.dataTransfer.setData("dragContent", fromBox)
        },
        []
    )

    const handleDragOver = useCallback(
        (_: DragProps, event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault()
            return false
        },
        []
    )

    const handleDrop = useCallback(
        (data: DragProps, event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault()
            let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"))
            let toBox = { id: data.id, isSub: data.isSub }
            handleSwappingOfPlayers(fromBox, toBox)
            return false
        },
        [handleSwappingOfPlayers]
    )

    return (
        <Box
            maxW="156px"
            w="full"
            mx="auto"
            px="3px"
            cursor={"move"}
            draggable={true}
            onDragStart={(event) => handleDragStart({ id, isSub }, event)}
            onDragOver={(event) => handleDragOver({ id, isSub }, event)}
            onDrop={(event) => handleDrop({ id, isSub }, event)}
        >
            {children}
        </Box>
    )
}
