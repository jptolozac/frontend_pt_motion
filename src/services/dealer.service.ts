import { API_CONFIG } from '../api/config'
import { IDealer } from '../types/dealer'
// import dealerData from '../mocks/dealerData.json'

export const getDealerData = async () => {
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.dealer}`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: Array<any> = await response.json()

        const dealerDataFormated = data.map(dealer => ({
            id: dealer.id,
            brand: dealer.brand.name,
            branch: dealer.branch.name,
            applicant: dealer.applicant.name
        }))

        return dealerDataFormated
    } catch (error) {
        console.log(`Error al obtener los registros`);
    }
    return []
}

export const createDealer = async (dealer: IDealer) => {
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.dealer}/`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({
                brand_name: dealer.brand,
                branch_name: dealer.branch,
                applicant_name: dealer.applicant
            })
        })
        const data = await response.json()
        console.log("Registro creado", data);
        
    } catch (error) {
        console.log("Error al crear el registro");
    }
}

export const editDealer = async (id: number, dealer: IDealer) => {
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.dealer}/${id}/`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
                brand_name: dealer.brand,
                branch_name: dealer.branch,
                applicant_name: dealer.applicant
            })
        })
        const data = await response.json()
        console.log("Registro actualizado", data);
        
    } catch (error) {
        console.log("Error al actualizar el registro");
    }
}

export const deleteDealer = async (id: number) => {
    try {
        await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.dealer}/${id}`, {
            method: "DELETE"
        })
        // const data = await response.json()
        // console.log(data, "Registro eliminado");
        console.log("Registro eliminado");
    } catch (error) {
        console.log("error al eliminar los datos");
    }
}