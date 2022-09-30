import publishTagEvent from ".";
import { TagEvent, TagEventName } from "./interface";

export function addNavLinksTag(linkName: string, linkUrl: string, position: number) {
    const addNavLinksTagDataLayer = {
      event: TagEvent.NAV_LINK,
      event_name: TagEventName.CLICK_NAV_LINK,
      event_params: {
        linkName,
        linkUrl,
        position
      },
    };
    publishTagEvent(addNavLinksTagDataLayer);
}

export function addSideBarLinkTag(linkName: string, linkUrl: string, position: number) {
  const addSideBarLinksTagDataLayer = {
    event: TagEvent.SIDE_BAR_LINK,
    event_name: TagEventName.CLICK_SIDE_BAR_LINK,
    event_params: {
      linkName,
      linkUrl,
      position
    },
  };
  publishTagEvent(addSideBarLinksTagDataLayer);
}

export function addDownloadResumeTag() {
  const addDownloadResumeTagDataLayer = {
    event: TagEvent.RESUME_LINK,
    event_name: TagEventName.CLICK_RESUME_LINK,
  };
  publishTagEvent(addDownloadResumeTagDataLayer);
}

export default {}