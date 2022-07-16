import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

// import { UserActions } from 'app/store/actions'
// import { RootState } from 'app/store/reducers'

import './Header.scss'

export const Header: FC = () => {
	const [isActiveHeaderBurger, setActiveHeaderBurger] = useState(false)
	const [isActiveUsername, setActiveUsername] = useState(false)
	const toggleClassActiveHeaderBurger = () => {
		setActiveHeaderBurger(!isActiveHeaderBurger)
	}

	return (
		<>
			<header className='header'>
				<div className='header__wrapper'>
					<div className='header__logo'>Aliaksei Hryhoryeu</div>
					<div className='header__cv'>Download CV</div>
				</div>
			</header>
		</>
	)
}
