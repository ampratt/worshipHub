import React from 'react'
import { Route, IndexRoute, IndexRedirect, browserHistory  } from 'react-router'

import App from './components'
import Dashboard from './components/containers/Dashboard'
import Songs from './components/containers/Songs'
import Services from './components/containers/Services'
import People from './components/containers/People'
import Whoops404 from './components/Whoops404'


const createRoutes = () => {
  return (
		<Route path="/" component={App}>
	    <IndexRedirect to="/dashboard" />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/songs" component={Songs} />
        <Route path="/services" component={Services} />
        <Route path="/people" component={People} />
      	<Route path="/*" component={Whoops404} />
		</Route>
  )
}

const Routes = createRoutes()

export default Routes

    //   <IndexRoute component={Dashboard} />

            // <Route path="list-days" component={SkiDayList}>
            //     <Route path=":filter" component={SkiDayList}/>
            // </Route>
// const routes = (
// 	<Router history={browserHistory} >
// 		<Route path="/" component={App}>
// 			<IndexRoute component={Dashboard}></IndexRoute>
// 			<Route path="/view/:postId" component={SinglePost}></Route>
// 		</Route>
// 	</Router>
// )