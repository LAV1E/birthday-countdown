const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countdown = (date) => {
  const countDate = new Date(date).getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  return { textDay, textHour, textMinute, textSecond };
};

export { countdown };