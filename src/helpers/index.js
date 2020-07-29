import {
  chain,
  orderBy
} from 'lodash';

export function sortChatsByDate(chats) {
  const sortedChats = chain(chats)
    .filter((chat) => chat.messages && chat.messages.length )
    .map((chat) => {
      let sortedMessages = orderBy(chat.messages, 'sent_at', 'desc');
      return {
        ...chat,
        messages: sortedMessages,
        latest: sortedMessages[0].sent_at
      }
    })
    .orderBy('latest', 'desc')
    .value();

  console.log(sortedChats);
  return sortedChats;
}

export function humanizeTime(d0) {
  const d = (d0 instanceof Date) ? d0 : new Date(d0);
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
  };
  return Intl.DateTimeFormat('default', options).format(d);
}

const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
export function humanizeTimeDiff(d0, d2 = new Date()) {
  const d1 = (d0 instanceof Date) ? d0 : new Date(d0);
  const msDiff = d2.getTime() - d1.getTime();
  const sDiff = msDiff * 1000;

  const secondsPerDay = 60*60*24;
  if (sDiff < 60) {
    return `${sDiff} seconds ago`;
  } else if (sDiff < 3600) {
    return `${parseInt(sDiff/3600)} minutes ago`;
  } else if (sDiff < secondsPerDay) {
    return `${d1.getHours()}:${d1.getMinutes()}`;
  } else if (sDiff < secondsPerDay*2) {
    return 'Yesterday';
  } else if (sDiff < secondsPerDay*7){
    return weekDays[d1.getDay()]
  } else {
    const dd = `00${d1.getDate()}`.slice(-2);
    const mm = `00${d1.getMonth()+1}`.slice(-2);
    return `${dd}/${mm}`;
  }
}

export function parseMessage(msg) {
  const date = humanizeTimeDiff(msg)
}