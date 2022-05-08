import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { normalizeData } from "utility/functions"
import { team1 } from "utility/constants"

const initialState = normalizeData(team1)

const PLAYERS_SLICE = "players"
export type Change = "SUB" | "IN_FIELD"

export type SwapPlayersType = {
    from: string
    to: string
}

export const playersSlice = createSlice({
    name: PLAYERS_SLICE,
    initialState,
    reducers: {
        swapPlayersInField(
            state,
            { payload: { from, to } }: PayloadAction<SwapPlayersType>
        ) {
            const draftState = state
            const getFromPlayerIndex = draftState.playersId.findIndex(
                (player) => player === from
            )
            const getToPlayerIndex = draftState.playersId.findIndex(
                (player) => player === to
            )
            if (
                getFromPlayerIndex !== getToPlayerIndex &&
                getFromPlayerIndex !== -1 &&
                getToPlayerIndex !== -1
            ) {
                const fromPlayer = draftState.playersId[getFromPlayerIndex]
                const toPlayer = draftState.playersId[getToPlayerIndex]

                draftState.playersId[getFromPlayerIndex] = toPlayer
                draftState.playersId[getToPlayerIndex] = fromPlayer

                return draftState
            }
        },

        swapPlayersBothInSub(
            state,
            { payload: { from, to } }: PayloadAction<SwapPlayersType>
        ) {
            const draftState = state
            const getFromPlayerIndex = draftState.subsId.findIndex(
                (player) => player === from
            )
            const getToPlayerIndex = draftState.subsId.findIndex(
                (player) => player === to
            )
            if (
                getFromPlayerIndex !== getToPlayerIndex &&
                getFromPlayerIndex !== -1 &&
                getToPlayerIndex !== -1
            ) {
                const fromPlayer = draftState.subsId[getFromPlayerIndex]
                const toPlayer = draftState.subsId[getToPlayerIndex]

                draftState.subsId[getFromPlayerIndex] = toPlayer
                draftState.subsId[getToPlayerIndex] = fromPlayer

                return draftState
            }
        },
        swapPlayersFromSub(
            state,
            { payload: { from, to } }: PayloadAction<SwapPlayersType>
        ) {
            const draftState = state
            const getFromPlayerIndex = draftState.subsId.findIndex(
                (player) => player === from
            )
            const getToPlayerIndex = draftState.playersId.findIndex(
                (player) => player === to
            )
            if (getFromPlayerIndex !== -1 && getToPlayerIndex !== -1) {
                const fromPlayer = state.subsId[getFromPlayerIndex]
                const toPlayer = state.playersId[getToPlayerIndex]
                draftState.playersId[getToPlayerIndex] = fromPlayer
                draftState.subsId[getFromPlayerIndex] = toPlayer
                return draftState
            }
        },
        swapPlayersFromInField(
            state,
            { payload: { from, to } }: PayloadAction<SwapPlayersType>
        ) {
            const draftState = state
            const getFromPlayerIndex = draftState.playersId.findIndex(
                (player) => player === from
            )
            const getToPlayerIndex = draftState.subsId.findIndex(
                (player) => player === to
            )
            if (getFromPlayerIndex !== -1 && getToPlayerIndex !== -1) {
                const fromPlayer = state.playersId[getFromPlayerIndex]
                const toPlayer = state.subsId[getToPlayerIndex]
                draftState.subsId[getToPlayerIndex] = fromPlayer
                draftState.playersId[getFromPlayerIndex] = toPlayer
                return draftState
            }
        },
    },
})

export const {
    swapPlayersInField,
    swapPlayersFromSub,
    swapPlayersBothInSub,
    swapPlayersFromInField,
} = playersSlice.actions

export default playersSlice.reducer
