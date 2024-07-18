import dealerData from '../mocks/dealerData.json'

export const getDealerData = async() => {
    const data = dealerData
    const dealerDataFormated = data.map(dealer => ({
        brand: dealer.brand,
        branch: dealer.branch,
        applicant: dealer.applicant
    }))

    return dealerDataFormated
}