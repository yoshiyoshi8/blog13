import { parseISO, format } from 'date-fns';
import ja from 'date-fns/locale/ja';

export default function ConvertDate({ dateISO }) {
  if (!dateISO) return <time>日付がありません</time>; // null や undefined の場合の処理

  let date;
  if (typeof dateISO === 'string') {
    try {
      date = parseISO(dateISO);
      if (isNaN(date)) throw new Error('Invalid Date');
    } catch (error) {
      console.error('Invalid date format:', dateISO);
      return <time>無効な日付</time>; // エラー時のフォールバック表示
    }
  } else if (dateISO instanceof Date) {
    date = dateISO;
  } else {
    console.error('Unexpected date format:', dateISO);
    return <time>無効な日付</time>;
  }

  return <time dateTime={dateISO}>{format(date, 'yyyy年MM月dd日', { locale: ja })}</time>;
}
