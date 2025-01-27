import { combineReducers } from 'redux'

import {
  blogListReducer,
  blogCreateReducer,
  blogUpdateReducer,
  blogDetailsReducer,
  blogDeleteReducer,
} from './blogReducers'

export default combineReducers({
  // siteList: siteListReducer,
  // siteDetails: siteDetailsReducer,
  // siteCreate: siteCreateReducer,
  // siteDelete: siteDeleteReducer,
  // siteUpdate: siteUpdateReducer,
  // userLogin: userLoginReducer,
  blogList: blogListReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDetails: blogDetailsReducer,
  blogDelete: blogDeleteReducer,
})
