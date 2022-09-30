export enum TagEvent {
  NAV_LINK = 'nav_link',
  SIDE_BAR_LINK = 'side_bar_link',
  RESUME_LINK = 'resume_download'

}

export enum TagEventName {
  SELECT_CONTENT = 'select_content',
  CLICK_NAV_LINK = 'click_nav_link',
  CLICK_SIDE_BAR_LINK = 'click_side_bar_link',
  CLICK_RESUME_LINK = 'click_resume_download',
}

export interface IDataLayer {
  event: TagEvent;
  event_name: TagEventName;
  ecommerce?: {
    [keys: string]: any;
  };
  event_params?: {
    [keys: string]: any;
  };
}

export default {};
