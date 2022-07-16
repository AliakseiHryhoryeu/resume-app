import { configureStore } from '@reduxjs/toolkit'

import { projectReducer } from './project/project.slice'
import { skillReducer } from './skill/skill.slice'

export const store = configureStore({
	reducer: {
		project: projectReducer,
		skill: skillReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
})

export type TypeRootState = ReturnType<typeof store.getState>
