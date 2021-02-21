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
        SELECT id, password
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
    `,
    postStatus: `
        INSERT INTO status (
            user_id, status, image
        ) VALUES (
            :user, :status, :image
        )
    `,
    getStatus: `
        SELECT
        *
        FROM status
        WHERE user_id = :userId
    `
};