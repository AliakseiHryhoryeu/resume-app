import { ISkill, ISkillState } from './skill.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ISkillState = {
	skills: [
		{
			_id: 'JavaScript',
			title: 'JavaScript',
			img: 'assets/img/skills/JavaScript.png',
		},
		{
			_id: 'TypeScript',
			title: 'TypeScript',
			img: 'assets/img/skills/TypeScript.png',
		},
		{
			_id: 'HTML',
			title: 'HTML',
			img: 'assets/img/skills/HTML.png',
		},
		{
			_id: 'CSS',
			title: 'CSS',
			img: 'assets/img/skills/CSS.png',
		},
		{
			_id: 'SCSS',
			title: 'SCSS',
			img: 'assets/img/skills/SCSS.png',
		},
		{
			_id: 'ReactJS',
			title: 'ReactJS',
			img: 'assets/img/skills/ReactJS.png',
		},
		{
			_id: 'NextJS',
			title: 'NextJS',
			img: 'assets/img/skills/NextJS.png',
		},
		{
			_id: 'Redux',
			title: 'Redux',
			img: 'assets/img/skills/Redux.png',
		},
		{
			_id: 'GraphQLApollo',
			title: 'GraphQL, Apollo',
			img: 'assets/img/skills/GraphQL.png',
		},
		{
			_id: 'Bootstrap',
			title: 'Bootstrap',
			img: 'assets/img/skills/Bootstrap.png',
		},
		{
			_id: 'MaterialUI',
			title: 'Material - UI',
			img: 'assets/img/skills/MaterialUI.png',
		},
		{
			_id: 'Tailwind-CSS',
			title: 'Tailwind CSS',
			img: 'assets/img/skills/TailwindCSS.png',
		},
		{
			_id: 'NodeJS',
			title: 'NodeJS',
			img: 'assets/img/skills/NodeJS.png',
		},
		{
			_id: 'ExpressJS',
			title: 'ExpressJS',
			img: 'assets/img/skills/ExpressJS.png',
		},
		{
			_id: 'MongoDB',
			title: 'MongoDB',
			img: 'assets/img/skills/MongoDB.png',
		},
		{
			_id: 'MySQL',
			title: 'MySQL',
			img: 'assets/img/skills/MySQL.png',
		},
		{
			_id: 'Webpack',
			title: 'Webpack',
			img: 'assets/img/skills/Webpack.png',
		},
		{
			_id: 'Gulp',
			title: 'Gulp',
			img: 'assets/img/skills/Gulp.svg',
		},
		{
			_id: 'Git',
			title: 'Git',
			img: 'assets/img/skills/Git.png',
		},
		{
			_id: 'GitHub',
			title: 'Git',
			img: 'assets/img/skills/GitHub.png',
		},
		{
			_id: 'Postman',
			title: 'Postman',
			img: 'assets/img/skills/Postman.svg',
		},
		{
			_id: 'Jira',
			title: 'Jira',
			img: 'assets/img/skills/Jira.png',
		},
		{
			_id: 'Figma',
			title: 'Figma',
			img: 'assets/img/skills/Figma.png',
		},
		{
			_id: 'Adobe-XD',
			title: 'Adobe XD',
			img: 'assets/img/skills/AdobeXD.png',
		},
		{
			_id: 'Photoshop',
			title: 'Photoshop',
			img: 'assets/img/skills/Photoshop.svg',
		},
	],
}

export const skillSlice = createSlice({
	name: 'skill',
	initialState,
	reducers: {
		getFeedback: (state, action: PayloadAction<ISkill>) => {
			state.push(action.payload)
		},
		addFeedback: (state, action: PayloadAction<ISkill>) => {
			state.push(action.payload)
		},
		editFeedback: (state, action: PayloadAction<ISkill>) => {
			state.push(action.payload)
		},
		deleteFeedback: (state, action: PayloadAction<ISkill>) => {
			state.push(action.payload)
		},
	},
})

export default skillSlice.reducer

export const skillReducer = skillSlice.reducer
export const skillActions = skillSlice.actions
