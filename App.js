import React, { useState, useEffect, useMemo } from 'react'

import { db } from './firebase'

import HomeStack from './routers/HomeStack'
import Loader from './screens/Loader'
import { Context } from './components/Context'

const App = () => {
	// Storing data as state
	const [data, setData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

	// Hook for grouping functions
	const functions = useMemo(() => ({
		// First fetch data at start of the application
		initData: () => {
			db.ref('data')
				.get()
				.then((response) => {
					if (response.exists()) {
						setData(response.val())
					} else {
						console.log('Data not available')
					}
				})
				.catch((e) => alert(e))
		},

		// Init the listening on changes
		listenToChanges: () => {
			db.ref('data').on('value', (e) => setData(e.val()))
		},

		// Update specific data
		updateData: (updateData) => {
			db.ref('data').set(updateData, (e) =>
				e ? alert(e) : console.log('Succesfully updated')
			)
		},

		// Providing state to other components
		data: data,
	}))

	// Synonym to component did mount, run at starts of the App
	useEffect(() => {
    functions.initData()
		functions.listenToChanges()

    setTimeout(()=>{
      setIsLoaded(true)
    }, 1500)

	}, [])

	// Conditional rendering
	if (data !== {} && isLoaded) {
		return (      
      <Context.Provider value={functions} >
        <HomeStack />
      </Context.Provider>
    )

	} else {
		return <Loader />
	}
}

export default App
