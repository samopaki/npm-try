export const BASE_ROUTE = 'https://united-group.json.c.ergebnis-dienst.de/en/EN/'

export const MATCH = 'match'
export const HEAD_TO_HEAD = 'head-to-head'
export const RANKING_BY_TOPIC = 'ranking-by-topic'
export const ADDITIONAL_DATA = 'additional-data'
export const STATISTICS = 'statistics'
export const BOXSCORE = 'boxscore'
export const ROSTER = 'roster'
export const SPORT_TOPIC_LIST = 'sport-topic-list'
export const PERSON_PROFILE = 'person-profile'
export const STANDINGS = 'standings'
export const IMAGE = 'image'

export default {
  [HEAD_TO_HEAD]: ({opponentOneId, opponentTwoId}) => `${BASE_ROUTE}matches-by-opponents/op${opponentOneId}-${opponentTwoId}`,
  [RANKING_BY_TOPIC]: ({topicId = ''}) => `${BASE_ROUTE}ranking-by-topic/to${topicId}`,
  [ADDITIONAL_DATA]: ({matchId = ''}) => `${BASE_ROUTE}match-resultlist/ma${matchId}`,
  [STATISTICS]: ({matchId = ''}) => `${BASE_ROUTE}team-stats-by-match/ma${matchId}`,
  [BOXSCORE]: ({matchId = ''}) => `${BASE_ROUTE}person-stats-by-match/ma${matchId}`,
  [ROSTER]: ({matchId = ''}) => `${BASE_ROUTE}person-stats-by-match/ma${matchId}`,
  [SPORT_TOPIC_LIST]: ({topicId = ''}) => `${BASE_ROUTE}topic-list/to${topicId}`,
  [PERSON_PROFILE]: ({personId = ''}) => `${BASE_ROUTE}person/pe${personId}`,
  [STANDINGS]: ({coId = ''}) => `${BASE_ROUTE}standing/co${coId}`,
  [MATCH]: ({matchId = ''}) => `${BASE_ROUTE}match/ma${matchId}`,
  [IMAGE]: ({imageURL = ''}) => imageURL
}
