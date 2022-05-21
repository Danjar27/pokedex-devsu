import React, {useEffect, useRef, useState} from 'react';
import {TableRowType} from "../../models/table.interfaces";
import {removePokemon} from "../../lib/services/removePokemon";
import {getPokemonByID} from "../../lib/services/getPokemonByID";
import {addPokemon} from "../../lib/services/addNewPokemon";
import {updatePokemon} from "../../lib/services/updatePokemon";
import {getAllPokemons} from "../../lib/services/getAllPokemon";
import ContainerPage from "./ContainerPage";
import SearchInput from "../organisms/SearchInput";
import RoundedButton from "../atoms/RoundedButton";
import Table from "../organisms/Table";
import TableRow from "../molecules/TableRow";
import Loading from "../atoms/Loading";
import NoResults from "../atoms/NoResults";
import PokemonForm from "../organisms/PokemonForm";

const Root = () => {
  const [pokemons, setPokemons] = useState<TableRowType[]>([])
  const [showForm, setShowForm] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [currentPokemon, setCurrentPokemon] = useState<TableRowType>()
  const [somethingChanged, setSomethingChanged] = useState<boolean>(true)
  const [filter, setFilter] = useState<string>("")
  const bottom = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const deleteHandler = async (id: number | string) => {
    await removePokemon(id)
    setSomethingChanged(true)
  }

  const cancelHandler = () => {
    setShowForm(false)
    setCurrentPokemon(undefined)
    setIsEdit(false)
  }

  const onOpenHandler = () => {
    setShowForm(true)
  }

  const editHandler = async (id: string) => {
    const pokemon = await getPokemonByID(id)
    setCurrentPokemon(pokemon as TableRowType)
    setIsEdit(true)
    onOpenHandler()
  }

  const handleSubmit = async (pokemon: TableRowType) => {
    await addPokemon(pokemon);
    setSomethingChanged(true)
  }

  const onUpdateHandler = async (pokemon: TableRowType) => {
    await updatePokemon(pokemon.id as string, pokemon);
    setSomethingChanged(true)
    setIsEdit(false)
    setCurrentPokemon(undefined)
  }

  useEffect(() => {
    if (somethingChanged) {
      (async () => {
        const pokemons = await getAllPokemons()
        setPokemons(pokemons)
      })()
      setSomethingChanged(false)
      setIsLoading(false)
    }
  }, [somethingChanged])

  useEffect(() => {
    if (bottom.current && showForm) {
      bottom.current.scrollIntoView({behavior: "smooth"})
    }
  }, [showForm])

  const filteredPokemon = pokemons.filter(element =>
    !filter || element?.name?.toLowerCase().includes(filter.toLowerCase())
  )

  const thereArePokemons = filteredPokemon.length > 0
  return (
    <ContainerPage>
      <h2>Listado de Pokemon</h2>
      <section className="Search_section">
        <SearchInput
          placeholder="Buscar por nombre"
          onSearch={(name) => setFilter(name)}
        />
        <RoundedButton text="Nuevo" icon={"/images/add_icon.svg"} onClick={onOpenHandler}/>
      </section>
      <section style={{marginTop: 20}}>
        <Table>
          {
            thereArePokemons &&
            <TableRow
              elements={filteredPokemon}
              onEdit={editHandler}
              onDelete={deleteHandler}
            />
          }
        </Table>
        {isLoading && <Loading/>}
        {!thereArePokemons && filter && <NoResults name={filter}/>}
      </section>
      {showForm &&
        <div ref={bottom}>
          <PokemonForm
            isEdit={isEdit}
            onEdit={onUpdateHandler}
            values={currentPokemon as TableRowType}
            onSubmit={handleSubmit}
            onCancel={cancelHandler}
          />
        </div>
      }
    </ContainerPage>
  )
}

export default Root;