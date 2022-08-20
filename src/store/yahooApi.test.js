import setSP500 from './yahooApi'
import getSP500 from './yahooApi'
import SP500 from './yahooApi'
import createReducer from './yahooApi'
import createAction from './yahooApi'


describe('tests if there are functions in yahooApi', () => {
  test('Checks the combineReducers', () => {
    
    expect(setSP500).toBeTruthy();
  })

  test('tests if getSP500 exists', () => {
    
    expect(getSP500).toBeTruthy();
  })

  test('tests if SP500 exists', () => {
    
    expect(SP500).toBeTruthy();
  })

  test('tests if createReducer exists', () => {
    
    expect(createReducer).toBeTruthy();
  })

  test('tests if createAction exists', () => {
    
    expect(createAction).toBeTruthy();
  })


});
