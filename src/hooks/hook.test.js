import useForm from './index'
import setValues from './index'
import handleChange from './index'
import useEffect from './index'
import createAction from './index'

describe('tests if there are functions in quiverAPI', () => {
  test('Checks the combineReducers', () => {
    
    expect(useForm).toBeTruthy();
  })

  test('tests if setValues exists', () => {
    
    expect(setValues).toBeTruthy();
  })

  test('tests if handleChange exists', () => {
    
    expect(handleChange).toBeTruthy();
  })

  test('tests if useEffect exists', () => {
    
    expect(useEffect).toBeTruthy();
  })

  test('tests if createAction exists', () => {
    
    expect(createAction).toBeTruthy();
  })

});
