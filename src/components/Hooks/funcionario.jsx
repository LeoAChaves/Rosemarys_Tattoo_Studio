import { useEffect, useState} from "react"
import { apiFuncionario } from "../../services/api"
import { useParams } from "react-router-dom"
function useFuncionario() {

  const [funcionario, setFuncionario] = useState({})
  const {id} = useParams() 
  useEffect(() => {
    async function buscaFuncionario() {
       try {
         const response = await apiFuncionario.get(`/funcionario/id/${id}`)
       
         setFuncionario(response.data.funcionarios[0]);
       } catch (error) {
        throw new Error(error.message)
       }
     }
     buscaFuncionario()
 }, [id])

 return [funcionario]
}

export default useFuncionario