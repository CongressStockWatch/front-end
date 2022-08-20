
import combineReducers from './index'
import createStore from './index'

describe('tests if there are functions in store', () => {
  test('Checks the combineReducers', () => {
    
    expect(combineReducers).toBeTruthy();
  })

  test('tests if createStore exists', () => {
    
    expect(createStore).toBeTruthy();
  })
});
