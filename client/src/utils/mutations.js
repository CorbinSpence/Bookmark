// TODO: Implement this file
import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gql`
mutation SaveBook($description: String!, $title: String!, $bookId: ID!, $image: String!) {
    saveBook(description: $description, title: $title, bookId: $bookId, image: $image) {
      email
      username
    }
  }
`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!){
        removeBook(bookId: $bookId){
            _id
            username
            email
            savedBooks{
                description
                title
                bookId
                image
            }
        }
    }
`