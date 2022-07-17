import React, { FC } from 'react'
import { Header, Home, Skills, Projects } from 'app/components'

import './Landing.scss'

export const Landing: FC = () => {
	return (
		<div className='main'>
			<Header />
			<Home />
			<Skills />
			<Projects />
		</div>
	)
}
