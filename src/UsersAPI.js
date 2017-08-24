export const getLeaderBoardRecent = () =>
  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent', {
    Accept: 'application/json'
  })
    .then(response => response.json())
    .then(data => data);

export const getLeaderBoardAllTime = () =>
  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', {
    Accept: 'application/json'
  })
    .then(response => response.json())
    .then(data => data);
