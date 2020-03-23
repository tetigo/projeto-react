import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"

//funcoes actions que vao virar props pra colocar no onchange
import {
  atualizaData,
  atualizaNome,
  atualizaEmail,
  atualizaAssunto,
  limparContatos,
  adicionarContato
} from '../../actions/contato'

const ContatoForm = props => {

  const adicionar = async e => {
    e.preventDefault()
    props.adicionarContato(props)
  }


  return (
    <div>
      <h3 className="border-bottom">Formulario</h3>
      <form>
        <div className="form-group row">
          <label htmlFor="data"
            className="col-sm-3 col-form-label">Data:</label>
          <div className="col-sm-9">
            <input type="date"
              className="form-control" id="data"
              value={props.data}
              onChange={props.atualizaData} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="nome"
            className="col-sm-3 col-form-label">Nome:</label>
          <div className="col-sm-9">
            <input type="text"
              className="form-control" id="nome"
              value={props.nome}
              onChange={props.atualizaNome} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email"
            className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-9">
            <input type="email"
              className="form-control" id="email"
              value={props.email}
              onChange={props.atualizaEmail} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="assunto"
            className="col-sm-3 col-form-label">Assunto:</label>
          <div className="col-sm-9">
            <textarea className="form-control"
              id="assunto" rows="5"
              value={props.assunto}
              onChange={props.atualizaAssunto} />

          </div>
        </div>
        <div className="form-group row">
          <button className="btn btn-primary ml-3 mb-3"
            onClick={adicionar}>
            Adicionar
          </button>

        </div>
      </form>
    </div>
  )
}

//criando props pegando dados da store
const mapStoreToProps = store => ({
  data: store.contatos.data,
  nome: store.contatos.nome,
  email: store.contatos.email,
  assunto: store.contatos.assunto,
})


// const atualizaData = e => ({
//   type: 'ATUALIZA_DATA',
//   info: e.target.value
// })

//bindActionCreators = transforma funcao em ActionCreator
//redux so trabalha com ActionCreators
//pega as funcoes que vao mandar pra store
//dispatch = disparar as funcoes pro reducer (atualizaData)
const mapActionsToProps = dispatch => bindActionCreators({
  //transformar essa funcao em props
  atualizaData, //json com a lista que queremos transformar
  atualizaNome,
  atualizaEmail,
  atualizaAssunto,
  adicionarContato
}, dispatch)

//pegamos tudo da store tranformando em propriedad e mostondo no form

//pegando mapeamento da store e componente e conectando
//vindo do store pra tela = mapStoreToProps (banco pra propriedade)
//mapActionsToProps (Action pra propriedade)
//conectado = conectar em um componente da store (ContatoForm)
const connectado = connect(mapStoreToProps, mapActionsToProps)(ContatoForm)
//quais propriedades quero aki pra essse componente ContatoFOrm 


export { connectado as ContatoForm } //exportando lá fora com esse nome 

