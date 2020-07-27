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
    .orderBy('latest', 'asc')
    .value();
  return sortedChats;
}

const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
export function formatDate(date) {
  const d1 = new Date(date);
  const d2 = new Date();

  const msDiff = d2.getTime() - d1.getTime();
  const sDiff = msDiff * 1000;

  const secondsPerDay = 60*60*24;

  if (sDiff < secondsPerDay) {
    return `${d1.getHours()}:${d1.getMinutes()}`;
  } else if (sDiff < secondsPerDay*2) {
    return 'Yesterday';
  } else if (sDiff < secondsPerDay*7){
    return weekDays[d1.getDay()]
  } else {
    const dd = `00${d1.getDate()}`.slice(-2);
    const mm = `00${d1.getMonth()}`.slice(-2);
    return `${dd}/${mm}`;
  }
}