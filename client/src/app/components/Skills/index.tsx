import React, { FC } from 'react'
import { useAppSelector } from 'app/hooks/useAppSelector'

import './Skills.scss'

export const Skills: FC = () => {
	const skills = useAppSelector(state => state.skill.skills)

	return (
		<div className='skills__items'>
			{skills.map(item => {
				return (
					<div className='skills__item'>
						<img src={item.img} alt={item.title} />
						<div className='skills__item-title'>{item.title}</div>
					</div>
				)
			})}
		</div>
	)
}
