import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import playersReducer, { playersSlice } from "./PlayersSlice"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

export const rootReducer = combineReducers({
    [playersSlice.name]: playersReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
