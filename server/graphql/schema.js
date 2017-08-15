import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'

// Hardcoded Data
const conversations = [
  {
    id: '123',
    name: 'Alice',
    history: [
      {id: '1', username: 'me', content: 'hi'},
      {id: '2', username: 'Alice', content: 'hello'},
      {id: '4', username: 'me', content: 'how are you?'},
      {id: '5', username: 'Alice', content: 'fine'}
    ]
  },
  {
    id: '456',
    name: 'Bob',
    history: [
      {id: '3', username: 'me', content: 'yeaah'}
    ]
  }
]

// Message Type
const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    content: { type: GraphQLString }
  })
})

// Conversation Type
const ConversationType = new GraphQLObjectType({
  name: 'Conversation',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    history: { type: new GraphQLList(MessageType) }
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    conversations: {
      type: new GraphQLList(ConversationType),
      resolve (parentValue, args) {
        return conversations
      }
    },
    conversation: {
      type: ConversationType,
      args: {
        id: {type: GraphQLString}
      },
      resolve (parentValue, args) {
        return conversations.find((conversation) => { return conversation.id === args.id })
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
