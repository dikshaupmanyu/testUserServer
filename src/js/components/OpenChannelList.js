import { errorAlert } from '../utils';
import { Spinner } from './Spinner';
import { SendBirdAction } from '../SendBirdAction';
import { OpenChannelItem } from './OpenChannelItem';
import { List } from './List';
import { body as targetEl } from '../const';
import { ChatLeftMenu } from '../ChatLeftMenu';

let instance = null;

class OpenChannelList extends List {
  constructor() {
    super('Open Channel List', true);
    if (instance) {
      return instance;
    }

    this.scrollEventHandler = this._getOpenChannelList;
    this.searchKeyword = '';
    instance = this;
  }

  _getOpenChannelList(isInit = false, urlKeyword = '') {
    Spinner.start(this.element);

    console.log("hii");

    if (urlKeyword !== this.searchKeyword) {
      this.searchKeyword = urlKeyword;
      isInit = true;
    }

    //console.log("dik");

    const listContent = this.getContentElement();
    if (isInit) {
      listContent.innerHTML = '';
    }

    SendBirdAction.getInstance()
      .getOpenChannelList(isInit, urlKeyword)
      .then(openChannelList => {
        openChannelList.forEach((channel, key) => {
       //   console.log("diksha");
       //   console.log(channel);
        //  console.log(key);
          if (key === 0) {
            SendBirdAction.getInstance()
              .enter(channel.url)
              .then(() => {
                this.close();
              })
              .catch(error => {
                errorAlert(error.message);
              });
          }
        });
        console.log(listContent);
        Spinner.remove();
      })
      .catch(error => {
        errorAlert(error.message);
      });
  }

  render() {
    if (!targetEl.querySelector(`.${this.getRootClassName()}`)) {
      targetEl.appendChild(this.element);
      this._getOpenChannelList(true);
    }
  }

  static getInstance() {
    return new OpenChannelList();
  }
}

export { OpenChannelList };
