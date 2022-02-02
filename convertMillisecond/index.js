const convertMillisecond = (millisecond) => {
  const hour = millisecond / 3600000;
  const restHour = millisecond % 3600000;

  const minutes = restHour / 60000;
  const restMinutes = restHour % 60000;

  const seconds = restMinutes / 1000;

  console.log(`restoHora: ${restHour}`);
  console.log(`restoMinutos: ${restMinutes}`);
  console.log(`${parseInt(hour)} : ${parseInt(minutes)} : ${seconds}`);
}

convertMillisecond(3600000)