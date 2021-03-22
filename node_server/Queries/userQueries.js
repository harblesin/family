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
    createPostNoImage: `
        INSERT INTO post (
            user_id, post_body, image, board, datetime_created
        ) VALUES (
            :user, :postBody, NULL, 'general', CURRENT_TIMESTAMP()
        )
    `,
    getStatus: `
        SELECT
        *
        FROM post
        WHERE user_id = :userId
    `,
    getPosts: `
        SELECT      
        p.user_id AS userId,
        u.username AS username,
        p.image AS image,
        p.post_body AS body,
        p.board AS board,
        DATE_FORMAT(p.datetime_created, "%m/%d/%y %h:%i") AS time
        FROM post p
        INNER JOIN user u
        ON u.id = p.user_id
        WHERE p.board = "general"
        ORDER BY p.id DESC;
    `,
    createPost: `
        INSERT INTO 
        post
        (user_id, image, post_body, board, datetime_created)
        VALUES (
            :user, :filename, :postBody, 'general', CURRENT_TIMESTAMP()
        );
    `
};