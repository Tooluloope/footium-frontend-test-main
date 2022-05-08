import { Team, Player } from "utility/types"
import { RootState } from "store"

/**
 * This function normalizes data for the store
 */
export const normalizeData = (
    data: Team
): {
    playersId: string[]
    subsId: string[]
    allPlayers: Player[]
} => {
    const playersId: string[] = []
    const subsId: string[] = []
    const allPlayers: Player[] = [...data.firstEleven, ...data.subs]

    data.firstEleven.forEach((player) => playersId.push(player.id))

    data.subs.forEach((player) => subsId.push(player.id))

    return {
        playersId,
        subsId,
        allPlayers,
    }
}

/**
 * This function helps find Player by ID
 */
export const getPlayerById = (playerId: string) => (store: RootState) => {
    return store.players.allPlayers.find(({ id }) => playerId === id)
}
