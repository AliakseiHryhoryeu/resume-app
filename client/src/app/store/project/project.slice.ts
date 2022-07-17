import { IProject, IProjectState } from './project.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import LndingPageVPNUFO from 'assets/img/projects/testProj1.png'
import ReactApps from 'assets/img/projects/testProj2.png'
import NoteList from 'assets/img/projects/testProj3.png'
import Restaurant from 'assets/img/projects/testProj1.png'
import Todolist from 'assets/img/projects/testProj2.png'
import FlowerShop from 'assets/img/projects/testProj3.png'
import LaravelTournament from 'assets/img/projects/testProj1.png'
import ThemeForWPBlog from 'assets/img/projects/testProj2.png'
import FreeTeamSpeak3Server from 'assets/img/projects/testProj3.png'
import LandingRevizoro from 'assets/img/projects/testProj1.png'
import SoftwareEngineer from 'assets/img/projects/testProj2.png'
import CivilEngineer from 'assets/img/projects/testProj3.png'

const initialState: IProjectState = {
	projects: [
		// {
		// 	_id: '',
		// 	title: '',
		// 	text: '',
		// 	tags: [''],
		// 	buttons: {
		// 		primaryBtn: {
		// 			text: '',
		// 			url: '',
		// 		},
		// 		secondaryBtn: {
		// 			text: '',
		// 			url: '',
		// 		},
		// 	},
		// },
		{
			_id: 'LndingPageVPNUFO',
			title: 'Landing page VPN-UFO',
			text: 'Application owner can edit some sections in the admin panel',
			img: LndingPageVPNUFO,
			tags: ['ReactJS', 'Redux', 'NestJS', 'GraphQL', 'MongoDB'],
			buttons: {
				primaryBtn: {
					text: 'Live Website',
					url: 'https://www.google.com/',
				},
				secondaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/vpnufo-landing-page',
				},
			},
		},
		{
			_id: 'ReactApps',
			title: 'React Apps',
			text: '5 mini apps in 1',
			img: ReactApps,
			tags: ['NextJS', 'ReactJS', 'TypeScript'],
			buttons: {
				primaryBtn: {
					text: 'Live Website',
					url: 'https://react-apps-gamma.vercel.app/',
				},
				secondaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/react-apps',
				},
			},
		},
		{
			_id: 'NoteList',
			title: 'Note-List',
			img: NoteList,
			text: 'App for fast notes, saving in LocalStorage',
			tags: ['ReactJS', 'Redux', 'TypeScript'],
			buttons: {
				primaryBtn: {
					text: 'Live Website',
					url: 'https://note-list-green.vercel.app/',
				},
				secondaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/note-list',
				},
			},
		},
		{
			_id: 'Restaurant',
			title: 'Restaurant',
			text: 'Restaurant website design development ',
			img: Restaurant,
			tags: ['Design', 'Figma'],
			buttons: {
				primaryBtn: {
					text: 'View in Figma',
					url: 'https://www.figma.com/file/A5xG3niRWFMeGiyIbwdpKz/Restaraunt?node-id=0%3A1',
				},
			},
		},
		{
			_id: 'Todolist',
			title: 'To do list',
			text: 'To do list, data is stored in the database',
			img: Todolist,
			tags: ['ReactJS', 'ExpressJS', 'MongoDB'],
			buttons: {
				primaryBtn: {
					text: 'Live Website',
					url: 'https://to-do-list-client.vercel.app/',
				},
				secondaryBtn: {
					text: 'Github code',
					url: 'https://github.com/AliakseiHryhoryeu/To-do-list',
				},
			},
		},

		{
			_id: 'FlowerShop',
			title: 'Flower Shop',
			text: '',
			img: FlowerShop,
			tags: ['HTML', 'CSS', 'Bootstrap'],
			buttons: {
				primaryBtn: {
					text: 'Live Website',
					url: 'https://github.com/AliakseiHryhoryeu/Flower-shop',
				},
				secondaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/Revizorro-Landing-page',
				},
			},
		},
		{
			_id: 'LaravelTournament',
			title: 'Tournament table calculation',
			text: 'Client-Server application',
			img: LaravelTournament,
			tags: ['PHP', 'Laravel', 'MySQL'],
			buttons: {
				primaryBtn: {
					text: 'Live Website',
					url: 'https://tournament-bracket.herokuapp.com/',
				},
				secondaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/tournament-bracket',
				},
			},
		},
		{
			_id: 'ThemeForWPBlog',
			title: 'Theme for Wordpress',
			text: 'Blog',
			img: ThemeForWPBlog,
			tags: ['PHP', 'WordPress'],
			buttons: {
				primaryBtn: {
					text: 'Github code',
					url: 'https://github.com/AliakseiHryhoryeu/Theme-for-WordPress-blog',
				},
			},
		},
		{
			_id: 'FreeTeamSpeak3Server',
			title: 'Free TeamSpeak server',
			text: 'Automatic change of the server name in the browser to continue its existence',
			img: FreeTeamSpeak3Server,
			tags: ['C#', 'WPF', 'MySQL'],
			buttons: {
				primaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/auto-rename-TeamSpeak3-server',
				},
			},
		},
		{
			_id: 'LandingRevizoro',
			title: 'Landing Page - Revizoro',
			text: 'Cleaning company website development',
			img: LandingRevizoro,
			tags: ['HTML', 'CSS', 'Gulp', 'SCSS'],
			buttons: {
				primaryBtn: {
					text: 'Live Website',
					url: 'https://clean-landing-page.vercel.app/',
				},
				secondaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/Revizorro-Landing-page',
				},
			},
		},
		{
			_id: 'SoftwareEngineer',
			title: 'Hotel employee software',
			text: 'Graduation project - Software Engineer',
			img: SoftwareEngineer,
			tags: ['C#', 'WPF', 'MySQL'],
			buttons: {
				primaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/graduate-work-software-engineer',
				},
			},
		},

		{
			_id: 'CivilEngineer',
			title: 'Building plan of the Hotel',
			text: 'Graduation project - Civil Engineer',
			img: CivilEngineer,
			tags: ['Autocad', 'Revit', 'Robot'],
			buttons: {
				primaryBtn: {
					text: 'See on Dribble',
					url: 'https://www.google.com/',
				},
				secondaryBtn: {
					text: 'GitHub code',
					url: 'https://github.com/AliakseiHryhoryeu/graduate-work-construction-engineer',
				},
			},
		},
	],
}

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		getProject: (state, action: PayloadAction<IProject>) => {
			// state.push(action.payload)
		},
		addProject: (state, action: PayloadAction<IProject>) => {
			// state.push(action.payload)
		},
		editProject: (state, action: PayloadAction<IProject>) => {
			// state.push(action.payload)
		},
		deleteProject: (state, action: PayloadAction<IProject>) => {
			// state.push(action.payload)
		},
	},
})

export default projectSlice.reducer

export const projectReducer = projectSlice.reducer
export const projectActions = projectSlice.actions
