const FORMULA_ONE = ''
const DEFAULT = 'DEFAULT'
const TENNIS = ''
const MOTOGP = ''
const GOLF = ''

const specialSportTypes = [
  FORMULA_ONE,
  MOTOGP,
  TENNIS,
  GOLF
]

const InitialDataActions = {
  [DEFAULT]: 'setBasicSportData',
  [TENNIS]: 'getAdditionalTennisData',
  [GOLF]: 'getAdditionalDataForSpecialSportTypes',
  [MOTOGP]: 'getAdditionalDataForSpecialSportTypes',
  [FORMULA_ONE]: 'getAdditionalDataForSpecialSportTypes'
}

const InitialDataStrategy = async (dispatch, sportType, params) => {
  const isSpecialSportType = specialSportTypes.includes(sportType)

  const accessKey = isSpecialSportType ? sportType : DEFAULT
  return dispatch(InitialDataActions[accessKey], params)
}

export default InitialDataStrategy
