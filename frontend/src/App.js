import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'
// Redux
import { Provider } from 'react-redux'
import store from './store'

import './App.module.css'

// My Components
// import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
// import { useTracking } from './components/useTracking'
import ScrollToTop from './components/ScrollToTop'

// My Screens
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/layout/Navbar'

export const App = () => {
  // move to use tracking function?
  // const [GACode, setGACode] = useState('G-9QRB6B7Z8G')
  // useEffect(() => {
  //   const addGACode = async () => {
  //     const { data } = await axios.get('/api/config/GAMeasure')
  //     setGACode(data)

  //     const script = document.createElement('script')

  //     script.type = 'text/javascript'
  //     script.src = `https://www.googletagmanager.com/gtag/js?id=${GACode}`
  //     script.async = true
  //     window.gtag('config', GACode)
  //     document.body.appendChild(script)
  //   }
  //   addGACode()
  // }, [GACode])

  // useTracking(GACode)

  return (
    <>
      {/* <Navbar bgColor='#3d5aaf' /> */}
      <Switch>
        <Route exact path='/' component={HomeScreen} />

        {/* <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/services' component={ServicesScreen} />
        <Route exact path='/quote' component={QuoteScreen} />
        <Route exact path='/ourwork' component={OurWorkScreen} />
        <Route exact path='/thankyou' component={ThankYouScreen} />
        <Route exact path='/SEO' component={SEOLandingScreen} />
        <Route exact path='/privacy' component={PrivacyPolicyScreen} />
        <Route exact path='/blog' component={BlogScreen} />
        <Route exact path='/blog/:id' component={BlogPostScreen} />
        <Route exact path='/admin' component={AdminScreen} />
        <Route exact path='/admin/site/:id/edit' component={EditSiteScreen} />
        <Route exact path='/admin/blog/:id/edit' component={EditBlogScreen} />
        <Route
          exact
          path='/admin/course/:id/edit'
          component={EditCourseScreen}
        />
        <Route exact path='/upload/:id' component={UploadHostFolderScreen} />
        <Route exact path='/course' component={CourseScreen} />
        <Route exact path='/course/:id' component={CoursePostScreen} />

        <Route component={NotFoundScreen} /> */}
      </Switch>
      {/* <Footer /> */}
    </>
  )
}

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <StyleRoot>
        <App />
      </StyleRoot>
    </BrowserRouter>
  </Provider>
)
