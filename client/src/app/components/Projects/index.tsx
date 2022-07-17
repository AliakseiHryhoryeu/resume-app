import React, { FC } from 'react'
import { useAppSelector } from 'app/hooks/useAppSelector'

import './Projects.scss'

export const Projects: FC = () => {
	const projects = useAppSelector(state => state.project.projects)

	return (
		<div className='projects'>
			<div className='projects__wrapper'>
				<div className='projects__title'>My Projects</div>

				<div className='projects__items'>
					{projects.map(item => {
						return (
							<div className='projects__item' key={item._id}>
								<a href={item.buttons.primaryBtn.url} target='_blank'>
									<img className='projects__item-img' src={item.img} alt='' />
								</a>
								<div className='projects__item-wrapper'>
									<a
										href={item.buttons.primaryBtn.url}
										target='_blank'
										className='projects__item-title'
									>
										{item.title}
									</a>
									<div className='projects__item-text'>{item.text}</div>
									<div className='projects__item__tags'>
										{item.tags.map(tag => {
											return (
												<div
													className='projects__item__tags-tag'
													key={item._id + tag}
												>
													{tag}
												</div>
											)
										})}
									</div>
									<div className='projects__item__buttons'>
										<a
											href={item.buttons.primaryBtn.url}
											className='projects__item__buttons-primary'
										>
											{item.buttons.primaryBtn.text}
										</a>
										{item.buttons.secondaryBtn && (
											<a
												href={item.buttons.secondaryBtn.url}
												className='projects__item__buttons-secondary'
											>
												{item.buttons.secondaryBtn.text}
											</a>
										)}
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
