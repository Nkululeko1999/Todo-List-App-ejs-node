export const login = async (req, res) => {
    await res.render("auth.login.ejs");
}

export const signup = async (req, res) => {
    await res.render("auth.signup.ejs");
}