const secondsToDeciseconds = (seconds) => Math.trunc(10 * seconds);

const getDisplayHours = (deciseconds) => {
  const decisecondsPerHour = 36000;
  const hr = Math.trunc(deciseconds / decisecondsPerHour);
  const remainingDeciseconds = deciseconds % decisecondsPerHour;
  return [hr, remainingDeciseconds];
};

const getDisplayMinutes = (deciseconds) => {
  const decisecondsPerMinute = 600;
  const min = Math.trunc(deciseconds / decisecondsPerMinute);
  const remainingDeciseconds = deciseconds % decisecondsPerMinute;
  return [min, remainingDeciseconds];
};

const leftPadWithZero = (num) => {
    return num >= 10 ? num.toString() : "0" + num;
}

const displayTimeToSeconds = (displayTime) => {
  const hrMinSec = displayTime.split(":").map(parseFloat);
  let seconds = hrMinSec.pop();
  if (hrMinSec.length > 0) {
    seconds += hrMinSec.pop() * 60;
  }
  if (hrMinSec.length > 0) {
    seconds += hrMinSec.pop() * 3600;
  }
  return seconds;
};

const secondsToDisplayTime = (seconds) => {
  let hr, min, sec;
  let remainingDeciseconds = secondsToDeciseconds(seconds);
  [hr, remainingDeciseconds] = getDisplayHours(remainingDeciseconds);
  [min, remainingDeciseconds] = getDisplayMinutes(remainingDeciseconds);
  sec = remainingDeciseconds / 10;
  return [hr, min, sec].map(leftPadWithZero).join(":");
};
