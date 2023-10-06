import  { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemon ] =  useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemon()
  },[])

  const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <article className={`pokeCard    ${pokemon?.types[0].type.name}-border`} onClick={handleNavigate}>
      <header className={`poke_header    ${pokemon?.types[0].type.name}-gradient`}>
        <img className='poke_image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='poke_body'>
        <h3 className='poke_name'>{pokemon?.name}</h3>
        <ul className='poke_types'>
          {
            pokemon?.types.map(typeInfo => (
              <li className='poke_typename' key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
        <hr  className='poke__hr' />
        <ul className='poke_stats'>
          {
            pokemon?.stats.map(statInfo => (
              <li className='poke_stat' key={statInfo.stat.url}>
                <span className='poke_stat_name'>{statInfo.stat.name}</span>
                <span className='poke_stat_value'>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard