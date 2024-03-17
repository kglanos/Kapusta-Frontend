export const monthNameOrkToEng = name => {
  switch (name) {
    case 'Styczeń':
      return 'January';
    case 'Luty':
      return 'February';
    case 'Marzec':
      return 'March';
    case 'Kwiecień':
      return 'April';
    case 'Maj':
      return 'May';
    case 'Czerwiec':
      return 'June';
    case 'Lipiec':
      return 'July';
    case 'Sierpień':
      return 'August';
    case 'Wrzesień':
      return 'September';
    case 'Październik':
      return 'October';
    case 'Listopad':
      return 'November';
    case 'Grudzień':
      return 'December';
    default:
      break;
  }
};