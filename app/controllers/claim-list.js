/* eslint-disable ember/no-jquery */
import Controller from '@ember/controller';
import { action } from '@ember/object';
import $ from 'jquery';

export default class ClaimListController extends Controller {
  @action
  sendRequest() {
    // eslint-disable-next-line ember/no-jquery, no-undef
    return $.ajax({
      type: 'GET',
      url: 'https://localhost:7293/api/claims',
      data: null,
      contentType: 'application/json',
    });
  }
}
