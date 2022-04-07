import { useEffect } from 'react'
import { Categories, Carousel } from '../../components/components'
import { useFilter } from '../../contexts/FilterContext'

export default function LandingPage() {
  const {filterDispatch} = useFilter()

  const clearCategory = () => {
    filterDispatch({type:"CLEAR"})
  }

  useEffect(() => {
    clearCategory()
  }, [])

  return (
    <div className='page-body'>
      <Categories/>
      <Carousel/>
    </div>
  )
}
