export interface BoardOverviewInfo {
  id: string;
  name: string;
  desc: string;
  descData: DescData;
  closed: boolean;
  idOrganization: string;
  idEnterprise: null;
  pinned: boolean;
  url: string;
  shortUrl: string;
  prefs: Prefs;
  labelNames: { [key: string]: string };
}

export interface DescData {
  emoji: Emoji;
}

export interface Emoji {}

export interface Prefs {
  permissionLevel: string;
  hideVotes: boolean;
  voting: string;
  comments: string;
  invitations: string;
  selfJoin: boolean;
  cardCovers: boolean;
  isTemplate: boolean;
  cardAging: string;
  calendarFeedEnabled: boolean;
  hiddenPluginBoardButtons: any[];
  switcherViews: SwitcherView[];
  background: string;
  backgroundColor: string;
  backgroundImage: null;
  backgroundImageScaled: null;
  backgroundTile: boolean;
  backgroundBrightness: string;
  backgroundBottomColor: string;
  backgroundTopColor: string;
  canBePublic: boolean;
  canBeEnterprise: boolean;
  canBeOrg: boolean;
  canBePrivate: boolean;
  canInvite: boolean;
}

export interface SwitcherView {
  _id: string;
  viewType: string;
  enabled: boolean;
}

export interface Operations {
  id: string;
  name: string;
  closed: boolean;
  idBoard: string;
  pos: number;
  subscribed: boolean;
  softLimit: null;
  status: null;
}

export interface ToolCard {
  id: string;
  badges: Badges;
  checkItemStates: null;
  closed: boolean;
  dueComplete: boolean;
  dateLastActivity: string;
  desc: string;
  descData: DescData;
  due: null;
  dueReminder: null;
  email: null;
  idBoard: IDBoard;
  idChecklists: any[];
  idList: string;
  idMembers: any[];
  idMembersVoted: any[];
  idShort: number;
  idAttachmentCover: null;
  labels: any[];
  idLabels: any[];
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl: string;
  start: null;
  subscribed: boolean;
  url: string;
  cover: Cover;
  isTemplate: boolean;
  cardRole: null;
}

export interface Badges {
  attachmentsByType: AttachmentsByType;
  location: boolean;
  votes: number;
  viewingMemberVoted: boolean;
  subscribed: boolean;
  fogbugz: string;
  checkItems: number;
  checkItemsChecked: number;
  checkItemsEarliestDue: null;
  comments: number;
  attachments: number;
  description: boolean;
  due: null;
  dueComplete: boolean;
  start: null;
}

export interface AttachmentsByType {
  trello: Trello;
}

export interface Trello {
  board: number;
  card: number;
}

export interface Cover {
  idAttachment: null;
  color: null;
  idUploadedBackground: null;
  size: Size;
  brightness: Brightness;
  idPlugin: null;
}

export enum Brightness {
  Dark = 'dark',
}

export enum Size {
  Normal = 'normal',
}

export interface DescData {
  emoji: Emoji;
}

export interface Emoji {}

export enum IDBoard {
  The63C510Cc1Ca08F01F5F76A07 = '63c510cc1ca08f01f5f76a07',
}
