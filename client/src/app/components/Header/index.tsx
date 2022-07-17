import React, { FC } from 'react'

import './Header.scss'

export const Header: FC = () => {
	return (
		<>
			<header className='header'>
				<div className='header__wrapper'>
					<div className='header__logo'>Aliaksei Hryhoryeu</div>
					<a href='https://www.google.com/' className='header__cv'>
						View Resume
					</a>
				</div>
			</header>
		</>
	)
}
