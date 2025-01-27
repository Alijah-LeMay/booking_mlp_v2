import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Assets
import classes from './HomeScreen.module.css'
import crisiscontrol from '../../assets/crisiscontrolcoaching_logo_small.jpg'

// My Components
import CenterContainer from '../../components/CenterContainer'
import Card from '../../components/Card'
import MyButton from '../../components/MyButton'
import FormField from '../../components/FormField'
import Loader from '../../components/Loader'
import { eventTrack } from '../../components/functions'
import priorityImage from '../../assets/priority.png'

// Calendar
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Redirect } from 'react-router-dom'

const HomeScreen = (props) => {
  const [value, onChange] = useState(new Date())

  useEffect(() => {
    console.log(value)
  }, [value])
  const { history } = props
  // const dispatch = useDispatch();
  // eslint-disable-next-line
  const [popUpIsActive, setPopUpIsActive] = useState(false)
  const [infoMessage, setInfoMessage] = useState(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    // phone: '',
    typeOfSession: ['Standard life Coaching'],
    // appointmentType: ['30 Minute Session'],
    time: ['9:00AM'],
  })
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  // Form State
  const formConfig = {
    name: {
      type: 'input',
      label: 'Full Name',
      config: { type: 'text', placeholder: 'Full Name', label: 'Full Name' },
    },
    email: {
      type: 'input',
      label: 'Email',

      config: { type: 'email', placeholder: 'Email' },
    },
    // phone: {
    //   type: 'input',
    //   label: 'Phone Number',

    //   config: { type: 'number', placeholder: 'Phone' },
    // },
    typeOfSession: {
      type: 'select',
      label: 'Type of Event',

      config: {
        type: 'select',
        placeholder: 'Type of Session',
        options: [
          {
            value: 'Tea Party',
            displayValue: 'Tea Party',
          },
        ],
      },
    },
    // appointmentType: {
    //   type: 'select',
    //   label: 'Choose Appointment Type',

    //   config: {
    //     type: 'select',
    //     placeholder: 'Appointment Type',
    //     name: 'Appointment Type',
    //     options: [
    //       { value: '30 Minute Session', displayValue: '30 Minute Session' },
    //       { value: '60 Minute Session', displayValue: '60 Minute Session' },
    //       { value: '90 Minute Session', displayValue: '90 Minute Session' },
    //     ],
    //   },
    // },
    time: {
      type: 'select',
      label: 'Choose Appointment Time',

      config: {
        type: 'select',
        placeholder: 'Time',
        name: 'Time',
        options: [
          { value: '9:00AM', displayValue: '9:00 AM' },
          { value: '9:30 AM', displayValue: '9:30 AM' },
          { value: '10:00 AM', displayValue: '10:00 AM' },
          { value: '10:30 AM', displayValue: '10:30 AM' },
          { value: '11:00 AM', displayValue: '11:00 AM' },
          { value: '11:30 AM', displayValue: '11:30 AM' },
          { value: '12:00 PM', displayValue: '12:00 PM' },
          { value: '12:30 PM', displayValue: '12:30 PM' },
          { value: '1:00 PM', displayValue: '1:00 PM' },
          { value: '1:30 PM', displayValue: '1:30 PM' },
          { value: '2:00 PM', displayValue: '2:00 PM' },
          { value: '2:30 PM', displayValue: '2:30 PM' },
          { value: '3:00 PM', displayValue: '3:00 PM' },
          { value: '3:30 PM', displayValue: '3:30 PM' },
          { value: '4:00 PM', displayValue: '4:00 PM' },
          { value: '4:30 PM', displayValue: '4:30 PM' },
          { value: '5:00 PM', displayValue: '5:00 PM' },
          { value: '5:30 PM', displayValue: '5:30 PM' },
        ],
      },
    },
  }
  // Tracking Handlers
  const getQuoteHandler = () => {
    eventTrack('quote', 'Quote_Submit_Button_Click', 'test_001')
  }
  // Prepare formState objects
  const formElements = []
  for (let key in formState) {
    formElements.push({
      id: key,
      setup: formConfig[key],
      value: formState[key],
    })
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        })
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoadingSubmit(true)
    const {
      name,
      email,
      phone,
      //  typeOfSession,
      time,
      appointmentType,
    } = formState
    if (
      email === undefined ||
      email === null ||
      email === '' ||
      email.length < 1
    ) {
      setInfoMessage('Please enter your Email')
      setLoadingSubmit(false)

      return
    }
    setInfoMessage(null)

    try {
      await axios.post('/api/send', {
        name,
        email,
        phone,
        typeOfSession,
        appointmentType,
        time,
        value,
      })
      console.log('Message Sent')
      // ensuring that paths are still the same to prevent a state change attempt when the screen has changed.
      if (history.location.pathname === '/') {
        console.log('migrate site')
        window.location.href = 'https://www.crisiscontrolcoaching.com'

        setPopUpIsActive(true)
      }
    } catch (error) {
      console.log('Message failed to send')
    }
    if (history.location.pathname === '/') setLoadingSubmit(false)
  }

  return (
    <div className={classes.screen_container}>
      <div className='container'>
        {/* <div className={classes.action_image_container}>
          <img
            priority
            className={classes.image}
            src={crisiscontrol}
            alt={'Coach Chemo Consultation Action Image'}
          />
          <img
            className={classes.image}
            src={priorityImage}
            alt={priorityImage}
          />
        </div> */}
        <div className={classes.card_details}>
          <div className={classes.calendar_section_container}>
            <Calendar
              className={classes.calendar_class}
              onChange={onChange}
              value={value}
            />
          </div>

          <form onSubmit={submitHandler}>
            {formElements.map((formElement) => (
              <FormField
                key={formElement.id}
                label={formElement.setup.label}
                type={formElement.setup.type}
                config={formElement.setup.config}
                value={formElement.value}
                changed={(event) => inputChangedHandler(event, formElement.id)}
              />
            ))}

            {infoMessage && <p className={classes.redMessage}>{infoMessage}</p>}
            {loadingSubmit ? (
              <Loader />
            ) : (
              <MyButton
                content='Request Coaching'
                variant='submit'
                tracking={getQuoteHandler}
                style={{ margin: '10px 0' }}
                hoverColor='#4bb781'
                fontSize='1.3rem'
              />
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
