
	import React from 'react'
	import ReactDOM from 'react-dom'
	import Container from '../components/Container'
	import { DndProvider } from 'react-dnd'
	import HTML5Backend from 'react-dnd-html5-backend'

	import PageLayOut from '../components/PageLayOut'
	
	function App() {
		return (
			<PageLayOut pageTitle="Home Page Duh" pageHeadline="Welcome to the DnD page." >
				<DndProvider backend={HTML5Backend}>
					<Container />
				</DndProvider>
			</PageLayOut>
		)
    }
    
	export default App
	// const rootElement = document.getElementById('root')
	// ReactDOM.render(<App />, rootElement)	
