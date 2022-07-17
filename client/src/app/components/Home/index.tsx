import React, { FC } from 'react'

import './Home.scss'

export const Home: FC = () => {
	return (
		<div className='home'>
			<div className='home__wrapper'>
				<h2 className='home__subtitle'>
					Hi, I am
					<span className='home__subtitle-purple'>Aliaksei Hryhoryeu</span>
					👋
				</h2>
				<h1 className='home__title'>Front end Developer</h1>
				<h3 className='home__text'>
					I am a Self-taught Front end Developer.
					<br />
					I like to work on exciting projects on both the Frontend and the
					Backend.
					<br />
					You can take a look at my projects down below
				</h3>
			</div>
		</div>
	)
}
