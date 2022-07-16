import React, { FC } from 'react'

export const Projects: FC = () => {
	return (
		<div className='projects__items'>
			<div className='projects__item'>
				<img src='' alt='' />
				<div className='projects__item-title'>Test project</div>
				<div className='projects__item-text'>test test test</div>
				<div className='projects__item__tags'>
					<div className='projects__item__tags-tag'>Figma</div>
					<div className='projects__item__tags-tag'>Figma</div>
					<div className='projects__item__tags-tag'>Figma</div>
				</div>
				<div className='project__item__buttons'>
					<div className='project__item__buttons-primary'>Figma</div>
					<div className='project__item__buttons-secondary'>Figma</div>
				</div>
			</div>
		</div>
	)
}
