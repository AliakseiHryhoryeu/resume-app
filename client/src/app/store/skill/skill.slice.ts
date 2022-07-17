import { ISkill, ISkillState } from './skill.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import JavaScript from 'assets/img/skills/JavaScript.png'
import TypeScript from 'assets/img/skills/TypeScript.png'
import HTML from 'assets/img/skills/HTML.png'
import CSS from 'assets/img/skills/CSS.png'
import SCSS from 'assets/img/skills/SCSS.png'
import ReactJS from 'assets/img/skills/ReactJS.png'
import NextJS from 'assets/img/skills/NextJS.png'
import Redux from 'assets/img/skills/Redux.png'
import GraphQL from 'assets/img/skills/GraphQL.png'
import Bootstrap from 'assets/img/skills/Bootstrap.png'
import MaterialUI from 'assets/img/skills/MaterialUI.png'
import TailwindCSS from 'assets/img/skills/TailwindCSS.png'
import NodeJS from 'assets/img/skills/NodeJS.png'
import ExpressJS from 'assets/img/skills/ExpressJS.png'
import MongoDB from 'assets/img/skills/MongoDB.png'
import MySQL from 'assets/img/skills/MySQL.png'
import Webpack from 'assets/img/skills/Webpack.png'
import Gulp from 'assets/img/skills/Gulp.png'
import Git from 'assets/img/skills/Git.png'
import GitHub from 'assets/img/skills/GitHub.png'
import Postman from 'assets/img/skills/Postman.png'
// import Jira from 'assets/img/skills/Jira.png'
import Figma from 'assets/img/skills/Figma.png'
import AdobeXD from 'assets/img/skills/AdobeXD.png'
import Photoshop from 'assets/img/skills/Photoshop.png'

const initialState: ISkillState = {
	skills: [
		{
			_id: 'JavaScript',
			title: 'JavaScript',
			img: JavaScript,
		},
		{
			_id: 'TypeScript',
			title: 'TypeScript',
			img: TypeScript,
		},
		{
			_id: 'HTML',
			title: 'HTML',
			img: HTML,
		},
		{
			_id: 'CSS',
			title: 'CSS',
			img: CSS,
		},
		{
			_id: 'SCSS',
			title: 'SCSS',
			img: SCSS,
		},
		{
			_id: 'ReactJS',
			title: 'ReactJS',
			img: ReactJS,
		},
		{
			_id: 'NextJS',
			title: 'NextJS',
			img: NextJS,
		},
		{
			_id: 'Redux',
			title: 'Redux',
			img: Redux,
		},
		{
			_id: 'GraphQLApollo',
			title: 'GraphQL, Apollo',
			img: GraphQL,
		},
		{
			_id: 'Bootstrap',
			title: 'Bootstrap',
			img: Bootstrap,
		},
		{
			_id: 'MaterialUI',
			title: 'Material - UI',
			img: MaterialUI,
		},
		{
			_id: 'Tailwind-CSS',
			title: 'Tailwind CSS',
			img: TailwindCSS,
		},
		{
			_id: 'NodeJS',
			title: 'NodeJS',
			img: NodeJS,
		},
		{
			_id: 'ExpressJS',
			title: 'ExpressJS',
			img: ExpressJS,
		},
		{
			_id: 'MongoDB',
			title: 'MongoDB',
			img: MongoDB,
		},
		{
			_id: 'MySQL',
			title: 'MySQL',
			img: MySQL,
		},
		{
			_id: 'Webpack',
			title: 'Webpack',
			img: Webpack,
		},
		{
			_id: 'Gulp',
			title: 'Gulp',
			img: Gulp,
		},
		{
			_id: 'Git',
			title: 'Git',
			img: Git,
		},
		{
			_id: 'GitHub',
			title: 'Git',
			img: GitHub,
		},
		{
			_id: 'Postman',
			title: 'Postman',
			img: Postman,
		},
		// {
		// 	_id: 'Jira',
		// 	title: 'Jira',
		// 	img: Jira,
		// },
		{
			_id: 'Figma',
			title: 'Figma',
			img: Figma,
		},
		{
			_id: 'AdobeXD',
			title: 'Adobe XD',
			img: AdobeXD,
		},
		{
			_id: 'Photoshop',
			title: 'Photoshop',
			img: Photoshop,
		},
	],
}

export const skillSlice = createSlice({
	name: 'skill',
	initialState,
	reducers: {
		getFeedback: (state, action: PayloadAction<ISkill>) => {
			// state.push(action.payload)
		},
		addFeedback: (state, action: PayloadAction<ISkill>) => {
			// state.push(action.payload)
		},
		editFeedback: (state, action: PayloadAction<ISkill>) => {
			// state.push(action.payload)
		},
		deleteFeedback: (state, action: PayloadAction<ISkill>) => {
			// state.push(action.payload)
		},
	},
})

export default skillSlice.reducer

export const skillReducer = skillSlice.reducer
export const skillActions = skillSlice.actions
