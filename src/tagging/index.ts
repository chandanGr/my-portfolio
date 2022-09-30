import TagManager from 'react-gtm-module';
import { IDataLayer } from './interface';

function publishTagEvent(dataLayer: IDataLayer) {
  try {
    console.log(dataLayer.event_name);
    TagManager.dataLayer({ dataLayer });
  } catch (e) {
    console.error(e);
  }
}

export default publishTagEvent;
