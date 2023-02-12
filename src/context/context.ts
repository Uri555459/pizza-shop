import { createContext } from 'react'

interface IMyContextType {}

export const MyContext = createContext<IMyContextType>({})
