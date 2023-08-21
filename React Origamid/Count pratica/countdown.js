export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _currentDate() {
    return new Date();
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._currentDate.getTime();
  }
  get _daysUntilFutureDate() {
    return this._timeStampDiff / (24 * 60 * 60 * 1000);
  }
  get _hoursUntilFutureDate() {
    return this._timeStampDiff / (60 * 60 * 1000);
  }
  get _minutesUntilFutureDate() {
    return this._timeStampDiff / (60 * 1000);
  }
  get _secondsUntilFutureDate() {
    return this._timeStampDiff / 1000;
  }
}
