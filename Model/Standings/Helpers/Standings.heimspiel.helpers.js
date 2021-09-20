import Heimspiel from '../../../Vendors/Heimspiel'
import { STANDINGS } from '../../../Vendors/Heimspiel/endpoints'

export const conferenceLabelKeys = {
  'Eastern Conference': 'standings_nba_east_header',
  'Western Conference': 'standings_nba_west_header',
  'AFC North': 'standings_nfl_afc_north_header',
  'AFC South': 'standings_nfl_afc_south_header',
  'AFC West': 'standings_nfl_afc_west_header',
  'AFC East': 'standings_nfl_afc_east_header',
  'NFC North': 'standings_nfl_nfc_north_header',
  'NFC South': 'standings_nfl_nfc_south_header',
  'NFC West': 'standings_nfl_nfc_west_header',
  'NFC East': 'standings_nfl_nfc_east_header',
  'Bobrov Division': 'standings_khl_bobrov_header',
  'Tarasov Division': 'standings_khl_tarasov_header',
  'Kharlamov Division': 'standings_khl_kharlamov_header',
  'Chernyshev Division': 'standings_khl_chernyshev_header',
  'East Division': 'standings_nhl_east_header',
  'West Division': 'standings_nhl_west_header',
  'North Division': 'standings_nhl_north_header',
  'Atlantic Division': 'standings_nba_atlantic_header',
  'Central Division': 'standings_central_header',
  'Southeast Division': 'standings_nba_southeast_header',
  'Northwest Division': 'standings_nba_northwest_header',
  'Pacific Division': 'standings_nba_pacific_header',
  'Southwest Division': 'standings_nba_southwest_header'
}

const loc = message => message
const isEmpty = data => true

export const SMALL_LOGO_URL = 'https://s.hs-data.com/gfx/emblem/common/60x60/'
export const LOGO_EXTENSION = '.png'
export const COMPETITON_IMAGE_URL = 'https://s.hs-data.com/gfx/competition/png/normal/50x50/'
export const COMPETITON_IMAGE_EXTENSION = '.png'
export const HUNDRED_NUMBER_CONSTANT = 100

const OUTPUT_WHEN_DATA_MISSING = '-'

const endpoint = STANDINGS

const _isValidStandings = ({data, name}) => {
  const { round, round: [firstRoundElement] = [] } = data || {}
  const { group, standing } = firstRoundElement || {}
  const isDataValid = !isEmpty(data) && name
  const isRoundValid = round.length
  const hasStandingOrGroup = (group && !isEmpty(group)) || (standing && !isEmpty(standing))
  return isDataValid && isRoundValid && hasStandingOrGroup
}

export const getStandingData = async ({ competitionId, roundName }) => {
  try {
    const response = await Heimspiel.get({ endpoint, params: { competitionId } })
    const data = response.data[0].competition[0].season[0]
    console.log(response)

    return doSomethingMotherfucker({ data, competitionId, roundName })
  } catch (error) {
    throw new Error(error)
  }
}

const doSomethingMotherfucker = ({ data, competitionId: coId, roundName: name }) => {
  const standings = []
  if (!_isValidStandings({data, name})) {
    throw new Error('Thare is a data problem when creating standing table data!')
  }
  const { group, standing } = data.round[0]
  if (group) {
    for (let index = 0, length = group.length; index < length; index++) {
      if (!group[index].standing) {
        throw new Error('There is no standing for the group!')
      }
      standings.push({
        module: {
          name: 'sm_menu_standings',
          icon: 'table'
        },
        teamInfo: {
          teamImage: _prepareCompetitionImage(coId),
          teamName: loc(conferenceLabelKeys[group[index].name])
        },
        tableData: _normalizeStandingsForRender({standing: group[index].standing})
      })
    }
  } else if (standing) {
    const rawStandingLeague = (data.round.find(round => round.name === name))
    standings.push({
      module: {
        name: 'sm_menu_standings',
        icon: 'table'
      },
      teamInfo: {
        teamImage: _prepareCompetitionImage(coId)
      },
      tableData: _normalizeStandingsForRender({standing: rawStandingLeague.standing})
    })
  } else {
    throw new Error('getStandingData cannot make standing table data because data source is not in expected format!')
  }
  return standings
}

export const _normalizeStandingsForRender = ({standing}) => {
  const standings = []
  for (let index = 0, length = standing.length; index < length; index++) {
    const teamStats = standing[index]
    const teamId = teamStats.team.id
    const teamName = teamStats.team.name
    const teamStanding = _prepareStanding(teamId, teamName, teamStats)
    standings.push(teamStanding)
  }
  return standings
}

export const _prepareStanding = (teamId, teamName, teamStats) => ({
  teamImage: _prepareTeamImage(teamId),
  teamName: _makeFinalCellText(teamName),
  rank: _makeFinalCellText(teamStats.rank),
  matches: _makeFinalCellText(teamStats.matches),
  win: _makeFinalCellText(teamStats.win),
  draw: _makeFinalCellText(teamStats.draw),
  lost: _makeFinalCellText(teamStats.lost),
  score: _makeFinalCellText(teamStats.score && teamStats.score_against, `${teamStats.score} : ${teamStats.score_against}`),
  difference: _makeFinalCellText(teamStats.difference),
  pts: _makeFinalCellText(teamStats.points),
  percentage: _makeFinalCellText(teamStats.percentage, `${(Number(teamStats.percentage) * HUNDRED_NUMBER_CONSTANT).toFixed(1)}`),
  ratio: _makeFinalCellText(teamStats.points && teamStats.minuspoints, `${teamStats.points} : ${teamStats.minuspoints}`),
  lost_on_penalty: _makeFinalCellText(teamStats.lost_on_penalty),
  lost_on_extra_time: _makeFinalCellText(teamStats.lost_on_extra_time),
  win_on_penalty: _makeFinalCellText(teamStats.win_on_penalty),
  win_on_extra_time: _makeFinalCellText(teamStats.win_on_extra_time),
  // lost_in_regular_time and win_in_regular_time is number calculated from total wins/losses substraced with wins/losses on_penalty and win/lost on-extra_time
  lost_in_regular_time: _makeFinalCellText(teamStats.lost && teamStats.lost_on_penalty && teamStats.lost_on_extra_time,
    `${teamStats.lost - teamStats.lost_on_penalty - teamStats.lost_on_extra_time}`),
  win_in_regular_time: _makeFinalCellText(teamStats.lost && teamStats.lost_on_penalty && teamStats.lost_on_extra_time,
    `${teamStats.win - teamStats.win_on_penalty - teamStats.win_on_extra_time}`)
})

export const _prepareCompetitionImage = id => {
  if (typeof id === 'string' && id) {
    return `${COMPETITON_IMAGE_URL}${id}${COMPETITON_IMAGE_EXTENSION}`
  } else {
    return false
  }
}

export const _prepareTeamImage = id => {
  if (typeof id === 'string' && id) {
    return `${SMALL_LOGO_URL}${id}${LOGO_EXTENSION}`
  } else {
    return false
  }
}

export const _makeFinalCellText = (basicValue, aditionalValue) => {
  let label
  if (typeof basicValue === 'string' && basicValue && !aditionalValue) {
    label = basicValue
  } else if (typeof basicValue !== 'object' && basicValue && aditionalValue) {
    label = aditionalValue
  } else {
    label = OUTPUT_WHEN_DATA_MISSING
  }
  return label
}
