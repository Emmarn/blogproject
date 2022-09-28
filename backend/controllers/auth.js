export const register = (req, res) => {

    //kolla om användare finns
    const query = `SELECT * FROM users`
    //om ja avbryt

    //om nej lägg till

    res.json("IOn reg controll")

}
export const login = (req, res) => {
    res.json("auth controlled")
}
export const logout = (req, res) => {
    res.json("auth controlled")
}