const { memoizeResultCreator } = require('./task2')

describe('memoizeResultCreator', () => {
  it('Should pass compareFns results to resultFn', () => {
    const users = [{ id: 1, name: 'Alex' }, { id: 2, name: 'John' }]
    const articles = {
      1: [{ id: 11, name: 'Functional programming' }, { id: 12, name: 'Javascript' }],
      2: [],
    }
    const resultFn = jest.fn()
    const getUsersWithArticlesCount = memoizeResultCreator(
      ({ users }) => users,
      ({ articles }) => articles,
      resultFn,
    )
    getUsersWithArticlesCount({ users, articles })
    getUsersWithArticlesCount({ users, articles })
    expect(resultFn).toHaveBeenCalledWith(users, articles)
    expect(resultFn).toHaveBeenCalledTimes(1)
  })
  it('Should cache result if input was not changed and update if was changed', () => {
    const users = [{ id: 1, name: 'Alex' }, { id: 2, name: 'John' }]
    const articles = {
      1: [{ id: 11, name: 'Functional programming' }, { id: 12, name: 'Javascript' }],
      2: [],
    }
    const resultFn = (users, articles) => users.map(({ id, ...restItem }) => ({
      ...restItem,
      articlesCount: articles[id].length
    }))
    const result = resultFn(users, articles)
    const getUsersWithArticlesCount = memoizeResultCreator(
      ({ users }) => users,
      ({ articles }) => articles,
      ({ isUpdated }) => isUpdated,
      resultFn,
    )
    expect(getUsersWithArticlesCount({ users, articles })).toEqual(result)
    const result1 = getUsersWithArticlesCount({ users, articles })
    expect(result1 === getUsersWithArticlesCount({ users, articles })).toBeTruthy()
    const result2 = getUsersWithArticlesCount({ users, articles: { 1: [], 2: [] } })
    expect(result1 !== result2).toBeTruthy()
  })
})
