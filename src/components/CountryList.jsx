import Spinner from "./Spinner"
import Message from "./Message"
import styles from './CountryList.module.css'
import CountryItem from "./CountryItem"

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />

  if (!cities.length) return
  <Message
    message="Add you first city by clicking on a city on the map"
  />

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((element) => element.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }]
    else return arr
  }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country}/>
      ))}
    </ul>
  )
}

export default CountriesList
