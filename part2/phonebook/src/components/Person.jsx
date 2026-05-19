export const Person = ({person}) => {
  return <li>{person.name}: {person.number}</li>
}

export const Persons = ({persons , search}) => {
  return <ul>
        {(persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))).map(person => 
          <Person key={person.name} person={person}/>
        )}
      </ul>
}

