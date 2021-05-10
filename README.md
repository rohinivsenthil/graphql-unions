# GraphQL Unions with Apollo Server

Tutorial for learnign about GraphQL unions. You can find the blog link [here](https://rohvsenthil.medium.com/graphql-unions-customize-your-results-7ab70b5b3445)

## Running application 


```bash
# install dependencies
$ yarn install
# start server
$ yarn start
```

## Querying for a GraphQL union 

```
query {
  candy(id: $id) {
    ... on Candy {
      name
      price
    }
    ... on OutOfStock {
      restockDate
    }
    ... on RegionUnavailability {
      availableRegions
    }
  }
}
```
