/*
특정 인터페이스를 상속받아 인터페이스를 확장할 수 있다.
*/

interface Time {
  hour: number,
  minute: number,
  second: number,
}

interface DateTime extends Time {
  year: number,
  month: number,
  day: number,
}

interface OffsetDateTime extends DateTime {
  offset: number,
}

interface ZonedDateTime extends DateTime {
  zoneId: number,
}

interface TimeFormat extends Pick<Time, 'hour' | 'minute'> {
  ampm: 'am' | 'pm',
}

const timeFormat: TimeFormat = {
  hour: 1,
  minute: 20,
  ampm: 'am',
}
