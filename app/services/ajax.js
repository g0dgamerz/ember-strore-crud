// import AjaxService from 'ember-ajax/services/ajax';
// export default AjaxService.extend({
//   namespace: 'api/',
//   host: 'https://localhost:7293',
//   contentType: 'application/json; charset=utf-8',
//   isSuccess(status, headers, payload) {
//     let isSuccess = this._super(...arguments);
//     if (isSuccess && payload.status) {
//       // when status === 200 and payload has status property,
//       // check that payload.status is also considered a success request
//       return this._super(payload.status);
//     }
//     return isSuccess;
//   },
// });
