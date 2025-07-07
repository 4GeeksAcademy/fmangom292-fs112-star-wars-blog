export const initialStore=()=>{
  return{
    characters: [],
    planets: [],
    vehicles: [],
    message: null
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      break
    case 'setCharacters':
      return {
        ...store,
        characters: action.payload
      };
    break;
    case 'setPlanets':
      return {
        ...store,
        planets: action.payload
      };
    break;
    case 'setVehicles':
      return {
        ...store,
        vehicles: action.payload
      };
    break;
    case 'setFavorites':
      return {
        ...store,
        favorites: action.payload
      };
    break;  
    default:
      throw Error('Unknown action.');
  }    
}
