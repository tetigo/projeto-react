import { combineReducers } from 'redux'
import contatoReducer from './contato'

//criando banco (combinacao de tabelas)
const tabelas = combineReducers({
  contatos: contatoReducer
})

export default tabelas //nosso banco - combinando as tabelas

