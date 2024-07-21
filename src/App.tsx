import './App.css'
import { Home } from './routes/Home'
import { MainLayout } from './layouts/MainLayout'
import { DealerInformation } from './routes/DealerInformation'
import { AnimationProvider } from './context/AnimationProvider'

function App() {

  return (
    <MainLayout>
      <AnimationProvider>
        <Home className='text-blue1 max-w-screen-xl mx-auto' />
        <DealerInformation className='max-w-screen-3xl' />
      </AnimationProvider>
    </MainLayout>
  )
}

export default App
