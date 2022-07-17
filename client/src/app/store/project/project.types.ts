export interface IProjectButtons {
	primaryBtn: {
		text: string
		url: string
	}
	secondaryBtn?: {
		text: string
		url: string
	}
}

export interface IProject {
	_id: string
	title: string
	text: string
	img: string
	tags: string[]
	buttons: IProjectButtons
}

export interface IProjectState {
	projects: IProject[]
}
