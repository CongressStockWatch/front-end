import setTrades from './quiverApi'
import getTrades from './quiverApi'
import TRADES from './quiverApi'
import createReducer from './quiverApi'
import createAction from './quiverApi'

describe('tests if there are functions in quiverAPI', () => {
  test('Checks the combineReducers', () => {
    
    expect(setTrades).toBeTruthy();
  })

  test('tests if getTrades exists', () => {
    
    expect(getTrades).toBeTruthy();
  })

  test('tests if TRADES exists', () => {
    
    expect(TRADES).toBeTruthy();
  })

  test('tests if createReducer exists', () => {
    
    expect(createReducer).toBeTruthy();
  })

  test('tests if createAction exists', () => {
    
    expect(createAction).toBeTruthy();
  })

});
