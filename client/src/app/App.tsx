import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Landing } from 'app/pages'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
			</Routes>
		</div>
	)
}

export default App
