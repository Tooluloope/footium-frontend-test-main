import { Select } from "@chakra-ui/react"
import React from "react"
import { Formation, FormationType, setFormation } from "store/FormationSlice"
import { useAppSelector, useAppDispatch } from "store/hooks"

export const SelectFormation = () => {
    const formations = useAppSelector((state) => state.formations)
    const dispatch = useAppDispatch()

    const handleFormationChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        dispatch(
            setFormation({
                formation: event.target.value as FormationType["formation"],
            })
        )
    }

    return (
        <Select
            width="120px"
            mx="auto"
            my="10px"
            fontWeight="bold"
            fontSize={"15px"}
            color={"rgb(255,255,255)"}
            variant="unstyled"
            onChange={handleFormationChange}
            cursor="pointer"
        >
            {Formation.map((formation) => (
                <option
                    selected={formation === formations.formation}
                    value={formation}
                >
                    {formation} WIDE
                </option>
            ))}
        </Select>
    )
}
