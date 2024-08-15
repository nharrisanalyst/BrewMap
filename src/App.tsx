import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import { PriceAddressFetch } from './list/PriceAddressList/PriceAddressFetch';

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <>
      <PriceAddressFetch />
    </>
  )
}

export default App
