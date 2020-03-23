// export const atualizaData = e => {
//   return {
//     type: 'ATUALIZA_DATA',
//     info: e.target.value
//   }
// }

import axios from 'axios'

const URL = 'http://localhost:3200/api/contatos'


export const atualizaData = e => ({
    type: 'ATUALIZA_DATA',
    info: e.target.value
})


export const atualizaNome = e => ({
  type: 'ATUALIZA_NOME',
  info: e.target.value
})


export const atualizaEmail = e => ({
  type: 'ATUALIZA_EMAIL',
  info: e.target.value
})


export const atualizaAssunto = e => ({
  type: 'ATUALIZA_ASSUNTO',
  info: e.target.value
})

export const limparContatos = () =>({
  type: 'LIMPAR_CONTATOS'
})

//a regra de negocio deve ficar na action porque podemos ter varios componentes
//fica tudo aqui e lá só chama
//com thunk conseguimos retornar funcao e não mais somente plain object
// export const adicionarContato = props => {
//   return (dispatch) => {
//       const { data, nome, email, assunto } = props;
  
//       if (data === '' || nome === '' || email === '' || assunto === '') {
//           alert('Favor preencher todos os campos');
//           dispatch({ type: 'ERRO_CONTATOS'})
//       }

//       const body = {data, nome, email, assunto};

//       return axios.post(URL, body)
//       .then(_ =>{
//           alert('Contato enviado com sucesso, aguarde retorno');
//           dispatch(limparContatos())
//       })
//       .catch(error => {
//           console.log(error)
//           alert('Erro ao salvar contato')
//       })
//   }
// }


export const adicionarContato = props => {
  return async (dispatch) => {
      const { data, nome, email, assunto } = props;
  
      if (data === '' || nome === '' || email === '' || assunto === '') {
          alert('Favor preencher todos os campos');
          dispatch({ type: 'ERRO_CONTATOS'})
      }

      try{
          const body = {data, nome, email, assunto};

          await axios.post(URL, body)
          alert('Contato enviado com sucesso, aguarde retorno');
          return dispatch(limparContatos())
      }catch(error) {
          console.log(error)
          alert('Erro ao salvar contato')
      }
  }
}