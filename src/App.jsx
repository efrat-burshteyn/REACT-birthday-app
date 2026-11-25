import ChooseLanguage from './ChooseLanguage'
import BirthDate from './BirthDate'
import GreetingsList from './GreetingsList'

const greeting = ['מזל טוב!', 'שנה טובה ומתוקה', 'שתזכה לבריאות ושמחה'];

function App() {
  return (
    <>
      <ChooseLanguage />
      <BirthDate birthDate={new Date(2006, 6, 27)} />
      <GreetingsList greeting={greeting} />
    </>
  )
}

export default App