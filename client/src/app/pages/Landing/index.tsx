import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import { RootState } from 'app/store/reducers'
import { Header, Skills, Projects } from 'app/components'

import './Landing.scss'

export const Landing: FC = () => {
	// const { isAuth } = useSelector((state: RootState) => {
	// 	return {
	// 		isAuth: state.user.isAuth,
	// 	}
	// })
	return (
		<div className='main'>
			<Header />
			<div className='home'>
				<div className='home__subtitle'>Hi, I am Aliaksei Hryhoryeu 👋</div>
				<div className='home__title'>Front end Developer</div>
				<div className='home__text'>
					I am a Self-taught Front end Developer.
					<br />
					I like to work on exciting projects on both the Frontend and the
					Backend.
					<br />
					You can take a look at my projects down below
				</div>
			</div>
			<div className='skills'>
				<div className='wrapper'>
					<div className='skills__title'>My Skills</div>
					<Skills />
				</div>
			</div>

			<div className='projects'>
				<div className='projects__wrapper'>
					<div className='projects__title'>My Projects</div>
					<Projects />
				</div>
			</div>
		</div>
	)
}
