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
    `,
    checkForExistingUser: `
        SELECT 
        id
        FROM user
        WHERE email_address = :email OR username = :username;
    `,
    createUser: `
        INSERT INTO user (
            email_address, username, password
        ) VALUES (
            :email, :username, :password
        );
    `
};