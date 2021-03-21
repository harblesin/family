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
    `,
    getPosts: `
        SELECT      
        s.user_id AS userId,
        u.username AS username,
        s.image AS image,
        s.status AS status,
        s.board AS board,
        DATE_FORMAT(s.time, "%m/%d/%y %h:%i") AS time
        FROM status s
        INNER JOIN user u
        ON u.id = s.user_id
        WHERE s.board = "general";
    `,
    postStatus: `
        INSERT INTO 
        status
        (user_id, image, status, board, time)
        VALUES (
            28, :filename, :status, 'general', CURRENT_TIMESTAMP()
        );
    `
};