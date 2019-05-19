export const USER_FRAGMENT = `
    fragment UserParts on User{
        id,
        name,
        email,
        firstName
        lastName
        bio
        posts {
            id
            caption
        }
    }
`;


export const COMMENT_FRAGMENT = `
    fragment CommentParts on Coment{
        id,
        text,
        user {
            name
        }
    }
`;