module.exports = {
    getUsers: `
                SELECT * FROM user;
              `,
    loginUser: `
        SELECT
        id 
        FROM user
        WHERE username = :username AND password = :password;
    `,
    findUser: `
        SELECT password
        FROM user 
        WHERE username = :username
    `
};