import './App.css'
import { Home } from './routes/Home'
import { MainLayout } from './layouts/MainLayout'
import { DealerInformation } from './routes/DealerInformation'

function App() {

  return (
    <MainLayout>
      <Home className='-mt-4 text-blue1 max-w-screen-xl mx-auto' />
      <DealerInformation className='max-w-screen-2xl'/>
    </MainLayout>
  )
}

export default App
