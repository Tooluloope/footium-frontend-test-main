import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const Formation = ["4-3-3", "4-4-2", "5-3-2", "5-4-1"] as const

export type FormationType = {
    formation: typeof Formation[number]
}
const initialState: FormationType = {
    formation: "4-3-3",
}

const FORMATION_SLICE = "formations"

export const formationSlice = createSlice({
    name: FORMATION_SLICE,
    initialState,
    reducers: {
        setFormation(
            state,
            { payload: { formation } }: PayloadAction<FormationType>
        ) {
            state.formation = formation
        },
    },
})

export const { setFormation } = formationSlice.actions

export default formationSlice.reducer
